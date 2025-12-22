import { SvelteComponent } from 'svelte'
export type WaveformMonitorValue = number[] | Uint8Array | Uint16Array | Uint32Array
import type { WaveformStyles as WaveformMonitorLineStyle } from '@kitschpatrol/tweakpane-plugin-waveform/dist/types/view/waveform.js'
declare const __propDef: {
	props: {
		/**
		 * Waveform values.
		 * @bindable
		 * */
		value: WaveformMonitorValue
		/**
		 * Minimum graph bound.
		 * @default `0`
		 * */
		min?: number
		/**
		 * Maximum graph bound.
		 * @default `100`
		 * */
		max?: number
		/**
		 * Line style.
		 * @default `'linear''`
		 * */
		lineStyle?: 'bezier' | 'linear'
	} & Omit<
		{
			/**
			 * Number of past states to retain.
			 * @default `1`  \
			 * Or `64` if value is `number` and `graph` is `true`.
			 */
			bufferSize?: number
			/**
			 * Time between value samples in milliseconds.
			 *
			 * Useful when `graph` is true. Defaults to reactive value updates only (`interval={0}`).
			 * @default `0`
			 */
			interval?: number
			/**
			 * Number of visible rows of state history.
			 *
			 * If `bufferSize` is larger, then the value window will scroll once state history exceeds
			 * row count.
			 * @default `1`  \
			 * Or `3` if value is `string` and `multiline` is `true`.
			 */
			rows?: number
		} & {
			/**
			 * Waveform values.
			 * @bindable
			 */
			value: WaveformMonitorValue
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, WaveformMonitorValue>
					/** The key for the value in the target `object` that the control should manipulate. */
					key: string
					/**
					 * Prevent interactivity and gray out the control.
					 * @default `false`
					 */
					disabled?: boolean
					/**
					 * Text displayed next to control.
					 * @default `undefined`
					 */
					label?: string | undefined
					/**
					 * Tweakpane's internal options object.
					 *
					 * See [`BindingParams`](https://tweakpane.github.io/docs/api/types/BindingParams.html).
					 *
					 * Valid types are contingent on the type of the value `key` points to in `object`.
					 *
					 * This is intended internal use, when implementing convenience components wrapping Binding's
					 * functionality. Options of interest are instead exposed as top-level props in _Svelte
					 * Tweakpane UI_.
					 * @default `undefined`
					 */
					options?:
						| ({
								min?: number
								max?: number
								lineStyle?: WaveformMonitorLineStyle
						  } & import('@tweakpane/core').BaseMonitorParams)
						| undefined
					/**
					 * Custom color scheme.
					 *
					 * @default `undefined`  \
					 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
					 * set with `setGlobalDefaultTheme()`.
					 */
					theme?: import('..').Theme | undefined
					/**
					 * Reference to internal Tweakpane
					 * [`BindingApi`](https://tweakpane.github.io/docs/api/classes/_internal_.BindingApi.html) for
					 * this control.
					 *
					 * This property is exposed for advanced use cases only, such as when implementing convenience
					 * components wrapping `<Binding>`'s functionality.
					 *
					 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
					 *
					 * @bindable
					 * @readonly
					 */
					ref?: import('../internal/GenericMonitor.svelte').GenericMonitorRef | undefined
					/**
					 * Imported Tweakpane `TpPluginBundle` (aliased as `Plugin`) module to automatically register in
					 * the `<Binding>`'s containing `<Pane>`.
					 *
					 * This property is exposed for advanced use cases only, such as when implementing convenience
					 * components wrapping `<Binding>`'s functionality in combination with a Tweakpane plugin.
					 *
					 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
					 *
					 * @default `undefined`
					 */
					plugin?: import('../utils').Plugin | undefined
				},
				'object' | 'key'
			>,
		'ref' | 'options' | 'plugin'
	>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type WaveformMonitorProps = typeof __propDef.props
export type WaveformMonitorEvents = typeof __propDef.events
export type WaveformMonitorSlots = typeof __propDef.slots
/**
 * Visualize multiple numeric values as a waveform.
 *
 * Integrates [Simon Schödler's](https://shoedler.github.io)
 * [tweakpane-plugin-waveform](https://github.com/shoedler/tweakpane-plugin-waveform).
 *
 * See `<Monitor>` component if you want to graph a single value's change over time.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the waveform monitor in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-waveform) of the plugin with build optimizations.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { WaveformMonitor } from 'svelte-tweakpane-ui'
 *
 * let waveData = [5, 6, 7, 8, 9, 3, 9, 8, 7, 6, 5]
 *
 * setInterval(() => {
 *   waveData = waveData.map((v) =>
 *     Math.max(0, Math.min(10, v + (Math.random() * 2 - 1) * 0.5)),
 *   )
 * }, 10)
 * </script>
 *
 * <WaveformMonitor value={waveData} min={-1} max={11} lineStyle="bezier" />
 * ```
 *
 * @sourceLink
 * [WaveformMonitor.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/monitor/WaveformMonitor.svelte)
 */
export default class WaveformMonitor extends SvelteComponent<
	WaveformMonitorProps,
	WaveformMonitorEvents,
	WaveformMonitorSlots
> {}
export {}
