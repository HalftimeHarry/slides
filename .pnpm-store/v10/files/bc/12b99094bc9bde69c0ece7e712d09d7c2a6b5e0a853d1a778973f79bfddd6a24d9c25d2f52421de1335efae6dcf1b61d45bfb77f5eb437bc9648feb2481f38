import { BufferedValue, ValueMap, View, ViewProps } from '@tweakpane/core';
export type WaveformValue = Uint8Array | Uint16Array | Uint32Array | number[];
export type WaveformStyles = 'linear' | 'bezier';
export type WaveformProps = ValueMap<{
    max: number | null;
    min: number | null;
    lineStyle: WaveformStyles;
}>;
export type WaveformPoint = [number, number];
type WaveformDrawer = (point: WaveformPoint, index: number, points: WaveformPoint[]) => string;
export interface IWaveformDrawerProvider {
    readonly drawer: WaveformDrawer;
}
interface Config {
    value: BufferedValue<WaveformValue>;
    viewProps: ViewProps;
    props: WaveformProps;
}
/**
 * @hidden
 */
export declare class WaveformView implements View {
    readonly element: HTMLElement;
    private readonly props;
    private readonly value;
    private readonly svgElem;
    private readonly pathElem;
    private readonly lineDrawerProvider;
    constructor(doc: Document, config: Config);
    private svgPath;
    private refresh;
    private onValueChange_;
}
export {};
