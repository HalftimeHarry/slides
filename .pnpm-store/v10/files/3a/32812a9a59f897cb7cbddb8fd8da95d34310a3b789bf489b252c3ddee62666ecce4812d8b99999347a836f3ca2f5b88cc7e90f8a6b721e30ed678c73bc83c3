import { Value, View, ViewProps } from '@tweakpane/core';
interface Config {
    value: Value<File | null>;
    viewProps: ViewProps;
    invalidFiletypeMessage: string;
    lineCount: number;
    filetypes?: string[];
}
export declare class FilePluginView implements View {
    readonly element: HTMLElement;
    readonly container: HTMLElement;
    input: HTMLInputElement;
    text: HTMLSpanElement;
    warning: HTMLSpanElement;
    fileIcon: HTMLElement;
    deleteButton: HTMLButtonElement;
    constructor(doc: Document, config: Config);
    /**
     * Changes the style of the container based on whether the user is dragging or not.
     * @param state if the user is dragging or not.
     */
    changeDraggingState(state: boolean): void;
}
export {};
