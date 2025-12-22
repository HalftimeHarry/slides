import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
import type { SliderInputBindingApi as GenericSliderRef } from 'tweakpane'
export type SliderChangeEvent = ValueChangeEvent<number>
declare const __propDef: {
	props: {
		/**
		 * A `number` value to control.
		 * @bindable.
		 * */
		value: number
	} & Omit<
		{
			/**
			 * Minimum value.
			 *
			 * Specifying both a `min` and a `max` prop turns the control into a slider.
			 * @default `undefined`
			 */
			min?: number
			/**
			 * Maximum value.
			 *
			 * Specifying both a `min` and a `max` prop turns the control into a slider.
			 * @default `undefined`
			 */
			max?: number
			/**
			 * A function to customize the point value's string representation (e.g. rounding, etc.).
			 * @default `undefined`  \
			 * Normal `.toString()` formatting.
			 */
			format?: ((value: number) => string) | undefined
			/**
			 * The unit scale for key-based input for all dimensions (e.g. the up and down arrow keys).
			 * @default `1`  \
			 * Or `stepValue` if defined.
			 */
			keyScale?: number
			/**
			 * The unit scale for pointer-based input for all dimensions.
			 * @default `undefined`  \
			 * [Dynamic based on magnitude of
			 * `value`](https://github.com/cocopon/tweakpane/blob/66dfbea04bfe9b7f031673c955ceda1f92356e75/packages/core/src/common/number/util.ts#L54).
			 */
			pointerScale?: number
			/**
			 * The minimum step interval.
			 * @default `undefined`  \
			 * No step constraint.
			 */
			step?: number
			/**
			 * When `true`, expand the width of the control at the expense of the numeric input
			 * field.
			 * @default `false`
			 */
			wide?: boolean
		} & {
			/**
			 * A `number` value to control.
			 * @bindable .
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
					options?: import('tweakpane').NumberInputParams | undefined
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
					plugin?: import('../utils.js').Plugin | undefined
				},
				'object' | 'key'
			>,
		'ref' | 'options' | 'plugin'
	>
	slots: {}
	events: {
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
		change: SliderChangeEvent
	}
}
export type SliderProps = typeof __propDef.props
export type SliderEvents = typeof __propDef.events
export type SliderSlots = typeof __propDef.slots
/**
 * A slider component providing fine-grained control over numeric values.
 *
 * Wraps Tweakpane's [number bindings](https://tweakpane.github.io/docs/input-bindings/#number).
 *
 * Note that if `min` and `max` props are not defined, no linear slider widget will be provided and a
 * input field with a draggable handle will be used instead.
 *
 * See the `<Interval>` component for a multi-handle range-defining slider.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the slider in `<Pane position="inline">`.
 *
 * @emits {SliderChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *  import { Slider } from 'svelte-tweakpane-ui'
 *
 *  let value = 0
 * </script>
 *
 * <Slider
 *  bind:value
 *  min={-1}
 *  max={1}
 *  format={(v) => v.toFixed(2)}
 *  label="Let it Slide"
 * />
 * <pre>Value: {value}</pre>
 * ```
 *
 * @sourceLink
 * [Slider.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Slider.svelte)
 */
export default class Slider extends SvelteComponent<SliderProps, SliderEvents, SliderSlots> {}
export {}
