import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type RadioGridChangeEvent = ValueChangeEvent<boolean | number | string>
declare class __sveltets_Render<T extends boolean | number | string> {
	props(): {
		/**
		 * Value of selected radio button.
		 *
		 * Bind to this prop to receive updates when the user clicks a radio button.
		 * @bindable
		 * @default `undefined` If undefined, the first value in the `values` array is assigned.
		 *  */
		value?: T | undefined
		/**
		 * Number of columns to arrange the radio buttons into.
		 * @default `undefined`
		 * */
		columns?: number
		/**
		 * Name allowing multiple radio groups to share mutually exclusive selection state.
		 *
		 * Allows spanning exclusive selection state across multiple independent `<RadioGrid>`
		 * components, but should remain `undefined` for most use cases to keep exclusivity scoped
		 * to a single `<RadioGrid>`.
		 * @default `undefined`  \
		 * Uses a dynamically generated globally unique id internally.
		 */
		groupName?: string
		/**
		 * Text to show in the radio button label before the value.
		 * @default `undefined`
		 * */
		prefix?: string
		/**
		 * Number of rows to arrange the radio buttons into.
		 * @default `undefined`
		 * */
		rows?: number
		/**
		 * Text to show in the radio button label after the value.
		 * @default `undefined`
		 * */
		suffix?: string
		/**
		 * Array of `number`, `string` or `boolean` values, each of which will become a button in
		 * the radio grid.
		 * */
		values: T[]
	} & Omit<
		{
			/**
			 * Value of selected radio button.
			 *
			 * Bind to this prop to receive updates when the user clicks a radio button.
			 * @bindable
			 * @default `undefined` If undefined, the first value in the `values` array is assigned.
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
				options?:
					| ({
							cells: (
								x: number,
								y: number,
							) => {
								value: T
								title: string
							}
							groupName: string
							size: [number, number]
							view: 'radiogrid'
					  } & import('@tweakpane/core').BaseInputParams)
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
				ref?: import('../internal/GenericInput.svelte').GenericInputRef | undefined
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
	events(): {
		/**
		 * Fires when `value` changes.
		 *
		 * _This event is provided for advanced use cases. It's usually preferred to bind to the `value` prop instead._
		 *
		 * The `event.details` payload includes a copy of the value and an `origin` field to distinguish between user-interactive changes (`internal`)
		 * and changes resulting from programmatic manipulation of the `value` (`external`).
		 *
		 * @extends ValueChangeEvent
		 * @event
		 * */
		change: RadioGridChangeEvent
	}
	slots(): {}
}
export type RadioGridProps<T extends boolean | number | string> = ReturnType<
	__sveltets_Render<T>['props']
>
export type RadioGridEvents<T extends boolean | number | string> = ReturnType<
	__sveltets_Render<T>['events']
>
export type RadioGridSlots<T extends boolean | number | string> = ReturnType<
	__sveltets_Render<T>['slots']
>
/**
 * A grid of radio buttons.
 *
 * Integrates the [Radio Grid](https://github.com/tweakpane/plugin-essentials#radio-grid) control from
 * Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me)  [Essentials
 * plugin](https://github.com/tweakpane/plugin-essentials).
 *
 * See `<ButtonGrid>` for a button-flavored variation.
 *
 * Unlike the vanilla Tweakpane API, _Svelte Tweakpane UI_ provides a unique `groupname` for each
 * instance of RadioGrid by default for consistency with expectations around component isolation. You
 * may still assign the `groupname` prop manually to create cross-component groups that share selection
 * exclusivity.
 *
 * _Svelte Tweakpane UI_ also includes some additional logic to manage default grid dimensions:
 *
 *   - If no `rows` or `columns` props are provided, it will create a grid with the squarest possible aspect ratio for the given quantity of `values`.
 *
 *   - If a single `rows` or `columns` prop is provided, it lets the undefined axis grow / shrink as needed to accommodate the quantity of `values`.
 *
 *   - If both `rows` _and_ `columns` props area provided, then buttons may be clipped if `rows * columns < values.length`.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the radio grid in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-essentials) of the plugin with build optimizations. The fork also changes the package name from `@tweakpane/plugin-essentials` to `@kitschpatrol/tweakpane-plugin-essentials` for consistency with other plugins.
 *
 * @emits {RadioGridChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { RadioGrid } from 'svelte-tweakpane-ui'
 *
 * // Svelte transition works around CSS gradient
 * // transition limitations
 * import { fade } from 'svelte/transition'
 *
 * const radioValues = [
 *   ['magenta', 'orange'],
 *   ['yellow', 'red'],
 *   ['violet', 'gold'],
 *   ['red', 'rebeccapurple'],
 * ]
 *
 * let value = 1
 *
 * $: [start, end] = radioValues[value - 1]
 * </script>
 *
 * <RadioGrid bind:value prefix="Color Scheme " values={[1, 2, 3, 4]} />
 *
 * <div class="demo">
 * {#key value}
 *   <div
 *     class="swatch"
 *     style:--e={end}
 *     style:--s={start}
 *     transition:fade
 *   ></div>
 * {/key}
 * </div>
 *
 * <style>
 * div.demo {
 *   position: relative;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: white;
 * }
 *
 * div.swatch {
 *   position: absolute;
 *   width: 100%;
 *   height: 100%;
 *   background: linear-gradient(45deg, var(--s), var(--e));
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [RadioGrid.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/RadioGrid.svelte)
 */
export default class RadioGrid<T extends boolean | number | string> extends SvelteComponent<
	RadioGridProps<T>,
	RadioGridEvents<T>,
	RadioGridSlots<T>
> {}
export {}
