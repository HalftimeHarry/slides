import { TpEvent, BladeApi, Emitter, ButtonController, ViewProps, ValueMap, PlainView, BladeController, LabelController, createPlugin, parseRecord, TpChangeEvent, isEmpty, mapRange, constrainRange, createNumberFormatter, ClassName, bindValueMap, valueToClassName, SVG_NS, bindValue, createValue, PointerHandler, isArrowKey, getStepForKey, getHorizontalStepKeys, getVerticalStepKeys, RangeConstraint, PointNdTextController, parseNumber, Foldable, TextController, PopupController, connectValues, bindFoldable, forceCast, findNextTarget, supportsTouch, LabeledValueBladeController, PointNdConstraint, GraphLogController, createPushedBuffer, initializeBuffer, ManualTicker, IntervalTicker, Constants, TpError, createNumberTextPropsObject, findConstraint, DefiniteRangeConstraint, createNumberTextInputParamsParser, createRangeConstraint, createStepConstraint, CompositeConstraint, writePrimitive, boolFromUnknown, numberFromUnknown, stringFromUnknown } from '@tweakpane/core';

class ButtonCellApi {
    constructor(controller) {
        this.controller_ = controller;
    }
    get disabled() {
        return this.controller_.viewProps.get('disabled');
    }
    set disabled(disabled) {
        this.controller_.viewProps.set('disabled', disabled);
    }
    get title() {
        var _a;
        return (_a = this.controller_.props.get('title')) !== null && _a !== void 0 ? _a : '';
    }
    set title(title) {
        this.controller_.props.set('title', title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller_.emitter;
        emitter.on(eventName, () => {
            bh(new TpEvent(this));
        });
        return this;
    }
}

class TpButtonGridEvent extends TpEvent {
    constructor(target, cell, index) {
        super(target);
        this.cell = cell;
        this.index = index;
    }
}

class ButtonGridApi extends BladeApi {
    constructor(controller) {
        super(controller);
        this.cellToApiMap_ = new Map();
        this.emitter_ = new Emitter();
        const gc = this.controller.valueController;
        gc.cellControllers.forEach((cc, i) => {
            const api = new ButtonCellApi(cc);
            this.cellToApiMap_.set(cc, api);
            cc.emitter.on('click', () => {
                const x = i % gc.size[0];
                const y = Math.floor(i / gc.size[0]);
                this.emitter_.emit('click', {
                    event: new TpButtonGridEvent(this, api, [x, y]),
                });
            });
        });
    }
    cell(x, y) {
        const gc = this.controller.valueController;
        const cc = gc.cellControllers[y * gc.size[0] + x];
        return this.cellToApiMap_.get(cc);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev) => {
            bh(ev.event);
        });
        return this;
    }
}

class ButtonGridController {
    constructor(doc, config) {
        this.size = config.size;
        const [w, h] = this.size;
        const bcs = [];
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const bc = new ButtonController(doc, {
                    props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, y))),
                    viewProps: ViewProps.create(),
                });
                bcs.push(bc);
            }
        }
        this.cellCs_ = bcs;
        this.viewProps = ViewProps.create();
        this.viewProps.handleDispose(() => {
            this.cellCs_.forEach((c) => {
                c.viewProps.set('disposed', true);
            });
        });
        this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: 'btngrid',
        });
        this.view.element.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        this.cellCs_.forEach((bc) => {
            this.view.element.appendChild(bc.view.element);
        });
    }
    get cellControllers() {
        return this.cellCs_;
    }
}

class ButtonGridBladeController extends BladeController {
    constructor(doc, config) {
        const bc = config.valueController;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc,
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: bc.viewProps,
        });
        this.valueController = bc;
        this.labelController = lc;
    }
}

const ButtonGridBladePlugin = createPlugin({
    id: 'buttongrid',
    type: 'blade',
    accept(params) {
        const result = parseRecord(params, (p) => ({
            cells: p.required.function,
            size: p.required.array(p.required.number),
            view: p.required.constant('buttongrid'),
            label: p.optional.string,
        }));
        return result ? { params: result } : null;
    },
    controller(args) {
        return new ButtonGridBladeController(args.document, {
            blade: args.blade,
            labelProps: ValueMap.fromObject({
                label: args.params.label,
            }),
            valueController: new ButtonGridController(args.document, {
                cellConfig: args.params.cells,
                size: args.params.size,
            }),
        });
    },
    api(args) {
        if (args.controller instanceof ButtonGridBladeController) {
            return new ButtonGridApi(args.controller);
        }
        return null;
    },
});

class CubicBezierApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get value() {
        return this.controller.valueController.value.rawValue;
    }
    set value(value) {
        this.controller.valueController.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.controller.valueController.value.emitter.on(eventName, (ev) => {
            bh(new TpChangeEvent(this, ev.rawValue, ev.options.last));
        });
        return this;
    }
}

