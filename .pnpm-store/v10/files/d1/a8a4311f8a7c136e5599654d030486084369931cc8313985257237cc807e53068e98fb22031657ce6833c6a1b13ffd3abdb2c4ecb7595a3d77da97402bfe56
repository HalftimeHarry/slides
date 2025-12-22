import { Controller, Value, ViewProps } from '@tweakpane/core';
import { ImageResolvable } from './model.js';
import { PluginView } from './view.js';
interface Config {
    value: Value<ImageResolvable>;
    imageFit: 'contain' | 'cover';
    extensions: string[];
    viewProps: ViewProps;
    clickCallback?: (event: MouseEvent, input: HTMLInputElement) => void;
}
export declare class PluginController implements Controller<PluginView> {
    readonly value: Value<ImageResolvable>;
    readonly view: PluginView;
    readonly viewProps: ViewProps;
    constructor(doc: Document, config: Config);
    private onFile;
    private onDrop;
    private onDragStart;
    private onDragOver;
    private onDragLeave;
    private handleImage;
    private updateImage;
    private setValue;
    private handleValueChange;
    private handlePlaceholderImage;
}
export {};
