import { SVG_NS, ClassName, createValue, PointerHandler, isArrowKey, getStepForKey, getHorizontalStepKeys, getVerticalStepKeys, bindValueMap, valueToClassName, Foldable, PointNdTextController, PopupController, connectValues, bindFoldable, forceCast, findNextTarget, supportsTouch, ValueMap, createNumberFormatter, isEmpty, StepConstraint, RangeConstraint, CompositeConstraint, createPlugin, PointNdConstraint, TpError, parseNumber, parseRecord, parsePointDimensionParams, parsePickerLayout } from '@tweakpane/core';

class Rotation {
    multiply(b) {
        return this.format(this.quat.multiply(b.quat));
    }
    premultiply(a) {
        return this.format(a.multiply(this));
    }
    slerp(b, t) {
        return this.format(this.quat.slerp(b.quat, t));
    }
}

function clamp(x, l, h) {
    return Math.min(Math.max(x, l), h);
}

function lofi(x, d) {
    return Math.floor(x / d) * d;
}

function mod(x, d) {
    return x - lofi(x, d);
}

function sanitizeAngle(angle) {
    return mod(angle + Math.PI, Math.PI * 2.0) - Math.PI;
}

class Euler extends Rotation {
    static fromQuaternion(quat, order, unit) {
        const m = quat.toMat3();
        const [i, j, k, sign] = order === 'XYZ' ? [0, 1, 2, 1] :
            order === 'XZY' ? [0, 2, 1, -1] :
                order === 'YXZ' ? [1, 0, 2, -1] :
                    order === 'YZX' ? [1, 2, 0, 1] :
                        order === 'ZXY' ? [2, 0, 1, 1] :
                            [2, 1, 0, -1];
        const result = [0.0, 0.0, 0.0];
        const c = m[k + i * 3];
        result[j] = -sign * Math.asin(clamp(c, -1, 1.0));
        if (Math.abs(c) < 0.999999) {
            result[i] = sign * Math.atan2(m[k + j * 3], m[k * 4]);
            result[k] = sign * Math.atan2(m[j + i * 3], m[i * 4]);
        }
        else {
            // "y is 90deg" cases
            result[i] = sign * Math.atan2(-m[j + k * 3], m[j * 4]);
        }
        if (Math.abs(result[i]) + Math.abs(result[k]) > Math.PI) {
            // "two big revolutions" cases
            result[i] = sanitizeAngle(result[i] + Math.PI);
            result[j] = sanitizeAngle(Math.PI - result[j]);
            result[k] = sanitizeAngle(result[k] + Math.PI);
        }
        return new Euler(...result, order).reunit(unit);
    }
    constructor(x, y, z, order, unit) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0.0;
        this.y = y !== null && y !== void 0 ? y : 0.0;
        this.z = z !== null && z !== void 0 ? z : 0.0;
        this.order = order !== null && order !== void 0 ? order : 'XYZ';
        this.unit = unit !== null && unit !== void 0 ? unit : 'rad';
    }
    get quat() {
        return Quaternion.fromEuler(this);
    }
    getComponents() {
        return [this.x, this.y, this.z];
    }
    toEuler(order, unit) {
        return this.reorder(order).reunit(unit);
    }
    format(r) {
        if (r instanceof Euler) {
            return r.reorder(this.order);
        }
        return r.toEuler(this.order, this.unit);
    }
    reorder(order) {
        if (order === this.order) {
            return this;
        }
        return this.quat.toEuler(order, this.unit);
    }
    reunit(unit) {
        const prev2Rad = {
            deg: Math.PI / 180.0,
            rad: 1.0,
            turn: 2.0 * Math.PI,
        }[this.unit];
        const rad2Next = {
            deg: 180.0 / Math.PI,
            rad: 1.0,
            turn: 0.5 / Math.PI,
        }[unit];
        const prev2Next = prev2Rad * rad2Next;
        return new Euler(prev2Next * this.x, prev2Next * this.y, prev2Next * this.z, this.order, unit);
    }
}

