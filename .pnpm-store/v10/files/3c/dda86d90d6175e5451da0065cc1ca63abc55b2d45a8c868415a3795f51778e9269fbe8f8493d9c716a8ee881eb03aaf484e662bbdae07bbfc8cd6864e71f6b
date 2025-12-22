import { ClassName, SVG_NS, removeElement, constrainRange, createValue, PointerHandler, NumberTextController, createRangeConstraint, createStepConstraint, CompositeConstraint, createPlugin, writePrimitive, numberFromUnknown, createNumberTextPropsObject, ValueMap, parseNumber, parseRecord, createNumberTextInputParamsParser, createNumberFormatter, getDecimalDigits } from '@tweakpane/core';

const className$1 = ClassName('ckr');
class RingView {
    constructor(doc, config) {
        this.tickElems_ = [];
        this.labelElems_ = [];
        this.boundsWidth_ = -1;
        this.onShowsTooltipChange_ = this.onShowsTooltipChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.formatters_ = config.formatters;
        this.unit_ = config.unit;
        this.element = doc.createElement('div');
        this.element.classList.add(className$1(), className$1(undefined, `m${config.seriesId}`));
        config.viewProps.bindClassModifiers(this.element);
        this.value_ = config.value;
        this.value_.emitter.on('change', this.onValueChange_);
        config.showsTooltip.emitter.on('change', this.onShowsTooltipChange_);
        const wrapperElem = doc.createElement('div');
        wrapperElem.classList.add(className$1('w'));
        this.element.appendChild(wrapperElem);
        this.offsetElem_ = doc.createElement('div');
        this.offsetElem_.classList.add(className$1('o'));
        wrapperElem.appendChild(this.offsetElem_);
        this.svgElem_ = doc.createElementNS(SVG_NS, 'svg');
        this.svgElem_.classList.add(className$1('g'));
        this.offsetElem_.appendChild(this.svgElem_);
        this.tooltipElem_ = doc.createElement('div');
        this.tooltipElem_.classList.add(ClassName('tt')(), className$1('tt'));
        this.element.appendChild(this.tooltipElem_);
        this.waitToBeAdded_();
    }
    // Waits to be added to DOM tree to build initial scale elements
    waitToBeAdded_() {
        const ob = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target !== this.element || entry.intersectionRatio === 0) {
                    return;
                }
                this.update();
                ob.disconnect();
            });
        }, {
            root: null,
        });
        ob.observe(this.element);
    }
    rebuildScaleIfNeeded_(bw) {
        if (this.boundsWidth_ === bw) {
            return;
        }
        this.boundsWidth_ = bw;
        this.tickElems_.forEach((elem) => {
            removeElement(elem);
        });
        this.tickElems_ = [];
        this.labelElems_.forEach((elem) => {
            removeElement(elem);
        });
        this.labelElems_ = [];
        const doc = this.element.ownerDocument;
        const tpu = this.unit_.ticks;
        const uw = this.unit_.pixels;
        const halfUnitCount = Math.ceil(bw / 2 / uw) + 1;
        const unitCount = halfUnitCount * 2 + 1;
        const tickCount = unitCount * tpu;
        const tickWidth = uw / tpu;
        for (let i = 0; i < tickCount; i++) {
            const x = i * tickWidth;
            if (i % tpu === 0) {
                const lineElem = doc.createElementNS(SVG_NS, 'line');
                lineElem.classList.add(className$1('mjt'));
                lineElem.setAttributeNS(null, 'x1', String(x));
                lineElem.setAttributeNS(null, 'y1', '0');
                lineElem.setAttributeNS(null, 'x2', String(x));
                lineElem.setAttributeNS(null, 'y2', '2');
                this.svgElem_.appendChild(lineElem);
                this.tickElems_.push(lineElem);
                const labelElem = doc.createElement('div');
                labelElem.classList.add(className$1('l'));
                labelElem.style.left = `${x}px`;
                this.offsetElem_.appendChild(labelElem);
                this.labelElems_.push(labelElem);
            }
            else {
                const lineElem = doc.createElementNS(SVG_NS, 'line');
                lineElem.classList.add(className$1('mnt'));
                lineElem.setAttributeNS(null, 'x1', String(x));
                lineElem.setAttributeNS(null, 'y1', '0');
                lineElem.setAttributeNS(null, 'x2', String(x));
                lineElem.setAttributeNS(null, 'y2', '2');
                this.svgElem_.appendChild(lineElem);
                this.tickElems_.push(lineElem);
            }
        }
    }
    updateScale_(bw) {
        const uv = this.unit_.value;
        const uw = this.unit_.pixels;
        const v = this.value_.rawValue;
        const halfUnitCount = Math.ceil(bw / 2 / uw) + 1;
        const ov = v - (v % uv) - uv * halfUnitCount;
        const opacity = (tv) => {
            return (1 -
                Math.pow(constrainRange(Math.abs(v - tv) / ((bw / 2) * (uv / uw)), 0, 1), 10));
        };
        this.labelElems_.forEach((elem, i) => {
            const lv = ov + i * uv;
            elem.textContent = this.formatters_.ring(lv);
            elem.style.opacity = String(opacity(lv));
        });
        const tpu = this.unit_.ticks;
        this.tickElems_.forEach((elem, i) => {
            const lv = ov + (i / tpu) * uv;
            elem.style.opacity = String(opacity(lv));
        });
    }
    update() {
        const bw = this.element.getBoundingClientRect().width;
        const uv = this.unit_.value;
        const uw = this.unit_.pixels;
        const v = this.value_.rawValue;
        const halfUnitCount = Math.ceil(bw / 2 / uw) + 1;
        const offsetFromCenter = ((v % uv) + uv * halfUnitCount) * (uw / uv);
        const offset = bw / 2 - offsetFromCenter;
        this.offsetElem_.style.transform = `translateX(${offset}px)`;
        this.tooltipElem_.textContent = this.formatters_.text(v);
        this.rebuildScaleIfNeeded_(bw);
        this.updateScale_(bw);
    }
    onValueChange_() {
        this.update();
    }
    onShowsTooltipChange_(ev) {
        if (ev.rawValue) {
            this.element.classList.add(className$1(undefined, 'tt'));
        }
        else {
            this.element.classList.remove(className$1(undefined, 'tt'));
        }
    }
}

