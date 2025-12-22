import { SvelteComponent } from 'svelte'
declare class __sveltets_Render<W extends number | string | boolean | unknown> {
	props(): W extends string | number | boolean
		? Omit<
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
					 * A value to monitor.
					 * @bindable
					 */
					value: W
				} & Omit<
						{
							/**
							 * The binding's target object with values to manipulate.
							 * @bindable
							 */
							object: import('@tweakpane/core').Bindable & Record<string, W>
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
								| (W extends infer T
										? T extends W
											? T extends string
												? import('tweakpane').StringMonitorParams
												: T extends boolean
													? import('tweakpane').BooleanMonitorParams
													: T extends number
														? import('tweakpane').NumberMonitorParams
														: import('@tweakpane/core').BaseMonitorParams
											: never
										: never)
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
							plugin?: import('..').Plugin | undefined
						},
						'object' | 'key'
					>,
				'ref' | 'options' | 'plugin'
			> &
				(W extends infer T_1
					? T_1 extends W
						? T_1 extends string
							? {
									/**
									 * A value to monitor.
									 * @bindable
									 */
									value: string
									/**
									 * Display multiline strings.
									 * @default `false`
									 */
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
										 * A value to monitor.
										 * @bindable
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
												options?: import('tweakpane').StringMonitorParams | undefined
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
												ref?:
													| import('../internal/GenericMonitor.svelte').GenericMonitorRef
													| undefined
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
										>,
									'ref' | 'options' | 'plugin' | 'interval'
								>
							: T_1 extends boolean
								? {
										/**
										 * A value to monitor.
										 * @bindable
										 */
										value: boolean
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
											 * A value to monitor.
											 * @bindable
											 */
											value: boolean
										} & Omit<
												{
													/**
													 * The binding's target object with values to manipulate.
													 * @bindable
													 */
													object: import('@tweakpane/core').Bindable & Record<string, boolean>
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
													options?: import('tweakpane').BooleanMonitorParams | undefined
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
													ref?:
														| import('../internal/GenericMonitor.svelte').GenericMonitorRef
														| undefined
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
											>,
										'ref' | 'options' | 'plugin' | 'interval'
									>
								: T_1 extends number
									? {
											/**
											 * A value to monitor.
											 * @bindable
											 */
											value: number
											/**
											 * Minimum bound when `graph` is true.
											 * @default `0`
											 */
											min?: number
											/**
											 * Maximum bound when `graph` is true.
											 * @default `100`
											 */
											max?: number
											/**
											 * A function to customize the number's string representation (e.g. rounding, etc.).
											 * @default `undefined`  \
											 * Normal `.toString()` formatting.
											 */
											format?: (value: number) => string
											/**
											 * Display a graph of the value's changes over time.
											 * @default `false`
											 */
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
												 * A value to monitor.
												 * @bindable
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
														options?: import('tweakpane').NumberMonitorParams | undefined
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
														ref?:
															| import('../internal/GenericMonitor.svelte').GenericMonitorRef
															| undefined
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
												>,
											'ref' | 'options' | 'plugin'
										>
									: {
											/**
											 * A value to monitor.
											 * @bindable
											 * */
											value: boolean | number | string
										}
						: never
					: never)
		: Omit<
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
					 * A value to monitor.
					 * @bindable
					 */
					value: string | number | boolean
				} & Omit<
						{
							/**
							 * The binding's target object with values to manipulate.
							 * @bindable
							 */
							object: import('@tweakpane/core').Bindable & Record<string, string | number | boolean>
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
								| import('tweakpane').BooleanMonitorParams
								| import('tweakpane').NumberMonitorParams
								| import('tweakpane').StringMonitorParams
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
							plugin?: import('..').Plugin | undefined
						},
						'object' | 'key'
					>,
				'ref' | 'options' | 'plugin'
			>
	events(): {} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type MonitorProps<W extends number | string | boolean | unknown> = ReturnType<
	__sveltets_Render<W>['props']
>
export type MonitorEvents<W extends number | string | boolean | unknown> = ReturnType<
	__sveltets_Render<W>['events']
>
export type MonitorSlots<W extends number | string | boolean | unknown> = ReturnType<
	__sveltets_Render<W>['slots']
>
/**
 * Wraps the Tweakpane [monitor binding](https://tweakpane.github.io/docs/monitor-bindings/)
 * functionality for `boolean`, `number`, and `string` values.
 *
 * Technically, any unbound value on a normal _Svelte Tweakpane UI_ component effectively acts as a
 * monitor, but additional monitor-specific components are provided to expose additional view options
 * (e.g. `rows`).
 *
 * `<Monitor>` is a dynamic component, and the availability of additional props will vary depending on
 * the type of the defined `value`
 *
 * Note that `interval` is not exposed on `boolean` and `string` monitors because updates are driven by
 * reactive changes in the `value`.
 *
 * However, `interval` _is_ exposed on `number` monitors Note to allow independent control over the
 * reactive value's update rate and the graph's update rate.
 *
 * See also the `<Waveform>` component for a more advanced number visualization.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the monitor in a `<Pane
 * position="inline">` component.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Monitor } from 'svelte-tweakpane-ui'
 *
 * let booleanToMonitor = false
 * let stringToMonitor = 'Reticulating'
 * let numberToMonitor = 85
 *
 * setInterval(() => {
 *   numberToMonitor = Math.random() * 100
 * }, 100)
 *
 * setInterval(() => {
 *   booleanToMonitor = !booleanToMonitor
 *   stringToMonitor = [...stringToMonitor].reverse().join('')
 * }, 1000)
 * </script>
 *
 * <Monitor value={numberToMonitor} graph={true} />
 * <Monitor value={booleanToMonitor} label="Boolean Monitor" />
 * <Monitor
 * value={stringToMonitor}
 * bufferSize={5}
 * label="String Monitor"
 * multiline={true}
 * />
 * ```
 *
 * @sourceLink
 * [Monitor.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/monitor/Monitor.svelte)
 */
export default class Monitor<W extends number | string | boolean | unknown> extends SvelteComponent<
	MonitorProps<W>,
	MonitorEvents<W>,
	MonitorSlots<W>
> {}
export {}
