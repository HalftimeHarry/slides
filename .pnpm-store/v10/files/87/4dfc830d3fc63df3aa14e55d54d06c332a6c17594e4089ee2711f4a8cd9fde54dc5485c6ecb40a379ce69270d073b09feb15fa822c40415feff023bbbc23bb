import { BufferedValue, Controller, ViewProps } from '@tweakpane/core';
import { WaveformProps, WaveformValue, WaveformView } from '../view/waveform.js';
interface Config {
    value: BufferedValue<WaveformValue>;
    viewProps: ViewProps;
    props: WaveformProps;
}
export declare class WaveformController implements Controller<WaveformView> {
    readonly value: BufferedValue<WaveformValue>;
    readonly view: WaveformView;
    readonly viewProps: ViewProps;
    private readonly props;
    constructor(doc: Document, config: Config);
}
export {};