class Quaternion extends Rotation {
    static fromAxisAngle(axis, angle) {
        const halfAngle = angle / 2.0;
        const sinHalfAngle = Math.sin(halfAngle);
        return new Quaternion(axis.x * sinHalfAngle, axis.y * sinHalfAngle, axis.z * sinHalfAngle, Math.cos(halfAngle));
    }
    static fromEuler(eulerr) {
        const euler = eulerr.reunit('rad');
        const [i, j, k, sign] = euler.order === 'XYZ' ? [0, 1, 2, 1] :
            euler.order === 'XZY' ? [0, 2, 1, -1] :
                euler.order === 'YXZ' ? [1, 0, 2, -1] :
                    euler.order === 'YZX' ? [1, 2, 0, 1] :
                        euler.order === 'ZXY' ? [2, 0, 1, 1] :
                            [2, 1, 0, -1];
        const compo = euler.getComponents();
        const ti = 0.5 * compo[i];
        const tj = 0.5 * sign * compo[j];
        const tk = 0.5 * compo[k];
        const ci = Math.cos(ti);
        const cj = Math.cos(tj);
        const ck = Math.cos(tk);
        const si = Math.sin(ti);
        const sj = Math.sin(tj);
        const sk = Math.sin(tk);
        const result = [
            0.0,
            0.0,
            0.0,
            ck * cj * ci + sk * sj * si,
        ];
        result[i] = ck * cj * si - sk * sj * ci;
        result[j] = sign * (ck * sj * ci + sk * cj * si);
        result[k] = sk * cj * ci - ck * sj * si;
        return new Quaternion(...result);
    }
    static lookRotation(look, up) {
        const { normal, tangent, binormal } = look.orthoNormalize(up);
        const m11 = binormal.x;
        const m12 = tangent.x;
        const m13 = normal.x;
        const m21 = binormal.y;
        const m22 = tangent.y;
        const m23 = normal.y;
        const m31 = binormal.z;
        const m32 = tangent.z;
        const m33 = normal.z;
        // Ref: https://github.com/mrdoob/three.js/blob/master/src/math/Quaternion.js
        // Ref: http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        const trace = m11 + m22 + m33;
        if (trace > 0.0) {
            const s = 0.5 / Math.sqrt(trace + 1.0);
            return new Quaternion((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s);
        }
        else if (m11 > m22 && m11 > m33) {
            const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
            return new Quaternion(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s);
        }
        else if (m22 > m33) {
            const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
            return new Quaternion((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s);
        }
        else {
            const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
            return new Quaternion((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s);
        }
    }
    constructor(x, y, z, w) {
        super();
        this.x = x !== null && x !== void 0 ? x : 0.0;
        this.y = y !== null && y !== void 0 ? y : 0.0;
        this.z = z !== null && z !== void 0 ? z : 0.0;
        this.w = w !== null && w !== void 0 ? w : 1.0;
    }
    get quat() {
        return this;
    }
    getComponents() {
        return [this.x, this.y, this.z, this.w];
    }
    toEuler(order, unit) {
        return Euler.fromQuaternion(this, order, unit);
    }
    get lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    get length() {
        return Math.sqrt(this.lengthSq);
    }
    get normalized() {
        const l = this.length;
        if (l === 0.0) {
            return new Quaternion();
        }
        return new Quaternion(this.x / l, this.y / l, this.z / l, this.w / l);
    }
    get negated() {
        return new Quaternion(-this.x, -this.y, -this.z, -this.w);
    }
    get ban360s() {
        return (this.w < 0.0) ? this.negated : this;
    }
    multiply(br) {
        const b = br.quat;
        return new Quaternion(this.w * b.x + this.x * b.w + this.y * b.z - this.z * b.y, this.w * b.y - this.x * b.z + this.y * b.w + this.z * b.x, this.w * b.z + this.x * b.y - this.y * b.x + this.z * b.w, this.w * b.w - this.x * b.x - this.y * b.y - this.z * b.z);
    }
    format(r) {
        return r.quat;
    }
    slerp(br, t) {
        let b = br.quat;
        if (t === 0.0) {
            return this;
        }
        if (t === 1.0) {
            return b;
        }
        // Ref: https://github.com/mrdoob/three.js/blob/master/src/math/Quaternion.js
        // Ref: http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
        const a = this.ban360s;
        b = b.ban360s;
        let cosHalfTheta = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
        if (cosHalfTheta < 0.0) {
            b = b.negated;
            cosHalfTheta = -cosHalfTheta;
        }
        // I think you two are same
        if (cosHalfTheta >= 1.0) {
            return a;
        }
        const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
        // fallback to simple lerp
        if (sqrSinHalfTheta <= Number.EPSILON) {
            const s = 1.0 - t;
            return new Quaternion(s * a.x + t * b.x, s * a.y + t * b.y, s * a.z + t * b.z, s * a.w + t * b.w).normalized;
        }
        // welcome
        const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
        const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        const ratioA = Math.sin((1.0 - t) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
        return new Quaternion(a.x * ratioA + b.x * ratioB, a.y * ratioA + b.y * ratioB, a.z * ratioA + b.z * ratioB, a.w * ratioA + b.w * ratioB);
    }
    toMat3() {
        const { x, y, z, w } = this;
        return [
            1.0 - 2.0 * y * y - 2.0 * z * z, 2.0 * x * y + 2.0 * z * w, 2.0 * x * z - 2.0 * y * w,
            2.0 * x * y - 2.0 * z * w, 1.0 - 2.0 * x * x - 2.0 * z * z, 2.0 * y * z + 2.0 * x * w,
            2.0 * x * z + 2.0 * y * w, 2.0 * y * z - 2.0 * x * w, 1.0 - 2.0 * x * x - 2.0 * y * y,
        ];
    }
}

class PointProjector {
    constructor() {
        this.offset = [0.0, 0.0, -5];
        this.fov = 30.0;
        this.aspect = 1.0;
        this.viewport = [0, 0, 1, 1];
    }
    project(v) {
        const vcx = (this.viewport[0] + this.viewport[2]) * 0.5;
        const vcy = (this.viewport[1] + this.viewport[3]) * 0.5;
        const vw = (this.viewport[2] - this.viewport[0]);
        const vh = (this.viewport[3] - this.viewport[1]);
        const p = 1.0 / Math.tan(this.fov * Math.PI / 360.0);
        const sz = -(v.z + this.offset[2]);
        const sx = vcx + (v.x + this.offset[0]) / sz * p * vw * 0.5 / this.aspect;
        const sy = vcy - (v.y + this.offset[1]) / sz * p * vh * 0.5;
        return [sx, sy];
    }
}

class SVGLineStrip {
    constructor(doc, vertices, projector) {
        this.element = doc.createElementNS(SVG_NS, 'path');
        this.vertices = vertices;
        this.projector = projector;
    }
    /**
     * Make sure rotation is normalized!
     */
    setRotation(rotation) {
        let pathStr = '';
        this.vertices.forEach((vertex, iVertex) => {
            const transformed = vertex.applyQuaternion(rotation);
            const [sx, sy] = this.projector.project(transformed);
            const cmd = iVertex === 0 ? 'M' : 'L';
            pathStr += `${cmd}${sx} ${sy}`;
        });
        this.element.setAttributeNS(null, 'd', pathStr);
        return this;
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x !== null && x !== void 0 ? x : 0.0;
        this.y = y !== null && y !== void 0 ? y : 0.0;
        this.z = z !== null && z !== void 0 ? z : 0.0;
    }
    getComponents() {
        return [this.x, this.y, this.z];
    }
    get lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    get length() {
        return Math.sqrt(this.lengthSq);
    }
    get normalized() {
        const l = this.length;
        if (l === 0.0) {
            return new Vector3();
        }
        return new Vector3(this.x / l, this.y / l, this.z / l);
    }
    get negated() {
        return new Vector3(-this.x, -this.y, -this.z);
    }
    add(v) {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    sub(v) {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    scale(s) {
        return new Vector3(this.x * s, this.y * s, this.z * s);
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    cross(v) {
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
    orthoNormalize(tangent) {
        const normal = this.normalized;
        tangent = tangent.normalized;
        let dotNT = normal.dot(tangent);
        if (dotNT === 1.0) {
            if (Math.abs(normal.y) > Math.abs(normal.z)) {
                tangent = new Vector3(0.0, 0.0, 1.0);
            }
            else {
                tangent = new Vector3(0.0, 1.0, 0.0);
            }
            dotNT = normal.dot(tangent);
        }
        tangent = tangent.sub(normal.scale(dotNT)).normalized;
        const binormal = tangent.cross(normal);
        return {
            normal,
            tangent,
            binormal,
        };
    }
    applyQuaternion(q) {
        const ix = q.w * this.x + q.y * this.z - q.z * this.y;
        const iy = q.w * this.y + q.z * this.x - q.x * this.z;
        const iz = q.w * this.z + q.x * this.y - q.y * this.x;
        const iw = -q.x * this.x - q.y * this.y - q.z * this.z;
        return new Vector3(ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y, iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z, iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x);
    }
}

function createArcRotation(axis, front) {
    const b = front.z > 0.0
        ? new Quaternion(0.0, 0.0, 0.0, 1.0)
        : new Quaternion(0.0, 0.0, 1.0, 0.0);
    if (Math.abs(axis.z) > 0.9999) {
        return b;
    }
    return Quaternion.lookRotation(axis, front);
}

function createArcVerticesArray(thetaStart, thetaLength, segments, cosAxis, sinAxis, radius = 1.0) {
    const vertices = [];
    for (let i = 0; i < segments; i++) {
        const t = thetaStart + thetaLength * i / (segments - 1);
        const vector = new Vector3();
        vector[cosAxis] = radius * Math.cos(t);
        vector[sinAxis] = radius * Math.sin(t);
        vertices.push(vector);
    }
    return vertices;
}

const className$2 = ClassName('rotationgizmo');
const VEC3_ZERO = new Vector3(0.0, 0.0, 0.0);
const VEC3_XP$2 = new Vector3(1.0, 0.0, 0.0);
const VEC3_YP$2 = new Vector3(0.0, 1.0, 0.0);
const VEC3_ZP$2 = new Vector3(0.0, 0.0, 1.0);
const VEC3_ZN = new Vector3(0.0, 0.0, -1);
const VEC3_XP70 = new Vector3(0.7, 0.0, 0.0);
const VEC3_YP70 = new Vector3(0.0, 0.7, 0.0);
const VEC3_ZP70 = new Vector3(0.0, 0.0, 0.7);
const VEC3_XN70 = new Vector3(-0.7, 0.0, 0.0);
const VEC3_YN70 = new Vector3(0.0, -0.7, 0.0);
const VEC3_ZN70 = new Vector3(0.0, 0.0, -0.7);
const QUAT_IDENTITY$2 = new Quaternion(0.0, 0.0, 0.0, 1.0);
function createLabel(doc, circleClass, labelText) {
    const label = doc.createElementNS(SVG_NS, 'g');
    const circle = doc.createElementNS(SVG_NS, 'circle');
    circle.classList.add(className$2(circleClass));
    circle.setAttributeNS(null, 'cx', '0');
    circle.setAttributeNS(null, 'cy', '0');
    circle.setAttributeNS(null, 'r', '8');
    label.appendChild(circle);
    const text = doc.createElementNS(SVG_NS, 'text');
    text.classList.add(className$2('labeltext'));
    text.setAttributeNS(null, 'y', '4');
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttributeNS(null, 'font-size', '10');
    text.textContent = labelText;
    label.appendChild(text);
    return label;
}
class RotationInputGizmoView {
    get xArcBElement() { return this.xArcBC_.element; }
    get yArcBElement() { return this.yArcBC_.element; }
    get zArcBElement() { return this.zArcBC_.element; }
    get xArcFElement() { return this.xArcFC_.element; }
    get yArcFElement() { return this.yArcFC_.element; }
    get zArcFElement() { return this.zArcFC_.element; }
    get rArcElement() { return this.rArcC_.element; }
    constructor(doc, config) {
        this.onFoldableChange_ = this.onFoldableChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.onModeChange_ = this.onModeChange_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(className$2());
        if (config.pickerLayout === 'popup') {
            this.element.classList.add(className$2(undefined, 'p'));
        }
        const padElem = doc.createElement('div');
        padElem.classList.add(className$2('p'));
        config.viewProps.bindTabIndex(padElem);
        this.element.appendChild(padElem);
        this.padElement = padElem;
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className$2('g'));
        this.padElement.appendChild(svgElem);
        this.svgElem_ = svgElem;
        this.projector_ = new PointProjector();
        this.projector_.viewport = [0, 0, 136, 136];
        const arcArray = createArcVerticesArray(0.0, Math.PI, 33, 'x', 'y');
        const arcArrayR = createArcVerticesArray(0.0, 2.0 * Math.PI, 65, 'x', 'y', 1.1);
        // back arc
        this.xArcB_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.xArcB_.element.classList.add(className$2('arcx'));
        this.svgElem_.appendChild(this.xArcB_.element);
        this.yArcB_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.yArcB_.element.classList.add(className$2('arcy'));
        this.svgElem_.appendChild(this.yArcB_.element);
        this.zArcB_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.zArcB_.element.classList.add(className$2('arcz'));
        this.svgElem_.appendChild(this.zArcB_.element);
        this.xArcBC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.xArcBC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.xArcBC_.element);
        this.yArcBC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.yArcBC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.yArcBC_.element);
        this.zArcBC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.zArcBC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.zArcBC_.element);
        // axes
        const axesElem = doc.createElementNS(SVG_NS, 'g');
        svgElem.classList.add(className$2('axes'));
        this.svgElem_.appendChild(axesElem);
        this.axesElem_ = axesElem;
        this.xAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_XP70], this.projector_);
        this.xAxis_.element.classList.add(className$2('axisx'));
        this.axesElem_.appendChild(this.xAxis_.element);
        this.yAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_YP70], this.projector_);
        this.yAxis_.element.classList.add(className$2('axisy'));
        this.axesElem_.appendChild(this.yAxis_.element);
        this.zAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_ZP70], this.projector_);
        this.zAxis_.element.classList.add(className$2('axisz'));
        this.axesElem_.appendChild(this.zAxis_.element);
        this.xnAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_XN70], this.projector_);
        this.xnAxis_.element.classList.add(className$2('axisn'));
        this.axesElem_.appendChild(this.xnAxis_.element);
        this.ynAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_YN70], this.projector_);
        this.ynAxis_.element.classList.add(className$2('axisn'));
        this.axesElem_.appendChild(this.ynAxis_.element);
        this.znAxis_ = new SVGLineStrip(doc, [VEC3_ZERO, VEC3_ZN70], this.projector_);
        this.znAxis_.element.classList.add(className$2('axisn'));
        this.axesElem_.appendChild(this.znAxis_.element);
        // front arc
        this.xArcF_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.xArcF_.element.classList.add(className$2('arcx'));
        this.svgElem_.appendChild(this.xArcF_.element);
        this.yArcF_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.yArcF_.element.classList.add(className$2('arcy'));
        this.svgElem_.appendChild(this.yArcF_.element);
        this.zArcF_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.zArcF_.element.classList.add(className$2('arcz'));
        this.svgElem_.appendChild(this.zArcF_.element);
        this.xArcFC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.xArcFC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.xArcFC_.element);
        this.yArcFC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.yArcFC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.yArcFC_.element);
        this.zArcFC_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.zArcFC_.element.classList.add(className$2('arcc'));
        this.svgElem_.appendChild(this.zArcFC_.element);
        // roll arc
        this.rArc_ = new SVGLineStrip(doc, arcArrayR, this.projector_);
        this.rArc_.element.classList.add(className$2('arcr'));
        this.rArc_.setRotation(QUAT_IDENTITY$2);
        this.svgElem_.appendChild(this.rArc_.element);
        this.rArcC_ = new SVGLineStrip(doc, arcArrayR, this.projector_);
        this.rArcC_.element.classList.add(className$2('arcc'));
        this.rArcC_.setRotation(QUAT_IDENTITY$2);
        this.svgElem_.appendChild(this.rArcC_.element);
        // labels
        const labelsElem = doc.createElementNS(SVG_NS, 'g');
        svgElem.classList.add(className$2('labels'));
        this.svgElem_.appendChild(labelsElem);
        this.labelsElem_ = labelsElem;
        this.xLabel = createLabel(doc, 'labelcirclex', 'X');
        this.labelsElem_.appendChild(this.xLabel);
        this.yLabel = createLabel(doc, 'labelcircley', 'Y');
        this.labelsElem_.appendChild(this.yLabel);
        this.zLabel = createLabel(doc, 'labelcirclez', 'Z');
        this.labelsElem_.appendChild(this.zLabel);
        this.xnLabel = createLabel(doc, 'labelcirclen', '-X');
        this.labelsElem_.appendChild(this.xnLabel);
        this.ynLabel = createLabel(doc, 'labelcirclen', '-Y');
        this.labelsElem_.appendChild(this.ynLabel);
        this.znLabel = createLabel(doc, 'labelcirclen', '-Z');
        this.labelsElem_.appendChild(this.znLabel);
        // arc hover
        const onHoverXArc = () => {
            this.xArcB_.element.classList.add(className$2('arcx_hover'));
            this.xArcF_.element.classList.add(className$2('arcx_hover'));
        };
        const onLeaveXArc = () => {
            this.xArcB_.element.classList.remove(className$2('arcx_hover'));
            this.xArcF_.element.classList.remove(className$2('arcx_hover'));
        };
        this.xArcBC_.element.addEventListener('mouseenter', onHoverXArc);
        this.xArcBC_.element.addEventListener('mouseleave', onLeaveXArc);
        this.xArcFC_.element.addEventListener('mouseenter', onHoverXArc);
        this.xArcFC_.element.addEventListener('mouseleave', onLeaveXArc);
        const onHoverYArc = () => {
            this.yArcB_.element.classList.add(className$2('arcy_hover'));
            this.yArcF_.element.classList.add(className$2('arcy_hover'));
        };
        const onLeaveYArc = () => {
            this.yArcB_.element.classList.remove(className$2('arcy_hover'));
            this.yArcF_.element.classList.remove(className$2('arcy_hover'));
        };
        this.yArcBC_.element.addEventListener('mouseenter', onHoverYArc);
        this.yArcBC_.element.addEventListener('mouseleave', onLeaveYArc);
        this.yArcFC_.element.addEventListener('mouseenter', onHoverYArc);
        this.yArcFC_.element.addEventListener('mouseleave', onLeaveYArc);
        const onHoverZArc = () => {
            this.zArcB_.element.classList.add(className$2('arcz_hover'));
            this.zArcF_.element.classList.add(className$2('arcz_hover'));
        };
        const onLeaveZArc = () => {
            this.zArcB_.element.classList.remove(className$2('arcz_hover'));
            this.zArcF_.element.classList.remove(className$2('arcz_hover'));
        };
        this.zArcBC_.element.addEventListener('mouseenter', onHoverZArc);
        this.zArcBC_.element.addEventListener('mouseleave', onLeaveZArc);
        this.zArcFC_.element.addEventListener('mouseenter', onHoverZArc);
        this.zArcFC_.element.addEventListener('mouseleave', onLeaveZArc);
        const onHoverRArc = () => {
            this.rArc_.element.classList.add(className$2('arcr_hover'));
        };
        const onLeaveRArc = () => {
            this.rArc_.element.classList.remove(className$2('arcr_hover'));
        };
        this.rArcC_.element.addEventListener('mouseenter', onHoverRArc);
        this.rArcC_.element.addEventListener('mouseleave', onLeaveRArc);
        config.value.emitter.on('change', this.onValueChange_);
        this.value = config.value;
        config.mode.emitter.on('change', this.onModeChange_);
        this.mode_ = config.mode;
        this.update_();
    }
    get allFocusableElements() {
        return [this.padElement];
    }
    update_() {
        const q = this.value.rawValue.quat.normalized;
        // rotate axes
        this.xAxis_.setRotation(q);
        this.yAxis_.setRotation(q);
        this.zAxis_.setRotation(q);
        this.xnAxis_.setRotation(q);
        this.ynAxis_.setRotation(q);
        this.znAxis_.setRotation(q);
        // """z-sort""" axes
        const xp = VEC3_XP$2.applyQuaternion(q);
        const yp = VEC3_YP$2.applyQuaternion(q);
        const zp = VEC3_ZP$2.applyQuaternion(q);
        const xn = xp.negated;
        const yn = yp.negated;
        const zn = zp.negated;
        [
            { el: this.xAxis_.element, v: xp },
            { el: this.yAxis_.element, v: yp },
            { el: this.zAxis_.element, v: zp },
            { el: this.xnAxis_.element, v: xn },
            { el: this.ynAxis_.element, v: yn },
            { el: this.znAxis_.element, v: zn },
        ]
            .map(({ el, v }) => {
            this.axesElem_.removeChild(el);
            return { el, v };
        })
            .sort((a, b) => a.v.z - b.v.z)
            .forEach(({ el }) => {
            this.axesElem_.appendChild(el);
        });
        // rotate arcs
        this.xArcB_.setRotation(createArcRotation(xp, VEC3_ZN));
        this.yArcB_.setRotation(createArcRotation(yp, VEC3_ZN));
        this.zArcB_.setRotation(createArcRotation(zp, VEC3_ZN));
        this.xArcBC_.setRotation(createArcRotation(xp, VEC3_ZN));
        this.yArcBC_.setRotation(createArcRotation(yp, VEC3_ZN));
        this.zArcBC_.setRotation(createArcRotation(zp, VEC3_ZN));
        this.xArcF_.setRotation(createArcRotation(xp, VEC3_ZP$2));
        this.yArcF_.setRotation(createArcRotation(yp, VEC3_ZP$2));
        this.zArcF_.setRotation(createArcRotation(zp, VEC3_ZP$2));
        this.xArcFC_.setRotation(createArcRotation(xp, VEC3_ZP$2));
        this.yArcFC_.setRotation(createArcRotation(yp, VEC3_ZP$2));
        this.zArcFC_.setRotation(createArcRotation(zp, VEC3_ZP$2));
        // rotate labels
        [
            { el: this.xLabel, v: VEC3_XP70 },
            { el: this.yLabel, v: VEC3_YP70 },
            { el: this.zLabel, v: VEC3_ZP70 },
            { el: this.xnLabel, v: VEC3_XN70 },
            { el: this.ynLabel, v: VEC3_YN70 },
            { el: this.znLabel, v: VEC3_ZN70 },
        ].forEach(({ el, v }) => {
            const [x, y] = this.projector_.project(v.applyQuaternion(q));
            el.setAttributeNS(null, 'transform', `translate( ${x}, ${y} )`);
        });
        // """z-sort""" labels
        [
            { el: this.xLabel, v: xp },
            { el: this.yLabel, v: yp },
            { el: this.zLabel, v: zp },
            { el: this.xnLabel, v: xn },
            { el: this.ynLabel, v: yn },
            { el: this.znLabel, v: zn },
        ].map(({ el, v }) => {
            this.labelsElem_.removeChild(el);
            return { el, v };
        })
            .sort((a, b) => a.v.z - b.v.z)
            .forEach(({ el }) => {
            this.labelsElem_.appendChild(el);
        });
    }
    onValueChange_() {
        this.update_();
    }
    onFoldableChange_() {
        this.update_();
    }
    onModeChange_() {
        const mode = this.mode_.rawValue;
        const x = mode === 'angle-x' ? 'add' : 'remove';
        const y = mode === 'angle-y' ? 'add' : 'remove';
        const z = mode === 'angle-z' ? 'add' : 'remove';
        const r = mode === 'angle-r' ? 'add' : 'remove';
        this.xArcB_.element.classList[x](className$2('arcx_active'));
        this.yArcB_.element.classList[y](className$2('arcy_active'));
        this.zArcB_.element.classList[z](className$2('arcz_active'));
        this.xArcF_.element.classList[x](className$2('arcx_active'));
        this.yArcF_.element.classList[y](className$2('arcy_active'));
        this.zArcF_.element.classList[z](className$2('arcz_active'));
        this.rArc_.element.classList[r](className$2('arcr_active'));
    }
}