class RingController {
    constructor(doc, config) {
        this.ox_ = 0;
        this.ov_ = 0;
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.tooltipEnabled_ = config.tooltipEnabled;
        this.unit_ = config.unit;
        this.showsTooltip_ = createValue(false);
        this.view = new RingView(doc, {
            formatters: config.formatters,
            seriesId: config.seriesId,
            showsTooltip: this.showsTooltip_,
            unit: config.unit,
            value: this.value,
            viewProps: this.viewProps,
        });
        const ptHandler = new PointerHandler(this.view.element);
        ptHandler.emitter.on('down', this.onPointerDown_);
        ptHandler.emitter.on('move', this.onPointerMove_);
        ptHandler.emitter.on('up', this.onPointerUp_);
    }
    onPointerDown_(ev) {
        const data = ev.data;
        if (!data.point) {
            return;
        }
        this.ox_ = data.point.x;
        this.ov_ = this.value.rawValue;
        if (this.tooltipEnabled_) {
            this.showsTooltip_.rawValue = true;
        }
    }
    onPointerMove_(ev) {
        const data = ev.data;
        if (!data.point) {
            return;
        }
        const dx = data.point.x - this.ox_;
        const uw = this.unit_.pixels;
        const uv = this.unit_.value;
        this.value.setRawValue(this.ov_ - (dx / uw) * uv, {
            forceEmit: false,
            last: false,
        });
    }
    onPointerUp_() {
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true,
        });
        this.showsTooltip_.rawValue = false;
    }
}

const className = ClassName('ckrtxt');
class RingTextView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        const ringElem = doc.createElement('div');
        ringElem.classList.add(className('r'));
        ringElem.appendChild(config.ringView.element);
        this.element.appendChild(ringElem);
        const textElem = doc.createElement('div');
        textElem.classList.add(className('t'));
        textElem.appendChild(config.textView.element);
        this.element.appendChild(textElem);
    }
}

