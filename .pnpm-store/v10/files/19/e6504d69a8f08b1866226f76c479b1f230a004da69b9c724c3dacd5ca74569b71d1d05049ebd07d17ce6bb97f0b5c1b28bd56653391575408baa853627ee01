import { Controller, ViewProps } from '@tweakpane/core';
import { ProfilerBladeMeasureHandler } from './ProfilerBladeMeasureHandler.js';
import type { ProfilerEntry } from './ProfilerEntry.js';
import { ProfilerControllerConfig } from './ProfilerControllerConfig.js';
import { ProfilerView } from './ProfilerView.js';
export declare class ProfilerController implements Controller<ProfilerView> {
    targetDelta: number;
    bufferSize: number;
    measureHandler: ProfilerBladeMeasureHandler;
    readonly view: ProfilerView;
    readonly viewProps: ViewProps;
    private ticker_;
    private rootCalcCacheStack_;
    constructor(doc: Document, config: ProfilerControllerConfig);
    measureStart(name: string): void;
    measureEnd(): Promise<void>;
    measure(name: string, fn: () => void): void;
    measureAsync(name: string, fn: () => Promise<void>): Promise<void>;
    renderEntry(): ProfilerEntry;
    private renderEntryFromCalcCache_;
    private onTick_;
    private createNewEntryCalcCache_;
}