function interpolate(x1, x2, t) {
    return x1 * (1 - t) + x2 * t;
}
const MAX_ITERATION = 20;
const X_DELTA = 0.001;
const CACHE_RESOLUTION = 100;
function y(cb, x) {
    let dt = 0.25;
    let t = 0.5;
    let y = -1;
    for (let i = 0; i < MAX_ITERATION; i++) {
        const [tx, ty] = cb.curve(t);
        t += dt * (tx < x ? 1 : -1);
        y = ty;
        dt *= 0.5;
        if (Math.abs(x - tx) < X_DELTA) {
            break;
        }
    }
    return y;
}
class CubicBezier {
    constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
        this.cache_ = [];
        this.comps_ = [x1, y1, x2, y2];
    }
    get x1() {
        return this.comps_[0];
    }
    get y1() {
        return this.comps_[1];
    }
    get x2() {
        return this.comps_[2];
    }
    get y2() {
        return this.comps_[3];
    }
    static isObject(obj) {
        if (isEmpty(obj)) {
            return false;
        }
        if (!Array.isArray(obj)) {
            return false;
        }
        return (typeof obj[0] === 'number' &&
            typeof obj[1] === 'number' &&
            typeof obj[2] === 'number' &&
            typeof obj[3] === 'number');
    }
    static equals(v1, v2) {
        return (v1.x1 === v2.x1 && v1.y1 === v2.y1 && v1.x2 === v2.x2 && v1.y2 === v2.y2);
    }
    curve(t) {
        const x01 = interpolate(0, this.x1, t);
        const y01 = interpolate(0, this.y1, t);
        const x12 = interpolate(this.x1, this.x2, t);
        const y12 = interpolate(this.y1, this.y2, t);
        const x23 = interpolate(this.x2, 1, t);
        const y23 = interpolate(this.y2, 1, t);
        const xr0 = interpolate(x01, x12, t);
        const yr0 = interpolate(y01, y12, t);
        const xr1 = interpolate(x12, x23, t);
        const yr1 = interpolate(y12, y23, t);
        return [interpolate(xr0, xr1, t), interpolate(yr0, yr1, t)];
    }
    y(x) {
        if (this.cache_.length === 0) {
            const cache = [];
            for (let i = 0; i < CACHE_RESOLUTION; i++) {
                cache.push(y(this, mapRange(i, 0, CACHE_RESOLUTION - 1, 0, 1)));
            }
            this.cache_ = cache;
        }
        return this.cache_[Math.round(mapRange(constrainRange(x, 0, 1), 0, 1, 0, CACHE_RESOLUTION - 1))];
    }
    toObject() {
        return [this.comps_[0], this.comps_[1], this.comps_[2], this.comps_[3]];
    }
}
const CubicBezierAssembly = {
    toComponents: (p) => p.toObject(),
    fromComponents: (comps) => new CubicBezier(...comps),
};

function cubicBezierToString(cb) {
    const formatter = createNumberFormatter(2);
    const comps = cb.toObject().map((c) => formatter(c));
    return `cubic-bezier(${comps.join(', ')})`;
}
const COMPS_EMPTY = [0, 0.5, 0.5, 1];
function cubicBezierFromString(text) {
    const m = text.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);
    if (!m) {
        return new CubicBezier(...COMPS_EMPTY);
    }
    const comps = [m[1], m[2], m[3], m[4]].reduce((comps, comp) => {
        if (!comps) {
            return null;
        }
        const n = Number(comp);
        if (isNaN(n)) {
            return null;
        }
        return [...comps, n];
    }, []);
    return new CubicBezier(...(comps !== null && comps !== void 0 ? comps : COMPS_EMPTY));
}

const className$7 = ClassName('cbz');
class CubicBezierView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className$7());
        config.viewProps.bindClassModifiers(this.element);
        config.foldable.bindExpandedClass(this.element, className$7(undefined, 'expanded'));
        bindValueMap(config.foldable, 'completed', valueToClassName(this.element, className$7(undefined, 'cpl')));
        const headElem = doc.createElement('div');
        headElem.classList.add(className$7('h'));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$7('b'));
        config.viewProps.bindDisabled(buttonElem);
        const iconElem = doc.createElementNS(SVG_NS, 'svg');
        iconElem.innerHTML = '<path d="M2 13C8 13 8 3 14 3"/>';
        buttonElem.appendChild(iconElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement('div');
        textElem.classList.add(className$7('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === 'inline') {
            const pickerElem = doc.createElement('div');
            pickerElem.classList.add(className$7('p'));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        }
        else {
            this.pickerElement = null;
        }
    }
}

const className$6 = ClassName('cbzp');
class CubicBezierPickerView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className$6());
        config.viewProps.bindClassModifiers(this.element);
        const graphElem = doc.createElement('div');
        graphElem.classList.add(className$6('g'));
        this.element.appendChild(graphElem);
        this.graphElement = graphElem;
        const textElem = doc.createElement('div');
        textElem.classList.add(className$6('t'));
        this.element.appendChild(textElem);
        this.textElement = textElem;
    }
}

function waitToBeAddedToDom(elem, callback) {
    const ob = new MutationObserver((ml) => {
        for (const m of ml) {
            if (m.type !== 'childList') {
                continue;
            }
            m.addedNodes.forEach((elem) => {
                if (!elem.contains(elem)) {
                    return;
                }
                callback();
                ob.disconnect();
            });
        }
    });
    const doc = elem.ownerDocument;
    ob.observe(doc.body, {
        attributes: true,
        childList: true,
        subtree: true,
    });
}