class RingTextController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.rc_ = new RingController(doc, {
            formatters: {
                ring: config.ringFormatter,
                text: config.textProps.get('formatter'),
            },
            seriesId: config.seriesId,
            tooltipEnabled: false,
            unit: config.ringUnit,
            value: this.value,
            viewProps: this.viewProps,
        });
        this.tc_ = new NumberTextController(doc, {
            parser: config.parser,
            props: config.textProps,
            value: this.value,
            viewProps: this.viewProps,
        });
        this.view = new RingTextView(doc, {
            ringView: this.rc_.view,
            textView: this.tc_.view,
        });
    }
}

function createConstraint(params) {
    const constraints = [];
    const cr = createRangeConstraint(params);
    if (cr) {
        constraints.push(cr);
    }
    const cs = createStepConstraint(params);
    if (cs) {
        constraints.push(cs);
    }
    return new CompositeConstraint(constraints);
}

function parseSeries(value) {
    return value === 0 || value === 1 || value === 2 ? value : undefined;
}
function getRingSeries(series) {
    return series !== undefined ? String(series) : '0';
}
function createRingFormatter(ringUnit) {
    const f = createNumberFormatter(getDecimalDigits(ringUnit.value));
    return (value) => {
        const text = f(value);
        const ch = text.substr(0, 1);
        const hasSign = ch === '-' || ch === '+';
        return text + (hasSign ? ' ' : '');
    };
}
const RingInputPlugin = createPlugin({
    id: 'input-ring',
    type: 'input',
    accept(exValue, params) {
        if (typeof exValue !== 'number') {
            return null;
        }
        const result = parseRecord(params, (p) => (Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), { series: p.optional.custom(parseSeries), unit: p.optional.object({
                pixels: p.required.number,
                ticks: p.required.number,
                value: p.required.number,
            }), view: p.required.constant('cameraring'), wide: p.optional.boolean })));
        return result
            ? {
                initialValue: exValue,
                params: result,
            }
            : null;
    },
    binding: {
        reader: (_args) => numberFromUnknown,
        constraint: (args) => createConstraint(args.params),
        writer: (_args) => writePrimitive,
    },
    controller(args) {
        var _a, _b, _c;
        const ringUnit = (_a = args.params.unit) !== null && _a !== void 0 ? _a : {
            ticks: 5,
            pixels: 40,
            value: 10,
        };
        const ringFormatter = createRingFormatter(ringUnit);
        const textPropsObj = createNumberTextPropsObject(args.params, args.initialValue);
        if (args.params.wide) {
            return new RingController(args.document, {
                formatters: {
                    ring: ringFormatter,
                    text: textPropsObj.formatter,
                },
                seriesId: (_b = getRingSeries(args.params.series)) !== null && _b !== void 0 ? _b : '0',
                tooltipEnabled: true,
                unit: ringUnit,
                value: args.value,
                viewProps: args.viewProps,
            });
        }
        const textProps = ValueMap.fromObject(textPropsObj);
        return new RingTextController(args.document, {
            parser: parseNumber,
            ringFormatter: ringFormatter,
            ringUnit: ringUnit,
            seriesId: (_c = getRingSeries(args.params.series)) !== null && _c !== void 0 ? _c : '0',
            textProps: textProps,
            value: args.value,
            viewProps: args.viewProps,
        });
    },
});

const WheelInputPlugin = createPlugin({
    id: 'input-wheel',
    type: 'input',
    accept(exValue, params) {
        if (typeof exValue !== 'number') {
            return null;
        }
        const result = parseRecord(params, (p) => (Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), { amount: p.optional.number, view: p.required.constant('camerawheel'), wide: p.optional.boolean })));
        return result
            ? {
                initialValue: exValue,
                params: result,
            }
            : null;
    },
    binding: {
        reader: (_args) => numberFromUnknown,
        constraint: (args) => createConstraint(args.params),
        writer: (_args) => writePrimitive,
    },
    controller(args) {
        var _a, _b;
        const ringFormatter = createNumberFormatter(0);
        const textPropsObj = createNumberTextPropsObject(args.params, args.initialValue);
        if (args.params.wide) {
            return new RingController(args.document, {
                formatters: {
                    ring: ringFormatter,
                    text: textPropsObj.formatter,
                },
                seriesId: 'w',
                tooltipEnabled: true,
                unit: {
                    ticks: 10,
                    pixels: 40,
                    value: ((_a = args.params.amount) !== null && _a !== void 0 ? _a : textPropsObj.pointerScale) * 40,
                },
                value: args.value,
                viewProps: args.viewProps,
            });
        }
        return new RingTextController(args.document, {
            parser: parseNumber,
            ringFormatter: ringFormatter,
            ringUnit: {
                ticks: 10,
                pixels: 40,
                value: ((_b = args.params.amount) !== null && _b !== void 0 ? _b : textPropsObj.pointerScale) * 40,
            },
            seriesId: 'w',
            textProps: ValueMap.fromObject(textPropsObj),
            value: args.value,
            viewProps: args.viewProps,
        });
    },
});

