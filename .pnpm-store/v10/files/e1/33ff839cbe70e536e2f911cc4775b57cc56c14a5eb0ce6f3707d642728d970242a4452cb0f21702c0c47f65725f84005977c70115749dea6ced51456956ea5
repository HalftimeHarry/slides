import { ClassName, SVG_NS, mapRange, createPlugin, ValueMap, parseRecord } from '@tweakpane/core';

class LinearDrawerProvider {
    constructor() {
        this.drawer = (point) => `L ${point[0]} ${point[1]}`;
    }
}
class CubicBézierDrawerProvider {
    constructor() {
        this.drawer = (point, index, points) => {
            // start control point
            const [cpsX, cpsY] = this.controlPoint(points[index - 1], points[index - 2], point);
            // end control point
            const [cpeX, cpeY] = this.controlPoint(point, points[index - 1], points[index + 1], true);
            return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
        };
    }
    controlPoint(current, previous, next, reverse) {
        // When 'current' is the first or last point of the array  'previous' or 'next' don't exist. Replace with 'current'
        const a = previous || current;
        const b = next || current;
        const smoothing = 0.2;
        const lenX = b[0] - a[0];
        const lenY = b[1] - a[1];
        const length = Math.sqrt(Math.pow(lenX, 2) + Math.pow(lenY, 2)) * smoothing;
        const angle = Math.atan2(lenY, lenX) + (reverse ? Math.PI : 0);
        const x = current[0] + Math.cos(angle) * length;
        const y = current[1] + Math.sin(angle) * length;
        return [x, y];
    }
}

const className = ClassName('wfm');
/**
 * @hidden
 */
class WaveformView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        this.svgElem = doc.createElementNS(SVG_NS, 'svg');
        this.svgElem.classList.add(className('g'));
        this.element.appendChild(this.svgElem);
        this.pathElem = doc.createElementNS(SVG_NS, 'path');
        this.svgElem.appendChild(this.pathElem);
        this.props = config.props;
        this.value = config.value;
        this.value.emitter.on('change', this.onValueChange_.bind(this));
        switch (this.props.get('lineStyle')) {
            case 'linear':
                this.lineDrawerProvider = new LinearDrawerProvider();
                break;
            case 'bezier':
                this.lineDrawerProvider = new CubicBézierDrawerProvider();
                break;
            default:
                this.lineDrawerProvider = new LinearDrawerProvider();
                break;
        }
        this.refresh();
        config.viewProps.handleDispose(() => {
            this.value.emitter.off('change', this.onValueChange_);
        });
    }
    svgPath(points, drawer) {
        const d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${drawer(point, i, a)}`, '');
        return d;
    }
    refresh() {
        var _a, _b;
        const bounds = this.svgElem.getBoundingClientRect();
        const latestValue = this.value.rawValue[0];
        if (latestValue) {
            const min = (_a = this.props.get('min')) !== null && _a !== void 0 ? _a : Math.min(...latestValue) - 1;
            const max = (_b = this.props.get('max')) !== null && _b !== void 0 ? _b : Math.max(...latestValue) + 1;
            const range = max - min;
            const points = [];
            const maxIndex = latestValue.length - 1;
            // Grid
            const gridWidth = latestValue.length > 32 ? 0 : bounds.width / (latestValue.length - 1);
            const gridHeight = range > 50 ? 0 : bounds.height / range;
            this.element.style.backgroundSize = `${gridWidth}px ${gridHeight}px`;
            // Graph
            latestValue.forEach((v, index) => {
                if (v === undefined) {
                    return;
                }
                const x = mapRange(index, 0, maxIndex, 0, bounds.width);
                const y = mapRange(v, min, max, bounds.height, 0);
                points.push([Math.floor(x), Math.floor(y)]);
            });
            const d = this.svgPath(points, this.lineDrawerProvider.drawer);
            this.pathElem.setAttributeNS(null, 'd', d);
        }
    }
    onValueChange_() {
        this.refresh();
    }
}

// Custom controller class should implement `Controller` interface
class WaveformController {
    constructor(doc, config) {
        this.value = config.value;
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.viewProps.handleDispose(() => {
            // Nothing to do
        });
        this.view = new WaveformView(doc, {
            value: this.value,
            viewProps: this.viewProps,
            props: this.props,
        });
    }
}

function shouldShowWaveform(params) {
    return 'view' in params && params.view === 'waveform';
}
function isWaveformType(value) {
    if (typeof value === 'object') {
        return 'length' in value;
    }
    return false;
}
const WaveformPlugin = createPlugin({
    id: 'monitor-waveform',
    type: 'monitor',
    accept: (value, params) => {
        if (!isWaveformType(value)) {
            return null;
        }
        const result = parseRecord(params, (p) => ({
            max: p.optional.number,
            min: p.optional.number,
            style: p.optional.custom((value) => value === 'linear' || value === 'bezier' ? value : undefined),
            view: p.optional.string,
        }));
        return result ? { initialValue: value, params: result } : null;
    },
    binding: {
        defaultBufferSize: (params) => (shouldShowWaveform(params) ? 64 : 1),
        reader: (_args) => (exValue) => {
            if (isWaveformType(exValue)) {
                return exValue;
            }
            return [];
        },
    },
    controller: (args) => {
        var _a, _b, _c;
        return new WaveformController(args.document, {
            props: ValueMap.fromObject({
                max: (_a = ('max' in args.params ? args.params.max : null)) !== null && _a !== void 0 ? _a : null,
                min: (_b = ('min' in args.params ? args.params.min : null)) !== null && _b !== void 0 ? _b : null,
                lineStyle: (_c = ('style' in args.params ? args.params.style : null)) !== null && _c !== void 0 ? _c : 'linear',
            }),
            value: args.value,
            viewProps: args.viewProps,
        });
    },
});

const id = 'waveform';
const css = '.tp-wfmv_g{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-wfmv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-wfmv_g::-webkit-scrollbar{height:8px;width:8px}.tp-wfmv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-wfmv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-wfmv{position:relative;background-image:linear-gradient(to right, var(--cnt-bg), 1px, transparent 1px),linear-gradient(to bottom, var(--cnt-bg), 1px, transparent 1px)}.tp-wfmv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-wfmv_g path{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-wfmv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-wfmv_t.tp-wfmv_t-a{visibility:visible}.tp-wfmv_t.tp-wfmv_t-in{transition:none}.tp-wfmv.tp-v-disabled .tp-wfmv_g{opacity:.5}.tp-wfmv .tp-ttv{background-color:var(--mo-fg)}.tp-wfmv .tp-ttv::before{border-top-color:var(--mo-fg)}';
const plugins = [WaveformPlugin];

export { css, id, plugins };