const className$5 = ClassName('cbzg');
// TODO: Apply to core
function compose(h1, h2) {
    return (input) => h2(h1(input));
}
class CubicBezierGraphView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className$5());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const previewElem = doc.createElement('div');
        previewElem.classList.add(className$5('p'));
        this.element.appendChild(previewElem);
        this.previewElement = previewElem;
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className$5('g'));
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const guideElem = doc.createElementNS(SVG_NS, 'path');
        guideElem.classList.add(className$5('u'));
        this.svgElem_.appendChild(guideElem);
        this.guideElem_ = guideElem;
        const lineElem = doc.createElementNS(SVG_NS, 'polyline');
        lineElem.classList.add(className$5('l'));
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        this.handleElems_ = [doc.createElement('div'), doc.createElement('div')];
        this.handleElems_.forEach((elem) => {
            elem.classList.add(className$5('h'));
            this.element.appendChild(elem);
        });
        this.vectorElems_ = [
            doc.createElementNS(SVG_NS, 'line'),
            doc.createElementNS(SVG_NS, 'line'),
        ];
        this.vectorElems_.forEach((elem) => {
            elem.classList.add(className$5('v'));
            this.svgElem_.appendChild(elem);
        });
        this.value_ = config.value;
        this.value_.emitter.on('change', this.onValueChange_.bind(this));
        this.sel_ = config.selection;
        this.handleElems_.forEach((elem, index) => {
            bindValue(this.sel_, compose((selection) => selection === index, valueToClassName(elem, className$5('h', 'sel'))));
        });
        waitToBeAddedToDom(this.element, () => {
            this.refresh();
        });
    }
    getVertMargin_(h) {
        return h * 0.25;
    }
    valueToPosition(x, y) {
        const { clientWidth: w, clientHeight: h } = this.element;
        const vm = this.getVertMargin_(h);
        return {
            x: mapRange(x, 0, 1, 0, w),
            y: mapRange(y, 0, 1, h - vm, vm),
        };
    }
    positionToValue(x, y) {
        const bounds = this.element.getBoundingClientRect();
        const w = bounds.width;
        const h = bounds.height;
        const vm = this.getVertMargin_(h);
        return {
            x: constrainRange(mapRange(x, 0, w, 0, 1), 0, 1),
            y: mapRange(y, h - vm, vm, 0, 1),
        };
    }
    refresh() {
        this.guideElem_.setAttributeNS(null, 'd', [0, 1]
            .map((index) => {
            const p1 = this.valueToPosition(0, index);
            const p2 = this.valueToPosition(1, index);
            return [`M ${p1.x},${p1.y}`, `L ${p2.x},${p2.y}`].join(' ');
        })
            .join(' '));
        const bezier = this.value_.rawValue;
        const points = [];
        let t = 0;
        for (;;) {
            const p = this.valueToPosition(...bezier.curve(t));
            points.push([p.x, p.y].join(','));
            if (t >= 1) {
                break;
            }
            t = Math.min(t + 0.05, 1);
        }
        this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
        const obj = bezier.toObject();
        [0, 1].forEach((index) => {
            const p1 = this.valueToPosition(index, index);
            const p2 = this.valueToPosition(obj[index * 2], obj[index * 2 + 1]);
            const vElem = this.vectorElems_[index];
            vElem.setAttributeNS(null, 'x1', String(p1.x));
            vElem.setAttributeNS(null, 'y1', String(p1.y));
            vElem.setAttributeNS(null, 'x2', String(p2.x));
            vElem.setAttributeNS(null, 'y2', String(p2.y));
            const hElem = this.handleElems_[index];
            hElem.style.left = `${p2.x}px`;
            hElem.style.top = `${p2.y}px`;
        });
    }
    onValueChange_() {
        this.refresh();
    }
}

const TICK_COUNT = 24;
const PREVIEW_DELAY = 400;
const PREVIEW_DURATION = 1000;
const className$4 = ClassName('cbzprv');
class CubicBezierPreviewView {
    constructor(doc, config) {
        this.stopped_ = true;
        this.startTime_ = -1;
        this.requestId_ = -1;
        this.onDispose_ = this.onDispose_.bind(this);
        this.onTimer_ = this.onTimer_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(className$4());
        config.viewProps.bindClassModifiers(this.element);
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(className$4('g'));
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const ticksElem = doc.createElementNS(SVG_NS, 'path');
        ticksElem.classList.add(className$4('t'));
        this.svgElem_.appendChild(ticksElem);
        this.ticksElem_ = ticksElem;
        const markerElem = doc.createElement('div');
        markerElem.classList.add(className$4('m'));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.value_ = config.value;
        this.value_.emitter.on('change', this.onValueChange_);
        config.viewProps.handleDispose(this.onDispose_);
        waitToBeAddedToDom(this.element, () => {
            this.refresh();
        });
    }
    play() {
        this.stop();
        this.updateMarker_(0);
        this.markerElem_.classList.add(className$4('m', 'a'));
        this.startTime_ = new Date().getTime() + PREVIEW_DELAY;
        this.stopped_ = false;
        this.requestId_ = requestAnimationFrame(this.onTimer_);
    }
    stop() {
        cancelAnimationFrame(this.requestId_);
        this.stopped_ = true;
        this.markerElem_.classList.remove(className$4('m', 'a'));
    }
    onDispose_() {
        this.stop();
    }
    updateMarker_(progress) {
        const p = this.value_.rawValue.y(constrainRange(progress, 0, 1));
        this.markerElem_.style.left = `${p * 100}%`;
    }
    refresh() {
        const { clientWidth: w, clientHeight: h } = this.svgElem_;
        const ds = [];
        const bezier = this.value_.rawValue;
        for (let i = 0; i < TICK_COUNT; i++) {
            const px = mapRange(i, 0, TICK_COUNT - 1, 0, 1);
            const x = mapRange(bezier.y(px), 0, 1, 0, w);
            ds.push(`M ${x},0 v${h}`);
        }
        this.ticksElem_.setAttributeNS(null, 'd', ds.join(' '));
    }
    onTimer_() {
        if (this.startTime_ === null) {
            return;
        }
        const dt = new Date().getTime() - this.startTime_;
        const p = dt / PREVIEW_DURATION;
        this.updateMarker_(p);
        if (dt > PREVIEW_DURATION + PREVIEW_DELAY) {
            this.stop();
        }
        if (!this.stopped_) {
            this.requestId_ = requestAnimationFrame(this.onTimer_);
        }
    }
    onValueChange_() {
        this.refresh();
        this.play();
    }
}

function getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
function lockAngle(x1, y1, x2, y2) {
    const d = getDistance(x1, y1, x2, y2);
    const a = Math.atan2(y2 - y1, x2 - x1);
    const la = (Math.round(a / (Math.PI / 4)) * Math.PI) / 4;
    return {
        x: x1 + Math.cos(la) * d,
        y: y1 + Math.sin(la) * d,
    };
}
class CubicBezierGraphController {
    constructor(doc, config) {
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.keyScale_ = config.keyScale;
        this.value = config.value;
        this.sel_ = createValue(0);
        this.viewProps = config.viewProps;
        this.view = new CubicBezierGraphView(doc, {
            selection: this.sel_,
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.element.addEventListener('keyup', this.onKeyUp_);
        this.prevView_ = new CubicBezierPreviewView(doc, {
            value: this.value,
            viewProps: this.viewProps,
        });
        this.prevView_.element.addEventListener('mousedown', (ev) => {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            this.prevView_.play();
        });
        this.view.previewElement.appendChild(this.prevView_.element);
        const ptHandler = new PointerHandler(this.view.element);
        ptHandler.emitter.on('down', this.onPointerDown_);
        ptHandler.emitter.on('move', this.onPointerMove_);
        ptHandler.emitter.on('up', this.onPointerUp_);
    }
    refresh() {
        this.view.refresh();
        this.prevView_.refresh();
        this.prevView_.play();
    }
    updateValue_(point, locksAngle, opts) {
        const index = this.sel_.rawValue;
        const comps = this.value.rawValue.toObject();
        const vp = this.view.positionToValue(point.x, point.y);
        const v = locksAngle ? lockAngle(index, index, vp.x, vp.y) : vp;
        comps[index * 2] = v.x;
        comps[index * 2 + 1] = v.y;
        this.value.setRawValue(new CubicBezier(...comps), opts);
    }
    onPointerDown_(ev) {
        const data = ev.data;
        if (!data.point) {
            return;
        }
        const bezier = this.value.rawValue;
        const p1 = this.view.valueToPosition(bezier.x1, bezier.y1);
        const d1 = getDistance(data.point.x, data.point.y, p1.x, p1.y);
        const p2 = this.view.valueToPosition(bezier.x2, bezier.y2);
        const d2 = getDistance(data.point.x, data.point.y, p2.x, p2.y);
        this.sel_.rawValue = d1 <= d2 ? 0 : 1;
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: false,
            last: false,
        });
    }
    onPointerMove_(ev) {
        const data = ev.data;
        if (!data.point) {
            return;
        }
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: false,
            last: false,
        });
    }
    onPointerUp_(ev) {
        const data = ev.data;
        if (!data.point) {
            return;
        }
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: true,
            last: true,
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) {
            ev.preventDefault();
        }
        const index = this.sel_.rawValue;
        const comps = this.value.rawValue.toObject();
        const keyScale = this.keyScale_.rawValue;
        comps[index * 2] += getStepForKey(keyScale, getHorizontalStepKeys(ev));
        comps[index * 2 + 1] += getStepForKey(keyScale, getVerticalStepKeys(ev));
        this.value.setRawValue(new CubicBezier(...comps), {
            forceEmit: false,
            last: false,
        });
    }
    onKeyUp_(ev) {
        if (isArrowKey(ev.key)) {
            ev.preventDefault();
        }
        const keyScale = this.keyScale_.rawValue;
        const xStep = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const yStep = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (xStep === 0 && yStep === 0) {
            return;
        }
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true,
        });
    }
}

class CubicBezierPickerController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CubicBezierPickerView(doc, {
            viewProps: this.viewProps,
        });
        this.gc_ = new CubicBezierGraphController(doc, {
            keyScale: config.axis.textProps.value('keyScale'),
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view.graphElement.appendChild(this.gc_.view.element);
        const xAxis = Object.assign(Object.assign({}, config.axis), { constraint: new RangeConstraint({ max: 1, min: 0 }) });
        const yAxis = Object.assign(Object.assign({}, config.axis), { constraint: undefined });
        this.tc_ = new PointNdTextController(doc, {
            assembly: CubicBezierAssembly,
            axes: [xAxis, yAxis, xAxis, yAxis],
            parser: parseNumber,
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view.textElement.appendChild(this.tc_.view.element);
    }
    get allFocusableElements() {
        return [
            this.gc_.view.element,
            ...this.tc_.view.textViews.map((v) => v.inputElement),
        ];
    }
    refresh() {
        this.gc_.refresh();
    }
}

class CubicBezierController {
    constructor(doc, config) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.view = new CubicBezierView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps,
        });
        this.view.buttonElement.addEventListener('blur', this.onButtonBlur_);
        this.view.buttonElement.addEventListener('click', this.onButtonClick_);
        this.tc_ = new TextController(doc, {
            parser: cubicBezierFromString,
            props: ValueMap.fromObject({
                formatter: cubicBezierToString,
            }),
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view.textElement.appendChild(this.tc_.view.element);
        this.popC_ =
            config.pickerLayout === 'popup'
                ? new PopupController(doc, {
                    viewProps: this.viewProps,
                })
                : null;
        const pickerC = new CubicBezierPickerController(doc, {
            axis: config.axis,
            value: this.value,
            viewProps: this.viewProps,
        });
        pickerC.allFocusableElements.forEach((elem) => {
            elem.addEventListener('blur', this.onPopupChildBlur_);
            elem.addEventListener('keydown', this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            bindValue(this.popC_.shows, (shows) => {
                if (shows) {
                    pickerC.refresh();
                }
            });
            connectValues({
                primary: this.foldable_.value('expanded'),
                secondary: this.popC_.shows,
                forward: (p) => p,
                backward: (_, s) => s,
            });
        }
        else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    onButtonBlur_(ev) {
        if (!this.popC_) {
            return;
        }
        const nextTarget = forceCast(ev.relatedTarget);
        if (!nextTarget || !this.popC_.view.element.contains(nextTarget)) {
            this.popC_.shows.rawValue = false;
        }
    }
    onButtonClick_() {
        this.foldable_.set('expanded', !this.foldable_.get('expanded'));
        if (this.foldable_.get('expanded')) {
            this.pickerC_.allFocusableElements[0].focus();
        }
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) {
            return;
        }
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) {
            // Next target is in the popup
            return;
        }
        if (nextTarget &&
            nextTarget === this.view.buttonElement &&
            !supportsTouch(elem.ownerDocument)) {
            // Next target is the trigger button
            return;
        }
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (!this.popC_) {
            return;
        }
        if (ev.key === 'Escape') {
            this.popC_.shows.rawValue = false;
        }
    }
}

function createConstraint$1() {
    return new PointNdConstraint({
        assembly: CubicBezierAssembly,
        components: [0, 1, 2, 3].map((index) => index % 2 === 0
            ? new RangeConstraint({
                min: 0,
                max: 1,
            })
            : undefined),
    });
}
const CubicBezierBladePlugin = createPlugin({
    id: 'cubicbezier',
    type: 'blade',
    accept(params) {
        const result = parseRecord(params, (p) => ({
            value: p.required.array(p.required.number),
            view: p.required.constant('cubicbezier'),
            expanded: p.optional.boolean,
            label: p.optional.string,
            picker: p.optional.custom((v) => {
                return v === 'inline' || v === 'popup' ? v : undefined;
            }),
        }));
        return result ? { params: result } : null;
    },
    controller(args) {
        var _a, _b;
        const rv = new CubicBezier(...args.params.value);
        const v = createValue(rv, {
            constraint: createConstraint$1(),
            equals: CubicBezier.equals,
        });
        const vc = new CubicBezierController(args.document, {
            axis: {
                textProps: ValueMap.fromObject({
                    keyScale: 0.1,
                    pointerScale: 0.01,
                    formatter: createNumberFormatter(2),
                }),
            },
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            value: v,
            viewProps: args.viewProps,
        });
        return new LabeledValueBladeController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
                label: args.params.label,
            }),
            value: v,
            valueController: vc,
        });
    },
    api(args) {
        if (!(args.controller instanceof LabeledValueBladeController)) {
            return null;
        }
        if (!(args.controller.valueController instanceof CubicBezierController)) {
            return null;
        }
        return new CubicBezierApi(args.controller);
    },
});