function saturate(x) {
    return clamp(x, 0.0, 1.0);
}

/**
 * hand-picked random polynomial that looks cool
 * clamped in [0.0 - 1.0]
 */
function iikanjiEaseout(x) {
    if (x <= 0.0) {
        return 0.0;
    }
    if (x >= 1.0) {
        return 1.0;
    }
    const xt = 1.0 - x;
    const y = xt * (xt * (xt * (xt * (xt * (xt * (xt * (-6) + 7))))));
    return saturate(1.0 - y);
}

function linearstep(a, b, x) {
    return saturate((x - a) / (b - a));
}

const INV_SQRT2 = 1.0 / Math.sqrt(2.0);
const VEC3_XP$1 = new Vector3(1.0, 0.0, 0.0);
const VEC3_YP$1 = new Vector3(0.0, 1.0, 0.0);
const VEC3_ZP$1 = new Vector3(0.0, 0.0, 1.0);
const QUAT_IDENTITY$1 = new Quaternion(0.0, 0.0, 0.0, 1.0);
const QUAT_TOP = new Quaternion(INV_SQRT2, 0.0, 0.0, INV_SQRT2);
const QUAT_RIGHT = new Quaternion(0.0, -INV_SQRT2, 0.0, INV_SQRT2);
const QUAT_BOTTOM = new Quaternion(-INV_SQRT2, 0.0, 0.0, INV_SQRT2);
const QUAT_LEFT = new Quaternion(0.0, INV_SQRT2, 0.0, INV_SQRT2);
const QUAT_BACK = new Quaternion(0.0, 1.0, 0.0, 0.0);
class RotationInputGizmoController {
    constructor(doc, config) {
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.mode_ = createValue('free');
        this.view = new RotationInputGizmoView(doc, {
            value: this.value,
            mode: this.mode_,
            viewProps: this.viewProps,
            pickerLayout: config.pickerLayout,
        });
        this.ptHandler_ = new PointerHandler(this.view.padElement);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
        const ptHandlerXArcB = new PointerHandler(this.view.xArcBElement);
        ptHandlerXArcB.emitter.on('down', () => this.changeModeIfNotAuto_('angle-x'));
        ptHandlerXArcB.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerXArcF = new PointerHandler(this.view.xArcFElement);
        ptHandlerXArcF.emitter.on('down', () => this.changeModeIfNotAuto_('angle-x'));
        ptHandlerXArcF.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerYArcB = new PointerHandler(this.view.yArcBElement);
        ptHandlerYArcB.emitter.on('down', () => this.changeModeIfNotAuto_('angle-y'));
        ptHandlerYArcB.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerYArcF = new PointerHandler(this.view.yArcFElement);
        ptHandlerYArcF.emitter.on('down', () => this.changeModeIfNotAuto_('angle-y'));
        ptHandlerYArcF.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerZArcB = new PointerHandler(this.view.zArcBElement);
        ptHandlerZArcB.emitter.on('down', () => this.changeModeIfNotAuto_('angle-z'));
        ptHandlerZArcB.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerZArcF = new PointerHandler(this.view.zArcFElement);
        ptHandlerZArcF.emitter.on('down', () => this.changeModeIfNotAuto_('angle-z'));
        ptHandlerZArcF.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        const ptHandlerRArc = new PointerHandler(this.view.rArcElement);
        ptHandlerRArc.emitter.on('down', () => this.changeModeIfNotAuto_('angle-r'));
        ptHandlerRArc.emitter.on('up', () => this.changeModeIfNotAuto_('free'));
        [
            { el: this.view.xLabel, q: QUAT_RIGHT },
            { el: this.view.yLabel, q: QUAT_TOP },
            { el: this.view.zLabel, q: QUAT_IDENTITY$1 },
            { el: this.view.xnLabel, q: QUAT_LEFT },
            { el: this.view.ynLabel, q: QUAT_BOTTOM },
            { el: this.view.znLabel, q: QUAT_BACK },
        ].forEach(({ el, q }) => {
            const ptHandler = new PointerHandler(el);
            ptHandler.emitter.on('down', () => this.autoRotate_(q));
        });
        this.px_ = null;
        this.py_ = null;
        this.angleState_ = null;
    }
    handlePointerEvent_(d) {
        if (!d.point) {
            return;
        }
        const mode = this.mode_.rawValue;
        const x = d.point.x;
        const y = d.point.y;
        if (mode === 'auto') ;
        else if (mode === 'free') {
            if (this.px_ != null && this.py_ != null) {
                const dx = x - this.px_;
                const dy = y - this.py_;
                const l = Math.sqrt(dx * dx + dy * dy);
                if (l === 0.0) {
                    return;
                }
                const axis = new Vector3(dy / l, dx / l, 0.0);
                const quat = Quaternion.fromAxisAngle(axis, l / 68.0);
                this.value.rawValue = this.value.rawValue.premultiply(quat);
            }
            this.px_ = x;
            this.py_ = y;
        }
        else if (mode === 'angle-r') {
            const cx = d.bounds.width / 2.0;
            const cy = d.bounds.height / 2.0;
            const angle = Math.atan2(y - cy, x - cx);
            if (this.angleState_ == null) {
                const axis = new Vector3(0.0, 0.0, 1.0);
                this.angleState_ = {
                    initialRotation: this.value.rawValue,
                    initialAngle: angle,
                    axis,
                    reverseAngle: true,
                };
            }
            else {
                const { initialRotation, initialAngle, axis } = this.angleState_;
                const angleDiff = -sanitizeAngle(angle - initialAngle);
                const quat = Quaternion.fromAxisAngle(axis, angleDiff);
                this.value.rawValue = initialRotation.premultiply(quat);
            }
        }
        else {
            const cx = d.bounds.width / 2.0;
            const cy = d.bounds.height / 2.0;
            const angle = Math.atan2(y - cy, x - cx);
            if (this.angleState_ == null) {
                const axis = mode === 'angle-x' ? VEC3_XP$1 :
                    mode === 'angle-y' ? VEC3_YP$1 :
                        VEC3_ZP$1;
                const reverseAngle = axis.applyQuaternion(this.value.rawValue.quat).z > 0.0;
                this.angleState_ = {
                    initialRotation: this.value.rawValue,
                    initialAngle: angle,
                    axis,
                    reverseAngle,
                };
            }
            else {
                const { initialRotation, initialAngle, axis, reverseAngle } = this.angleState_;
                let angleDiff = sanitizeAngle(angle - initialAngle);
                angleDiff = reverseAngle ? -angleDiff : angleDiff;
                const quat = Quaternion.fromAxisAngle(axis, angleDiff);
                this.value.rawValue = initialRotation.multiply(quat);
            }
        }
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data);
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data);
    }
    onPointerUp_() {
        this.px_ = null;
        this.py_ = null;
        this.angleState_ = null;
    }
    onPadKeyDown_(ev) {
        if (isArrowKey(ev.key)) {
            ev.preventDefault();
        }
        const x = getStepForKey(1.0, getHorizontalStepKeys(ev));
        const y = getStepForKey(1.0, getVerticalStepKeys(ev));
        if (x !== 0 || y !== 0) {
            const axis = new Vector3(-y, x, 0.0);
            const quat = Quaternion.fromAxisAngle(axis, Math.PI / 16.0);
            this.value.rawValue = this.value.rawValue.premultiply(quat);
        }
    }
    changeModeIfNotAuto_(mode) {
        if (this.mode_.rawValue !== 'auto') {
            this.mode_.rawValue = mode;
        }
    }
    autoRotate_(to) {
        this.mode_.rawValue = 'auto';
        const from = this.value.rawValue;
        const beginTime = Date.now();
        const update = () => {
            const now = Date.now();
            const t = iikanjiEaseout(linearstep(0.0, 300.0, now - beginTime));
            this.value.rawValue = from.slerp(to, t);
            if (t === 1.0) {
                this.mode_.rawValue = 'free';
                return;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }
}

const className$1 = ClassName('rotationswatch');
const VEC3_XP = new Vector3(1.0, 0.0, 0.0);
const VEC3_YP = new Vector3(0.0, 1.0, 0.0);
const VEC3_ZP = new Vector3(0.0, 0.0, 1.0);
const QUAT_IDENTITY = new Quaternion(0.0, 0.0, 0.0, 1.0);
class RotationInputSwatchView {
    constructor(doc, config) {
        this.onValueChange_ = this.onValueChange_.bind(this);
        config.value.emitter.on('change', this.onValueChange_);
        this.value = config.value;
        this.element = doc.createElement('div');
        this.element.classList.add(className$1());
        config.viewProps.bindClassModifiers(this.element);
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$1('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className$1('g'));
        buttonElem.appendChild(svgElem);
        this.svgElem_ = svgElem;
        this.projector_ = new PointProjector();
        this.projector_.viewport = [0, 0, 20, 20];
        const arcArray = createArcVerticesArray(0.0, Math.PI, 33, 'x', 'y');
        const arcArrayR = createArcVerticesArray(0.0, 2.0 * Math.PI, 65, 'x', 'y');
        // arc
        this.rArc_ = new SVGLineStrip(doc, arcArrayR, this.projector_);
        this.rArc_.element.classList.add(className$1('arcr'));
        svgElem.appendChild(this.rArc_.element);
        this.rArc_.setRotation(QUAT_IDENTITY);
        this.xArc_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.xArc_.element.classList.add(className$1('arc'));
        svgElem.appendChild(this.xArc_.element);
        this.yArc_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.yArc_.element.classList.add(className$1('arc'));
        svgElem.appendChild(this.yArc_.element);
        this.zArc_ = new SVGLineStrip(doc, arcArray, this.projector_);
        this.zArc_.element.classList.add(className$1('arc'));
        svgElem.appendChild(this.zArc_.element);
        this.update_();
    }
    update_() {
        const q = this.value.rawValue.quat.normalized;
        // rotate axes
        const xp = VEC3_XP.applyQuaternion(q);
        const yp = VEC3_YP.applyQuaternion(q);
        const zp = VEC3_ZP.applyQuaternion(q);
        this.xArc_.setRotation(createArcRotation(xp, VEC3_ZP));
        this.yArc_.setRotation(createArcRotation(yp, VEC3_ZP));
        this.zArc_.setRotation(createArcRotation(zp, VEC3_ZP));
    }
    onValueChange_() {
        this.update_();
    }
}

class RotationInputSwatchController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new RotationInputSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps,
        });
    }
}