const id = 'camerakit';
const css = '.tp-ckrv_w{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-ckrv_w{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-ckrv_w:hover{background-color:var(--in-bg-h)}.tp-ckrv_w:focus{background-color:var(--in-bg-f)}.tp-ckrv_w:active{background-color:var(--in-bg-a)}.tp-ckrv_w:disabled{opacity:.5}.tp-ckrv{position:relative}.tp-ckrv.tp-v-disabled{opacity:.5}.tp-ckrv::before{background-color:var(--grv-fg);bottom:0;content:"";height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-ckrv::after{background-color:var(--in-fg);content:"";left:0;margin:auto;position:absolute;right:0}.tp-ckrv_w{cursor:pointer;height:calc(var(--cnt-usz));overflow:hidden}.tp-ckrv_o{height:100%;left:0;position:relative}.tp-ckrv_g{display:block;height:2px;overflow:visible;position:absolute;width:100%}.tp-ckrv_mjt{stroke:var(--in-fg);stroke-width:2;transform-origin:bottom}.tp-ckrv_mnt{stroke:var(--in-fg);stroke-width:1;transform-origin:bottom}.tp-ckrv_l{color:var(--in-fg);font-size:.9em;pointer-events:none;position:absolute;top:0;transform:translateX(-50%);white-space:pre}.tp-ckrv_tt{left:50%;top:-4px;visibility:hidden}.tp-ckrv.tp-ckrv-tt .tp-ckrv_tt{visibility:visible}.tp-ckrv.tp-ckrv-m0::before{display:none}.tp-ckrv.tp-ckrv-m0::after{bottom:0;height:6px;width:2px}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_g{bottom:0;margin:auto;transform:translateY(3px);top:0}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_mjt{transform:scaleY(3)}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_mnt{transform:scaleY(2)}.tp-ckrv.tp-ckrv-m0 .tp-ckrv_l{line-height:8px;transform:translateX(-50%) scale(0.8)}.tp-ckrv.tp-ckrv-m1::before{display:none}.tp-ckrv.tp-ckrv-m1::after{bottom:0;height:8px;width:2px}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_g{bottom:0}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_mjt{stroke-width:1;transform:scaleY(4)}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_mnt{transform:scaleY(2)}.tp-ckrv.tp-ckrv-m1 .tp-ckrv_l{line-height:12px}.tp-ckrv.tp-ckrv-m2::before{transform:translateY(3px)}.tp-ckrv.tp-ckrv-m2::after{border-radius:2px;bottom:1px;height:4px;width:4px}.tp-ckrv.tp-ckrv-m2 .tp-ckrv_g{display:none}.tp-ckrv.tp-ckrv-m2 .tp-ckrv_l{line-height:12px;transform:translateX(-50%)}.tp-ckrv.tp-ckrv-mw::before,.tp-ckrv.tp-ckrv-mw::after{display:none}.tp-ckrv.tp-ckrv-mw .tp-ckrv_g{bottom:0;opacity:.2}.tp-ckrv.tp-ckrv-mw .tp-ckrv_mjt,.tp-ckrv.tp-ckrv-mw .tp-ckrv_mnt{stroke:var(--in-fg);stroke-width:2;transform:scaleY(10)}.tp-ckrv.tp-ckrv-mw .tp-ckrv_l{display:none}.tp-ckrtxtv{display:flex}.tp-ckrtxtv_r{flex:2}.tp-ckrtxtv_t{flex:1;margin-left:4px}';
const plugins = [RingInputPlugin, WheelInputPlugin];

export { css, id, plugins };