class FpsGraphBladeApi extends BladeApi {
    get fps() {
        return this.controller.valueController.fps;
    }
    get max() {
        return this.controller.valueController.props.get('max');
    }
    set max(max) {
        this.controller.valueController.props.set('max', max);
    }
    get min() {
        return this.controller.valueController.props.get('min');
    }
    set min(min) {
        this.controller.valueController.props.set('min', min);
    }
    begin() {
        this.controller.valueController.begin();
    }
    end() {
        this.controller.valueController.end();
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.valueController.ticker.emitter;
        emitter.on(eventName, () => {
            bh(new TpEvent(this));
        });
        return this;
    }
}

const MAX_TIMESTAMPS = 20;
class Fpswatch {
    constructor() {
        this.start_ = null;
        this.duration_ = 0;
        this.fps_ = null;
        this.frameCount_ = 0;
        this.timestamps_ = [];
    }
    get duration() {
        return this.duration_;
    }
    get fps() {
        return this.fps_;
    }
    begin(now) {
        this.start_ = now.getTime();
    }
    calculateFps_(nowTime) {
        if (this.timestamps_.length === 0) {
            return null;
        }
        const ts = this.timestamps_[0];
        return (1000 * (this.frameCount_ - ts.frameCount)) / (nowTime - ts.time);
    }
    compactTimestamps_() {
        if (this.timestamps_.length <= MAX_TIMESTAMPS) {
            return;
        }
        const len = this.timestamps_.length - MAX_TIMESTAMPS;
        this.timestamps_.splice(0, len);
        const df = this.timestamps_[0].frameCount;
        this.timestamps_.forEach((ts) => {
            ts.frameCount -= df;
        });
        this.frameCount_ -= df;
    }
    end(now) {
        if (this.start_ === null) {
            return;
        }
        const t = now.getTime();
        this.duration_ = t - this.start_;
        this.start_ = null;
        this.fps_ = this.calculateFps_(t);
        this.timestamps_.push({
            frameCount: this.frameCount_,
            time: t,
        });
        ++this.frameCount_;
        this.compactTimestamps_();
    }
}

const className$3 = ClassName('fps');
class FpsView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className$3());
        config.viewProps.bindClassModifiers(this.element);
        this.graphElement = doc.createElement('div');
        this.graphElement.classList.add(className$3('g'));
        this.element.appendChild(this.graphElement);
        const labelElement = doc.createElement('div');
        labelElement.classList.add(className$3('l'));
        this.element.appendChild(labelElement);
        const valueElement = doc.createElement('span');
        valueElement.classList.add(className$3('v'));
        valueElement.textContent = '--';
        labelElement.appendChild(valueElement);
        this.valueElement = valueElement;
        const unitElement = doc.createElement('span');
        unitElement.classList.add(className$3('u'));
        unitElement.textContent = 'FPS';
        labelElement.appendChild(unitElement);
    }
}

class FpsGraphController {
    constructor(doc, config) {
        this.stopwatch_ = new Fpswatch();
        this.onTick_ = this.onTick_.bind(this);
        this.ticker = config.ticker;
        this.ticker.emitter.on('tick', this.onTick_);
        this.props = config.props;
        this.value_ = config.value;
        this.viewProps = config.viewProps;
        this.view = new FpsView(doc, {
            viewProps: this.viewProps,
        });
        this.graphC_ = new GraphLogController(doc, {
            formatter: createNumberFormatter(0),
            props: this.props,
            rows: config.rows,
            value: this.value_,
            viewProps: this.viewProps,
        });
        this.view.graphElement.appendChild(this.graphC_.view.element);
        this.viewProps.handleDispose(() => {
            this.graphC_.viewProps.set('disposed', true);
            this.ticker.dispose();
        });
    }
    get fps() {
        return this.stopwatch_.fps;
    }
    begin() {
        this.stopwatch_.begin(new Date());
    }
    end() {
        this.stopwatch_.end(new Date());
    }
    onTick_() {
        const fps = this.fps;
        if (fps !== null) {
            const buffer = this.value_.rawValue;
            this.value_.rawValue = createPushedBuffer(buffer, fps);
            this.view.valueElement.textContent = fps.toFixed(0);
        }
    }
}

class FpsGraphBladeController extends BladeController {
    constructor(doc, config) {
        const fc = config.valueController;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: fc,
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: fc.viewProps,
        });
        this.valueController = fc;
        this.labelController = lc;
    }
}