const className = ClassName('rotation');
class RotationInputView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.foldable.bindExpandedClass(this.element, className(undefined, 'expanded'));
        bindValueMap(config.foldable, 'completed', valueToClassName(this.element, className(undefined, 'cpl')));
        if (config.rotationMode === 'quaternion') {
            this.element.classList.add(className('quat'));
        }
        const headElem = doc.createElement('div');
        headElem.classList.add(className('h'));
        this.element.appendChild(headElem);
        const swatchElem = doc.createElement('div');
        swatchElem.classList.add(className('s'));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        const textElem = doc.createElement('div');
        textElem.classList.add(className('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === 'inline') {
            const pickerElem = doc.createElement('div');
            pickerElem.classList.add(className('g'));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        }
        else {
            this.pickerElement = null;
        }
    }
}

class RotationInputController {
    constructor(doc, config) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.swatchC_ = new RotationInputSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps,
        });
        const buttonElem = this.swatchC_.view.buttonElement;
        buttonElem.addEventListener('blur', this.onButtonBlur_);
        buttonElem.addEventListener('click', this.onButtonClick_);
        this.textC_ = new PointNdTextController(doc, {
            assembly: config.assembly, // TODO: resolve type puzzle
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view = new RotationInputView(doc, {
            rotationMode: config.rotationMode,
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout,
        });
        this.view.swatchElement.appendChild(this.swatchC_.view.element);
        this.view.textElement.appendChild(this.textC_.view.element);
        this.popC_ =
            config.pickerLayout === 'popup'
                ? new PopupController(doc, {
                    viewProps: this.viewProps,
                })
                : null;
        const gizmoC = new RotationInputGizmoController(doc, {
            value: this.value,
            viewProps: this.viewProps,
            pickerLayout: config.pickerLayout,
        });
        gizmoC.view.allFocusableElements.forEach((elem) => {
            elem.addEventListener('blur', this.onPopupChildBlur_);
            elem.addEventListener('keydown', this.onPopupChildKeydown_);
        });
        this.gizmoC_ = gizmoC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(gizmoC.view.element);
            connectValues({
                primary: this.foldable_.value('expanded'),
                secondary: this.popC_.shows,
                forward: (p) => p,
                backward: (_, s) => s,
            });
        }
        else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.gizmoC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    onButtonBlur_(e) {
        if (!this.popC_) {
            return;
        }
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) {
            this.popC_.shows.rawValue = false;
        }
    }
    onButtonClick_() {
        this.foldable_.set('expanded', !this.foldable_.get('expanded'));
        if (this.foldable_.get('expanded')) {
            this.gizmoC_.view.allFocusableElements[0].focus();
        }
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) {
            return;
        }
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) {
            // Next target is in the picker
            return;
        }
        if (nextTarget &&
            nextTarget === this.swatchC_.view.buttonElement &&
            !supportsTouch(elem.ownerDocument)) {
            // Next target is the trigger button
            return;
        }
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === 'Escape') {
                this.popC_.shows.rawValue = false;
            }
        }
        else if (this.view.pickerElement) {
            if (ev.key === 'Escape') {
                this.swatchC_.view.buttonElement.focus();
            }
        }
    }
}

