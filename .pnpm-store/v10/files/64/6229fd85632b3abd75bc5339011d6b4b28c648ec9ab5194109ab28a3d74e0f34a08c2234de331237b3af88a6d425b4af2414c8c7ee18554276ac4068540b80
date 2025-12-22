import { SvelteComponent } from 'svelte'
import type { NumberMonitorParams } from '@tweakpane/core'
export type InternalMonitorNumberOptions = NumberMonitorParams
declare const __propDef: {
	props: {
		/**
		 * A `number` value to monitor.
		 * */
		value: number
		/**
		 * Minimum bound when `graph` is true.
		 * @default `0`
		 */
		min?: number
		/**
		 * Maximum bound when `graph` is true.
		 * @default `100`
		 * */
		max?: number
		/**
		 * A function to customize the number's string representation (e.g. rounding, etc.).
		 * @default `undefined`  \
		 * Normal `.toString()` formatting.
		 * */
		format?: (value: number) => string
		/**
		 * Display a graph of the value's changes over time.
		 * @default `false`
		 * */
		graph?: boolean
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
			 * A `number` value to monitor.
			 */
			value: number
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, number>
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
					options?: NumberMonitorParams | undefined
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
					ref?: import('./GenericMonitor.svelte').GenericMonitorRef | undefined
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
					plugin?: import('../utils.js').Plugin | undefined
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
export type InternalMonitorNumberProps = typeof __propDef.props
export type InternalMonitorNumberEvents = typeof __propDef.events
export type InternalMonitorNumberSlots = typeof __propDef.slots
/**
 * This component is for internal use only.
 *
 * Documentation retained in case of a return to the non-dynamic component approach.
 *
 * Wraps the Tweakpane [monitor binding](https://tweakpane.github.io/docs/monitor-bindings/)
 * functionality for number values.
 *
 * Technically, any unbound value on a normal _Svelte Tweakpane UI_ component effectively acts as a
 * monitor, but additional monitor-specific components are provided to expose additional view options
 * (e.g. `max` and `min`).
 *
 * Note that `interval` is exposed to allow separate control over the reactive value's update rate and
 * the graph's update rate.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the monitor in a `<Pane
 * position="inline">` component.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { InternalMonitorNumber } from 'svelte-tweakpane-ui'
 *
 * let numberToMonitor = 0
 * let t = 0
 *
 * setInterval(() => {
 *   numberToMonitor = Math.sin(t)
 *   t += 0.3
 * }, 100)
 * </script>
 *
 * <InternalMonitorNumber
 * value={numberToMonitor}
 * min={-1}
 * max={1}
 * graph={true}
 * />
 * ```
 *
 * @sourceLink
 * [InternalMonitorNumber.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/InternalMonitorNumber.svelte)
 */
export default class InternalMonitorNumber extends SvelteComponent<
	InternalMonitorNumberProps,
	InternalMonitorNumberEvents,
	InternalMonitorNumberSlots
> {}
export {}
