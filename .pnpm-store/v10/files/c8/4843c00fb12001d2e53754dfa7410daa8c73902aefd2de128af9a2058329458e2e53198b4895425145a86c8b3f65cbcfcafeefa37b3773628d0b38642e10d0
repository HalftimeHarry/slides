import { SvelteComponent } from 'svelte'
import type { BaseMonitorParams, MonitorBindingApi } from '@tweakpane/core'
export type GenericMonitorOptions = BaseMonitorParams
export type GenericMonitorRef = MonitorBindingApi
declare class __sveltets_Render<
	T extends any,
	U extends GenericMonitorOptions,
	V extends GenericMonitorRef = GenericMonitorRef,
> {
	props(): {
		/**
		 * Number of past states to retain.
		 * @default `1`  \
		 * Or `64` if value is `number` and `graph` is `true`.
		 * */
		bufferSize?: number
		/**
		 * Time between value samples in milliseconds.
		 *
		 * Useful when `graph` is true. Defaults to reactive value updates only (`interval={0}`).
		 * @default `0`
		 * */
		interval?: number
		/**
		 * Number of visible rows of state history.
		 *
		 * If `bufferSize` is larger, then the value window will scroll once state history exceeds
		 * row count.
		 * @default `1`  \
		 * Or `3` if value is `string` and `multiline` is `true`.
		 * */
		rows?: number
	} & {
		/**
		 * The value to control.
		 * @bindable
		 */
		value: T
	} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable & Record<string, T>
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
				options?: U | undefined
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
				ref?: V | undefined
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
				plugin?: import('..').Plugin | undefined
			},
			'object' | 'key'
		>
	events(): {} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type GenericMonitorProps<
	T extends any,
	U extends GenericMonitorOptions,
	V extends GenericMonitorRef = GenericMonitorRef,
> = ReturnType<__sveltets_Render<T, U, V>['props']>
export type GenericMonitorEvents<
	T extends any,
	U extends GenericMonitorOptions,
	V extends GenericMonitorRef = GenericMonitorRef,
> = ReturnType<__sveltets_Render<T, U, V>['events']>
export type GenericMonitorSlots<
	T extends any,
	U extends GenericMonitorOptions,
	V extends GenericMonitorRef = GenericMonitorRef,
> = ReturnType<__sveltets_Render<T, U, V>['slots']>
/**
 * This component is for internal use only.
 *
 * @sourceLink
 * [GenericMonitor.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/GenericMonitor.svelte)
 */
export default class GenericMonitor<
	T extends any,
	U extends GenericMonitorOptions,
	V extends GenericMonitorRef = GenericMonitorRef,
> extends SvelteComponent<
	GenericMonitorProps<T, U, V>,
	GenericMonitorEvents<T, U, V>,
	GenericMonitorSlots<T, U, V>
> {}
export {}