function createAxisEuler(digits, constraint) {
    const step = Math.pow(0.1, digits);
    return {
        baseStep: step,
        constraint: constraint,
        textProps: ValueMap.fromObject({
            formatter: createNumberFormatter(digits),
            keyScale: step,
            pointerScale: step,
        }),
    };
}

function createDimensionConstraint(params) {
    if (!params) {
        return undefined;
    }
    const constraints = [];
    if (!isEmpty(params.step)) {
        constraints.push(new StepConstraint(params.step));
    }
    if (!isEmpty(params.max) || !isEmpty(params.min)) {
        constraints.push(new RangeConstraint({
            max: params.max,
            min: params.min,
        }));
    }
    return new CompositeConstraint(constraints);
}

function createEulerAssembly(order, unit) {
    return {
        toComponents: (r) => r.getComponents(),
        fromComponents: (c) => new Euler(c[0], c[1], c[2], order, unit),
    };
}

function parseEuler(exValue, order, unit) {
    if (typeof (exValue === null || exValue === void 0 ? void 0 : exValue.x) === 'number' &&
        typeof (exValue === null || exValue === void 0 ? void 0 : exValue.y) === 'number' &&
        typeof (exValue === null || exValue === void 0 ? void 0 : exValue.z) === 'number') {
        return new Euler(exValue.x, exValue.y, exValue.z, order, unit);
    }
    else {
        return new Euler(0.0, 0.0, 0.0, order, unit);
    }
}

