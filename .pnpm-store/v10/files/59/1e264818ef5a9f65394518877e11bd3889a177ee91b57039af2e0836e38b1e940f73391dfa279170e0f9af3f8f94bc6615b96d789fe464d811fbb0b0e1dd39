import { IWaveformDrawerProvider, WaveformPoint } from './waveform.js';
export declare class LinearDrawerProvider implements IWaveformDrawerProvider {
    readonly drawer: (point: WaveformPoint) => string;
}
export declare class CubicBézierDrawerProvider implements IWaveformDrawerProvider {
    private controlPoint;
    readonly drawer: (point: WaveformPoint, index: number, points: WaveformPoint[]) => string;
}
