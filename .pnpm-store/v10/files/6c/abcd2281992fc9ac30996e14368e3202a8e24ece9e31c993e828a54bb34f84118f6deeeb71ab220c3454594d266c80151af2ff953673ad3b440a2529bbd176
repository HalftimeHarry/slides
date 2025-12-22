import { BladeApi } from '@tweakpane/core';
import type { ProfilerBladeController } from './ProfilerBladeController.js';
import type { ProfilerBladeMeasureHandler } from './ProfilerBladeMeasureHandler.js';
export declare class ProfilerBladeApi extends BladeApi<ProfilerBladeController> {
    measureStart(name: string): void;
    measureEnd(): Promise<void>;
    measure(name: string, fn: () => void): void;
    measureAsync(name: string, fn: () => Promise<void>): Promise<void>;
    get measureHandler(): ProfilerBladeMeasureHandler;
    set measureHandler(measureHandler: ProfilerBladeMeasureHandler);
}