function parseEulerOrder(value) {
    switch (value) {
        case 'XYZ':
        case 'XZY':
        case 'YXZ':
        case 'YZX':
        case 'ZXY':
        case 'ZYX':
            return value;
        default:
            return undefined;
    }
}

function parseEulerUnit(value) {
    switch (value) {
        case 'rad':
        case 'deg':
        case 'turn':
            return value;
        default:
            return undefined;
    }
}

const RotationInputPluginEuler = createPlugin({
    id: 'rotation',
    type: 'input',
    accept(exValue, params) {
        var _a, _b;
        // Parse parameters object
        const result = parseRecord(params, (p) => ({
            view: p.required.constant('rotation'),
            label: p.optional.string,
            picker: p.optional.custom(parsePickerLayout),
            expanded: p.optional.boolean,
            rotationMode: p.required.constant('euler'),
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams),
            order: p.optional.custom(parseEulerOrder),
            unit: p.optional.custom(parseEulerUnit),
        }));
        return result ? {
            initialValue: parseEuler(exValue, (_a = result.order) !== null && _a !== void 0 ? _a : 'XYZ', (_b = result.unit) !== null && _b !== void 0 ? _b : 'rad'),
            params: result,
        } : null;
    },
    binding: {
        reader({ params }) {
            return (exValue) => {
                var _a, _b;
                return parseEuler(exValue, (_a = params.order) !== null && _a !== void 0 ? _a : 'XYZ', (_b = params.unit) !== null && _b !== void 0 ? _b : 'rad');
            };
        },
        constraint({ params }) {
            var _a, _b;
            return new PointNdConstraint({
                assembly: createEulerAssembly((_a = params.order) !== null && _a !== void 0 ? _a : 'XYZ', (_b = params.unit) !== null && _b !== void 0 ? _b : 'rad'),
                components: [
                    createDimensionConstraint('x' in params ? params.x : undefined),
                    createDimensionConstraint('y' in params ? params.y : undefined),
                    createDimensionConstraint('z' in params ? params.z : undefined),
                ]
            });
        },
        writer(_args) {
            return (target, inValue) => {
                target.writeProperty('x', inValue.x);
                target.writeProperty('y', inValue.y);
                target.writeProperty('z', inValue.z);
            };
        },
    },
    controller({ document, value, constraint, params, viewProps }) {
        var _a, _b;
        if (!(constraint instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
        }
        const expanded = 'expanded' in params ? params.expanded : undefined;
        const picker = 'picker' in params ? params.picker : undefined;
        const unit = (_a = params.unit) !== null && _a !== void 0 ? _a : 'rad';
        const digits = {
            rad: 2,
            deg: 0,
            turn: 2,
        }[unit];
        return new RotationInputController(document, {
            axes: [
                createAxisEuler(digits, constraint.components[0]),
                createAxisEuler(digits, constraint.components[1]),
                createAxisEuler(digits, constraint.components[2]),
            ],
            assembly: createEulerAssembly((_b = params.order) !== null && _b !== void 0 ? _b : 'XYZ', unit),
            rotationMode: 'euler',
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            parser: parseNumber,
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            value,
            viewProps: viewProps,
        }); // TODO: resolve type puzzle
    },
});