function createTicker(document, interval) {
    return interval === 0
        ? new ManualTicker()
        : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
const FpsGraphBladePlugin = createPlugin({
    id: 'fpsgraph',
    type: 'blade',
    accept(params) {
        const result = parseRecord(params, (p) => ({
            view: p.required.constant('fpsgraph'),
            interval: p.optional.number,
            label: p.optional.string,
            rows: p.optional.number,
            max: p.optional.number,
            min: p.optional.number,
        }));
        return result ? { params: result } : null;
    },
    controller(args) {
        var _a, _b, _c, _d;
        const interval = (_a = args.params.interval) !== null && _a !== void 0 ? _a : 500;
        return new FpsGraphBladeController(args.document, {
            blade: args.blade,
            labelProps: ValueMap.fromObject({
                label: args.params.label,
            }),
            valueController: new FpsGraphController(args.document, {
                props: ValueMap.fromObject({
                    max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 90,
                    min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0,
                }),
                rows: (_d = args.params.rows) !== null && _d !== void 0 ? _d : 2,
                ticker: createTicker(args.document, interval),
                value: createValue(initializeBuffer(80)),
                viewProps: args.viewProps,
            }),
        });
    },
    api(args) {
        if (!(args.controller instanceof FpsGraphBladeController)) {
            return null;
        }
        return new FpsGraphBladeApi(args.controller);
    },
});

class Interval {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    static isObject(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return false;
        }
        const min = obj.min;
        const max = obj.max;
        if (typeof min !== 'number' || typeof max !== 'number') {
            return false;
        }
        return true;
    }
    static equals(v1, v2) {
        return v1.min === v2.min && v1.max === v2.max;
    }
    get length() {
        return this.max - this.min;
    }
    toObject() {
        return {
            min: this.min,
            max: this.max,
        };
    }
}
const IntervalAssembly = {
    fromComponents: (comps) => new Interval(comps[0], comps[1]),
    toComponents: (p) => [p.min, p.max],
};

class IntervalConstraint {
    constructor(edge) {
        this.edge = edge;
    }
    constrain(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (value.min <= value.max) {
            return new Interval((_b = (_a = this.edge) === null || _a === void 0 ? void 0 : _a.constrain(value.min)) !== null && _b !== void 0 ? _b : value.min, (_d = (_c = this.edge) === null || _c === void 0 ? void 0 : _c.constrain(value.max)) !== null && _d !== void 0 ? _d : value.max);
        }
        const c = (value.min + value.max) / 2;
        return new Interval((_f = (_e = this.edge) === null || _e === void 0 ? void 0 : _e.constrain(c)) !== null && _f !== void 0 ? _f : c, (_h = (_g = this.edge) === null || _g === void 0 ? void 0 : _g.constrain(c)) !== null && _h !== void 0 ? _h : c);
    }
}

const className$2 = ClassName('rsltxt');
class RangeSliderTextView {
    constructor(doc, config) {
        this.sliderView_ = config.sliderView;
        this.textView_ = config.textView;
        this.element = doc.createElement('div');
        this.element.classList.add(className$2());
        const sliderElem = doc.createElement('div');
        sliderElem.classList.add(className$2('s'));
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement('div');
        textElem.classList.add(className$2('t'));
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}

const className$1 = ClassName('rsl');
class RangeSliderView {
    constructor(doc, config) {
        this.onSliderPropsChange_ = this.onSliderPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.sliderProps_ = config.sliderProps;
        this.sliderProps_.emitter.on('change', this.onSliderPropsChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(className$1());
        config.viewProps.bindClassModifiers(this.element);
        this.value_ = config.value;
        this.value_.emitter.on('change', this.onValueChange_);
        const trackElem = doc.createElement('div');
        trackElem.classList.add(className$1('t'));
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const barElem = doc.createElement('div');
        barElem.classList.add(className$1('b'));
        trackElem.appendChild(barElem);
        this.barElement = barElem;
        const knobElems = ['min', 'max'].map((modifier) => {
            const elem = doc.createElement('div');
            elem.classList.add(className$1('k'), className$1('k', modifier));
            trackElem.appendChild(elem);
            return elem;
        });
        this.knobElements = [knobElems[0], knobElems[1]];
        this.update_();
    }
    valueToX_(value) {
        const min = this.sliderProps_.get('min');
        const max = this.sliderProps_.get('max');
        return constrainRange(mapRange(value, min, max, 0, 1), 0, 1) * 100;
    }
    update_() {
        const v = this.value_.rawValue;
        if (v.length === 0) {
            this.element.classList.add(className$1(undefined, 'zero'));
        }
        else {
            this.element.classList.remove(className$1(undefined, 'zero'));
        }
        const xs = [this.valueToX_(v.min), this.valueToX_(v.max)];
        this.barElement.style.left = `${xs[0]}%`;
        this.barElement.style.right = `${100 - xs[1]}%`;
        this.knobElements.forEach((elem, index) => {
            elem.style.left = `${xs[index]}%`;
        });
    }
    onSliderPropsChange_() {
        this.update_();
    }
    onValueChange_() {
        this.update_();
    }
}

class RangeSliderController {
    constructor(doc, config) {
        this.grabbing_ = null;
        this.grabOffset_ = 0;
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.sliderProps = config.sliderProps;
        this.viewProps = config.viewProps;
        this.value = config.value;
        this.view = new RangeSliderView(doc, {
            sliderProps: this.sliderProps,
            value: this.value,
            viewProps: config.viewProps,
        });
        const ptHandler = new PointerHandler(this.view.trackElement);
        ptHandler.emitter.on('down', this.onPointerDown_);
        ptHandler.emitter.on('move', this.onPointerMove_);
        ptHandler.emitter.on('up', this.onPointerUp_);
    }
    ofs_() {
        if (this.grabbing_ === 'min') {
            return this.view.knobElements[0].getBoundingClientRect().width / 2;
        }
        if (this.grabbing_ === 'max') {
            return -this.view.knobElements[1].getBoundingClientRect().width / 2;
        }
        return 0;
    }
    valueFromData_(data) {
        if (!data.point) {
            return null;
        }
        const p = (data.point.x + this.ofs_()) / data.bounds.width;
        const min = this.sliderProps.get('min');
        const max = this.sliderProps.get('max');
        return mapRange(p, 0, 1, min, max);
    }
    onPointerDown_(ev) {
        if (!ev.data.point) {
            return;
        }
        const p = ev.data.point.x / ev.data.bounds.width;
        const v = this.value.rawValue;
        const min = this.sliderProps.get('min');
        const max = this.sliderProps.get('max');
        const pmin = mapRange(v.min, min, max, 0, 1);
        const pmax = mapRange(v.max, min, max, 0, 1);
        if (Math.abs(pmax - p) <= 0.025) {
            this.grabbing_ = 'max';
        }
        else if (Math.abs(pmin - p) <= 0.025) {
            this.grabbing_ = 'min';
        }
        else if (p >= pmin && p <= pmax) {
            this.grabbing_ = 'length';
            this.grabOffset_ = mapRange(p - pmin, 0, 1, 0, max - min);
        }
        else if (p < pmin) {
            this.grabbing_ = 'min';
            this.onPointerMove_(ev);
        }
        else if (p > pmax) {
            this.grabbing_ = 'max';
            this.onPointerMove_(ev);
        }
    }
    applyPointToValue_(data, opts) {
        const v = this.valueFromData_(data);
        if (v === null) {
            return;
        }
        const rmin = this.sliderProps.get('min');
        const rmax = this.sliderProps.get('max');
        if (this.grabbing_ === 'min') {
            this.value.setRawValue(new Interval(v, this.value.rawValue.max), opts);
        }
        else if (this.grabbing_ === 'max') {
            this.value.setRawValue(new Interval(this.value.rawValue.min, v), opts);
        }
        else if (this.grabbing_ === 'length') {
            const len = this.value.rawValue.length;
            let min = v - this.grabOffset_;
            let max = min + len;
            if (min < rmin) {
                min = rmin;
                max = rmin + len;
            }
            else if (max > rmax) {
                min = rmax - len;
                max = rmax;
            }
            this.value.setRawValue(new Interval(min, max), opts);
        }
    }
    onPointerMove_(ev) {
        this.applyPointToValue_(ev.data, {
            forceEmit: false,
            last: false,
        });
    }
    onPointerUp_(ev) {
        this.applyPointToValue_(ev.data, {
            forceEmit: true,
            last: true,
        });
        this.grabbing_ = null;
    }
}

class RangeSliderTextController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sc_ = new RangeSliderController(doc, config);
        const axis = {
            constraint: config.constraint,
            textProps: config.textProps,
        };
        this.tc_ = new PointNdTextController(doc, {
            assembly: IntervalAssembly,
            axes: [axis, axis],
            parser: config.parser,
            value: this.value,
            viewProps: config.viewProps,
        });
        this.view = new RangeSliderTextView(doc, {
            sliderView: this.sc_.view,
            textView: this.tc_.view,
        });
    }
    get textController() {
        return this.tc_;
    }
}

