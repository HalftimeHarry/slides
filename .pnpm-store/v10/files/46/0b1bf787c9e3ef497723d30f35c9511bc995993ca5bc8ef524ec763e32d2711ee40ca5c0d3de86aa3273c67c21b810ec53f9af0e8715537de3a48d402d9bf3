import { Controller, Value, ViewProps } from '@tweakpane/core';
import { FilePluginView } from '../view/view.js';
interface Config {
    value: Value<File | null>;
    viewProps: ViewProps;
    invalidFiletypeMessage: string;
    lineCount: number;
    filetypes?: string[];
}
export declare class FilePluginController implements Controller<FilePluginView> {
    readonly value: Value<File | null>;
    readonly view: FilePluginView;
    readonly viewProps: ViewProps;
    private readonly config;
    constructor(doc: Document, config: Config);
    /**
     * Called when the value of the input changes.
     * @param event change event.
     */
    private onFile;
    /**
     * Shows warning text for 5 seconds.
     */
    private showWarning;
    /**
     * Checks if the file is valid with the given filetypes.
     * @param file File object
     * @returns true if the file is valid.
     */
    private isFileValid;
    /**
     * Event handler when the delete HTML button is clicked.
     * It resets the `rawValue` of the controller.
     */
    private onDeleteClick;
    /**
     * Called when the user drags over a file.
     * Updates the style of the container.
     * @param event drag event.
     */
    private onDragOver;
    /**
     * Called when the user leaves the container while dragging.
     * Updates the style of the container.
     */
    private onDragLeave;
    /**
     * Called when the user drops a file in the container.
     * Either shows a warning if it's invalid or updates the value if it's valid.
     * @param ev drag event.
     */
    private onDrop;
    /**
     * Called when the value (bound to the controller) changes (e.g. when the file is selected).
     */
    private handleValueChange;
}
export {};