const QuaternionAssembly = {
    toComponents: (r) => [
        r.x,
        r.y,
        r.z,
        r.w,
    ],
    fromComponents: (c) => new Quaternion(c[0], c[1], c[2], c[3]),
};

function createAxisQuaternion(constraint) {
    return {
        baseStep: 0.01,
        constraint: constraint,
        textProps: ValueMap.fromObject({
            formatter: (value) => {
                if (Math.abs(value) < 0.995) {
                    return value.toFixed(2).replace('0.', '.');
                }
                else {
                    return value.toFixed(1);
                }
            },
            keyScale: 0.01,
            pointerScale: 0.01,
        }),
    };
}

function parseQuaternion(exValue) {
    if (typeof (exValue === null || exValue === void 0 ? void 0 : exValue.x) === 'number' &&
        typeof (exValue === null || exValue === void 0 ? void 0 : exValue.y) === 'number' &&
        typeof (exValue === null || exValue === void 0 ? void 0 : exValue.z) === 'number' &&
        typeof (exValue === null || exValue === void 0 ? void 0 : exValue.w) === 'number') {
        return new Quaternion(exValue.x, exValue.y, exValue.z, exValue.w);
    }
    else {
        return new Quaternion(0.0, 0.0, 0.0, 1.0);
    }
}

