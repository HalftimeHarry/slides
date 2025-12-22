import { SvelteComponent } from 'svelte'
import type { IntervalSliderValue } from '../control/IntervalSlider.svelte'
import type { NumberInputParams as GenericSliderOptions } from 'tweakpane'
import type { SliderInputBindingApi as GenericSliderRef } from 'tweakpane'
declare class __sveltets_Render<T extends number | IntervalSliderValue> {
	props(): {
		/**
		 * Minimum value.
		 *
		 * Specifying both a `min` and a `max` prop turns the control into a slider.
		 * @default `undefined`
		 * */
		min?: number
		/**
		 * Maximum value.
		 *
		 * Specifying both a `min` and a `max` prop turns the control into a slider.
		 * @default `undefined`
		 * */
		max?: number
		/**
		 * A function to customize the point value's string representation (e.g. rounding, etc.).
		 * @default `undefined`  \
		 * Normal `.toString()` formatting.
		 * */
		format?: ((value: number) => string) | undefined
		/**
		 * The unit scale for key-based input for all dimensions (e.g. the up and down arrow keys).
		 * @default `1`  \
		 * Or `stepValue` if defined.
		 * */
		keyScale?: number
		/**
		 * The unit scale for pointer-based input for all dimensions.
		 * @default `undefined`  \
		 * [Dynamic based on magnitude of
		 * `value`](https://github.com/cocopon/tweakpane/blob/66dfbea04bfe9b7f031673c955ceda1f92356e75/packages/core/src/common/number/util.ts#L54).
		 * */
		pointerScale?: number
		/**
		 * The minimum step interval.
		 * @default `undefined`  \
		 * No step constraint.
		 * */
		step?: number
		/**
		 * When `true`, expand the width of the control at the expense of the numeric input
		 * field.
		 * @default `false`
		 * */
		wide?: boolean
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
				options?: GenericSliderOptions | undefined
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
				ref?: GenericSliderRef | undefined
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
	events(): {
		change: import('..').BindingChangeEvent
	} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type GenericSliderProps<T extends number | IntervalSliderValue> = ReturnType<
	__sveltets_Render<T>['props']
>
export type GenericSliderEvents<T extends number | IntervalSliderValue> = ReturnType<
	__sveltets_Render<T>['events']
>
export type GenericSliderSlots<T extends number | IntervalSliderValue> = ReturnType<
	__sveltets_Render<T>['slots']
>
/**
 * This component is for internal use only.
 *
 * Note that we go from a regular slider to a range / interval slider (via the essentials plugin) just
 * by changing the input type For the sake of consistency and discoverability, `<IntervalSlider>` is
 * implement as a separate component leveraging this generic implementation.
 *
 * @sourceLink
 * [GenericSlider.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/GenericSlider.svelte)
 */
export default class GenericSlider<T extends number | IntervalSliderValue> extends SvelteComponent<
	GenericSliderProps<T>,
	GenericSliderEvents<T>,
	GenericSliderSlots<T>
> {}
export {}