function intervalFromUnknown(value) {
    return Interval.isObject(value)
        ? new Interval(value.min, value.max)
        : new Interval(0, 0);
}
function writeInterval(target, value) {
    target.writeProperty('max', value.max);
    target.writeProperty('min', value.min);
}

function createConstraint(params) {
    const constraints = [];
    const rc = createRangeConstraint(params);
    if (rc) {
        constraints.push(rc);
    }
    const sc = createStepConstraint(params);
    if (sc) {
        constraints.push(sc);
    }
    return new IntervalConstraint(new CompositeConstraint(constraints));
}
const IntervalInputPlugin = createPlugin({
    id: 'input-interval',
    type: 'input',
    accept: (exValue, params) => {
        if (!Interval.isObject(exValue)) {
            return null;
        }
        const result = parseRecord(params, (p) => (Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), { readonly: p.optional.constant(false) })));
        return result
            ? {
                initialValue: new Interval(exValue.min, exValue.max),
                params: result,
            }
            : null;
    },
    binding: {
        reader: (_args) => intervalFromUnknown,
        constraint: (args) => createConstraint(args.params),
        equals: Interval.equals,
        writer: (_args) => writeInterval,
    },
    controller(args) {
        const v = args.value;
        const c = args.constraint;
        if (!(c instanceof IntervalConstraint)) {
            throw TpError.shouldNeverHappen();
        }
        const midValue = (v.rawValue.min + v.rawValue.max) / 2;
        const textProps = ValueMap.fromObject(createNumberTextPropsObject(args.params, midValue));
        const drc = c.edge && findConstraint(c.edge, DefiniteRangeConstraint);
        if (drc) {
            return new RangeSliderTextController(args.document, {
                constraint: c.edge,
                parser: parseNumber,
                sliderProps: new ValueMap({
                    keyScale: textProps.value('keyScale'),
                    max: drc.values.value('max'),
                    min: drc.values.value('min'),
                }),
                textProps: textProps,
                value: v,
                viewProps: args.viewProps,
            });
        }
        const axis = {
            constraint: c.edge,
            textProps: textProps,
        };
        return new PointNdTextController(args.document, {
            assembly: IntervalAssembly,
            axes: [axis, axis],
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps,
        });
    },
});

class RadioCellApi {
    constructor(controller) {
        this.controller_ = controller;
    }
    get disabled() {
        return this.controller_.viewProps.get('disabled');
    }
    set disabled(disabled) {
        this.controller_.viewProps.set('disabled', disabled);
    }
    get title() {
        var _a;
        return (_a = this.controller_.props.get('title')) !== null && _a !== void 0 ? _a : '';
    }
    set title(title) {
        this.controller_.props.set('title', title);
    }
}

class TpRadioGridChangeEvent extends TpChangeEvent {
    constructor(target, cell, index, value, last) {
        super(target, value, last);
        this.cell = cell;
        this.index = index;
    }
}

class RadioGridApi extends BladeApi {
    constructor(controller) {
        super(controller);
        this.cellToApiMap_ = new Map();
        const gc = this.controller.valueController;
        gc.cellControllers.forEach((cc) => {
            const api = new RadioCellApi(cc);
            this.cellToApiMap_.set(cc, api);
        });
    }
    get value() {
        return this.controller.value;
    }
    cell(x, y) {
        const gc = this.controller.valueController;
        const cc = gc.cellControllers[y * gc.size[0] + x];
        return this.cellToApiMap_.get(cc);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.controller.value.emitter.on(eventName, (ev) => {
            const gc = this.controller.valueController;
            const cc = gc.findCellByValue(ev.rawValue);
            if (!cc) {
                return;
            }
            const capi = this.cellToApiMap_.get(cc);
            if (!capi) {
                return;
            }
            const i = gc.cellControllers.indexOf(cc);
            bh(new TpRadioGridChangeEvent(this, capi, [i % gc.size[0], Math.floor(i / gc.size[0])], ev.rawValue));
        });
    }
}