const RotationInputPluginQuaternion = createPlugin({
    id: 'rotation',
    type: 'input',
    accept(exValue, params) {
        // Parse parameters object
        const result = parseRecord(params, (p) => ({
            view: p.required.constant('rotation'),
            label: p.optional.string,
            picker: p.optional.custom(parsePickerLayout),
            expanded: p.optional.boolean,
            rotationMode: p.optional.constant('quaternion'),
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams),
            w: p.optional.custom(parsePointDimensionParams),
        }));
        return result ? {
            initialValue: parseQuaternion(exValue),
            params: result,
        } : null;
    },
    binding: {
        reader(_args) {
            return (exValue) => {
                return parseQuaternion(exValue);
            };
        },
        constraint({ params }) {
            return new PointNdConstraint({
                assembly: QuaternionAssembly,
                components: [
                    createDimensionConstraint('x' in params ? params.x : undefined),
                    createDimensionConstraint('y' in params ? params.y : undefined),
                    createDimensionConstraint('z' in params ? params.z : undefined),
                    createDimensionConstraint('w' in params ? params.w : undefined),
                ]
            });
        },
        writer(_args) {
            return (target, inValue) => {
                target.writeProperty('x', inValue.x);
                target.writeProperty('y', inValue.y);
                target.writeProperty('z', inValue.z);
                target.writeProperty('w', inValue.w);
            };
        },
    },
    controller({ document, value, constraint, params, viewProps }) {
        if (!(constraint instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
        }
        const expanded = 'expanded' in params ? params.expanded : undefined;
        const picker = 'picker' in params ? params.picker : undefined;
        return new RotationInputController(document, {
            axes: [
                createAxisQuaternion(constraint.components[0]),
                createAxisQuaternion(constraint.components[1]),
                createAxisQuaternion(constraint.components[2]),
                createAxisQuaternion(constraint.components[3]),
            ],
            assembly: QuaternionAssembly,
            rotationMode: 'quaternion',
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            parser: parseNumber,
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            value,
            viewProps: viewProps,
        }); // TODO;
    },
});

const id = 'rotation';
const css = '.tp-rotationgizmov_p,.tp-rotationswatchv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-rotationswatchv_b{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-rotationswatchv_b:hover{background-color:var(--btn-bg-h)}.tp-rotationswatchv_b:focus{background-color:var(--btn-bg-f)}.tp-rotationswatchv_b:active{background-color:var(--btn-bg-a)}.tp-rotationswatchv_b:disabled{opacity:.5}.tp-rotationgizmov_p{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-rotationgizmov_p:hover{background-color:var(--in-bg-h)}.tp-rotationgizmov_p:focus{background-color:var(--in-bg-f)}.tp-rotationgizmov_p:active{background-color:var(--in-bg-a)}.tp-rotationgizmov_p:disabled{opacity:.5}.tp-rotationv{position:relative}.tp-rotationv_quat .tp-txtv_i{padding-left:0}.tp-rotationv_root{background-color:var(--mo-bg);width:100%;height:calc(2*var(--cnt-usz))}.tp-rotationv_h{display:flex}.tp-rotationv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz);margin-right:4px}.tp-rotationv_g{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-rotationv.tp-rotationv-expanded .tp-rotationv_g{margin-top:var(--cnt-usp);opacity:1}.tp-rotationv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-rotationswatchv path{stroke-linecap:round;stroke-linejoin:round}.tp-rotationswatchv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-rotationswatchv_arc{fill:none;stroke:var(--btn-bg);stroke-width:1px}.tp-rotationswatchv_arcr{fill:var(--btn-fg);stroke:var(--btn-bg);stroke-width:1px}.tp-rotationgizmov{padding-left:calc(var(--cnt-usz) + 4px)}.tp-rotationgizmov path{stroke-linecap:round;stroke-linejoin:round}.tp-rotationgizmov_p{cursor:move;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-rotationgizmov_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-rotationgizmov_axisx{stroke:#eb103f;stroke-width:2px}.tp-rotationgizmov_axisy{stroke:#4eeb10;stroke-width:2px}.tp-rotationgizmov_axisz{stroke:#1068eb;stroke-width:2px}.tp-rotationgizmov_axisn{stroke:var(--in-fg);stroke-width:2px}.tp-rotationgizmov_arcx{fill:none;stroke:var(--in-fg)}.tp-rotationgizmov_arcx.tp-rotationgizmov_arcx_hover{stroke:#eb103f}.tp-rotationgizmov_arcx.tp-rotationgizmov_arcx_active{stroke:#eb103f;stroke-width:2px}.tp-rotationgizmov_arcy{fill:none;stroke:var(--in-fg)}.tp-rotationgizmov_arcy.tp-rotationgizmov_arcy_hover{stroke:#4eeb10}.tp-rotationgizmov_arcy.tp-rotationgizmov_arcy_active{stroke:#4eeb10;stroke-width:2px}.tp-rotationgizmov_arcz{fill:none;stroke:var(--in-fg)}.tp-rotationgizmov_arcz.tp-rotationgizmov_arcz_hover{stroke:#1068eb}.tp-rotationgizmov_arcz.tp-rotationgizmov_arcz_active{stroke:#1068eb;stroke-width:2px}.tp-rotationgizmov_arcr{fill:none;stroke:var(--in-fg)}.tp-rotationgizmov_arcr.tp-rotationgizmov_arcr_hover{stroke:#ebd510}.tp-rotationgizmov_arcr.tp-rotationgizmov_arcr_active{stroke:#ebd510;stroke-width:2px}.tp-rotationgizmov_arcc{fill:none;stroke:rgba(0,0,0,0);stroke-width:5px;pointer-events:auto}.tp-rotationgizmov_labelcirclex{fill:#eb103f;cursor:pointer;pointer-events:auto}.tp-rotationgizmov_labelcirclex:hover{opacity:.7}.tp-rotationgizmov_labelcircley{fill:#4eeb10;cursor:pointer;pointer-events:auto}.tp-rotationgizmov_labelcircley:hover{opacity:.7}.tp-rotationgizmov_labelcirclez{fill:#1068eb;cursor:pointer;pointer-events:auto}.tp-rotationgizmov_labelcirclez:hover{opacity:.7}.tp-rotationgizmov_labelcirclen{fill:var(--in-fg);cursor:pointer;pointer-events:auto}.tp-rotationgizmov_labelcirclen:hover{opacity:.7}.tp-rotationgizmov_labeltext{fill:var(--btn-fg);stroke:var(--btn-fg);stroke-width:1px}.tp-rotationgizmov_p:focus .tp-rotationgizmov_m{background-color:var(--in-fg);border-width:0}';
const plugins = [
    RotationInputPluginEuler,
    RotationInputPluginQuaternion,
];

export { RotationInputPluginEuler, RotationInputPluginQuaternion, css, id, plugins };
