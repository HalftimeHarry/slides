import { View, ViewProps } from '@tweakpane/core';
interface Config {
    viewProps: ViewProps;
    imageFit: 'contain' | 'cover';
    extensions: string[];
    clickCallback?: (event: MouseEvent, input: HTMLInputElement) => void;
}
export declare class PluginView implements View {
    readonly element: HTMLElement;
    readonly input: HTMLInputElement;
    readonly image_: HTMLImageElement;
    constructor(doc: Document, config: Config);
    changeImage(src: string): void;
    changeDraggingState(state: boolean): void;
}
export {};