const className = ClassName('rad');
class RadioView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement('label');
        labelElem.classList.add(className('l'));
        this.element.appendChild(labelElem);
        const inputElem = doc.createElement('input');
        inputElem.classList.add(className('i'));
        inputElem.name = config.name;
        inputElem.type = 'radio';
        config.viewProps.bindDisabled(inputElem);
        labelElem.appendChild(inputElem);
        this.inputElement = inputElem;
        const bodyElem = doc.createElement('div');
        bodyElem.classList.add(className('b'));
        labelElem.appendChild(bodyElem);
        const titleElem = doc.createElement('div');
        titleElem.classList.add(className('t'));
        bodyElem.appendChild(titleElem);
        bindValueMap(config.props, 'title', (title) => {
            titleElem.textContent = title;
        });
    }
}

class RadioController {
    constructor(doc, config) {
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new RadioView(doc, {
            name: config.name,
            props: this.props,
            viewProps: this.viewProps,
        });
    }
}

class RadioGridController {
    constructor(doc, config) {
        this.cellCs_ = [];
        this.cellValues_ = [];
        this.onCellInputChange_ = this.onCellInputChange_.bind(this);
        this.size = config.size;
        const [w, h] = this.size;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const bc = new RadioController(doc, {
                    name: config.groupName,
                    props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, y))),
                    viewProps: ViewProps.create(),
                });
                this.cellCs_.push(bc);
                this.cellValues_.push(config.cellConfig(x, y).value);
            }
        }
        this.value = config.value;
        bindValue(this.value, (value) => {
            const cc = this.findCellByValue(value);
            if (!cc) {
                return;
            }
            cc.view.inputElement.checked = true;
        });
        this.viewProps = ViewProps.create();
        this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: 'radgrid',
        });
        this.view.element.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        this.cellCs_.forEach((bc) => {
            bc.view.inputElement.addEventListener('change', this.onCellInputChange_);
            this.view.element.appendChild(bc.view.element);
        });
    }
    get cellControllers() {
        return this.cellCs_;
    }
    findCellByValue(value) {
        const index = this.cellValues_.findIndex((v) => v === value);
        if (index < 0) {
            return null;
        }
        return this.cellCs_[index];
    }
    onCellInputChange_(ev) {
        const inputElem = ev.currentTarget;
        const index = this.cellCs_.findIndex((c) => c.view.inputElement === inputElem);
        if (index < 0) {
            return;
        }
        this.value.rawValue = this.cellValues_[index];
    }
}

const RadioGridBladePlugin = (function () {
    return createPlugin({
        id: 'radiogrid',
        type: 'blade',
        accept(params) {
            const result = parseRecord(params, (p) => ({
                cells: p.required.function,
                groupName: p.required.string,
                size: p.required.array(p.required.number),
                value: p.required.raw,
                view: p.required.constant('radiogrid'),
                label: p.optional.string,
            }));
            return result ? { params: result } : null;
        },
        controller(args) {
            const value = createValue(args.params.value);
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label,
                }),
                value: value,
                valueController: new RadioGridController(args.document, {
                    groupName: args.params.groupName,
                    cellConfig: args.params.cells,
                    size: args.params.size,
                    value: value,
                }),
            });
        },
        api(args) {
            if (!(args.controller instanceof LabeledValueBladeController)) {
                return null;
            }
            if (!(args.controller.valueController instanceof RadioGridController)) {
                return null;
            }
            return new RadioGridApi(args.controller);
        },
    });
})();

function createRadioGridInputPlugin(config) {
    return createPlugin({
        id: 'input-radiogrid',
        type: 'input',
        accept(value, params) {
            if (!config.isType(value)) {
                return null;
            }
            const result = parseRecord(params, (p) => ({
                cells: p.required.function,
                groupName: p.required.string,
                size: p.required.array(p.required.number),
                view: p.required.constant('radiogrid'),
            }));
            return result
                ? {
                    initialValue: value,
                    params: result,
                }
                : null;
        },
        binding: config.binding,
        controller: (args) => {
            return new RadioGridController(args.document, {
                cellConfig: args.params.cells,
                groupName: args.params.groupName,
                size: args.params.size,
                value: args.value,
            });
        },
    });
}
const RadioGruidNumberInputPlugin = createRadioGridInputPlugin({
    isType: (value) => {
        return typeof value === 'number';
    },
    binding: {
        reader: (_args) => numberFromUnknown,
        writer: (_args) => writePrimitive,
    },
});
const RadioGruidStringInputPlugin = createRadioGridInputPlugin({
    isType: (value) => {
        return typeof value === 'string';
    },
    binding: {
        reader: (_args) => stringFromUnknown,
        writer: (_args) => writePrimitive,
    },
});
const RadioGruidBooleanInputPlugin = createRadioGridInputPlugin({
    isType: (value) => {
        return typeof value === 'boolean';
    },
    binding: {
        reader: (_args) => boolFromUnknown,
        writer: (_args) => writePrimitive,
    },
});

const id = 'essentials';
const css = '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--cnt-usp);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-cbzpv_t{margin-top:var(--cnt-usp)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--cnt-usz)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--cnt-usz));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--cnt-usz) - 8px);margin-top:calc((var(--cnt-usz) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}';
const plugins = [
    ButtonGridBladePlugin,
    CubicBezierBladePlugin,
    FpsGraphBladePlugin,
    IntervalInputPlugin,
    RadioGridBladePlugin,
    RadioGruidBooleanInputPlugin,
    RadioGruidNumberInputPlugin,
    RadioGruidStringInputPlugin,
];

export { ButtonCellApi, ButtonGridApi, ButtonGridController, CubicBezier, CubicBezierApi, CubicBezierAssembly, CubicBezierController, CubicBezierGraphController, CubicBezierGraphView, CubicBezierPickerController, CubicBezierPickerView, CubicBezierPreviewView, CubicBezierView, FpsGraphBladeApi, FpsGraphController, FpsView, Fpswatch, Interval, IntervalAssembly, IntervalConstraint, RadioCellApi, RadioController, RadioGridApi, RadioGridController, RadioView, RangeSliderController, RangeSliderTextController, RangeSliderTextView, RangeSliderView, TpRadioGridChangeEvent, css, id, plugins };
