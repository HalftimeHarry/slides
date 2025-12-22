import { SvelteComponent } from 'svelte'
import type { StringMonitorParams } from '@tweakpane/core'
export type InternalMonitorStringOptions = StringMonitorParams
declare const __propDef: {
	props: {
		/**
		 * A `string` value to monitor.
		 * */
		value: string
		/**
		 * Display multiline strings.
		 * @default `false`
		 * */
		multiline?: boolean
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
			 * A `string` value to monitor.
			 */
			value: string
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, string>
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
					options?: StringMonitorParams | undefined
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
					plugin?: import('../utils').Plugin | undefined
				},
				'object' | 'key'
			>,
		'ref' | 'options' | 'plugin' | 'interval'
	>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type InternalMonitorStringProps = typeof __propDef.props
export type InternalMonitorStringEvents = typeof __propDef.events
export type InternalMonitorStringSlots = typeof __propDef.slots
/**
 * This component is for internal use only.
 *
 * Documentation retained in case of a return to the non-dynamic component approach.
 *
 * Wraps the Tweakpane [monitor binding](https://tweakpane.github.io/docs/monitor-bindings/)
 * functionality for string values.
 *
 * Technically, any unbound value on a normal _Svelte Tweakpane UI_ component effectively acts as a
 * monitor, but additional monitor-specific components are provided to expose additional view options
 * (e.g. `multiline`).
 *
 * Note that `interval` is not exposed because updates are driven by reactive changes in the `value`.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the monitor in a `<Pane
 * position="inline">` component.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { InternalMonitorString } from 'svelte-tweakpane-ui'
 *
 * let stringToMonitor = 'so\nit\ngoes'
 *
 * setInterval(() => {
 *   stringToMonitor = stringToMonitor
 *     .split('\n')
 *     .map(() => Math.round(Math.random() * 100).toString())
 *     .join('\n')
 * }, 100)
 * </script>
 *
 * <InternalMonitorString value={stringToMonitor} multiline={true} />
 * ```
 *
 * @sourceLink
 * [InternalMonitorString.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/InternalMonitorString.svelte)
 */
export default class InternalMonitorString extends SvelteComponent<
	InternalMonitorStringProps,
	InternalMonitorStringEvents,
	InternalMonitorStringSlots
> {}
export {}
