import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type { SliderInputBindingApi as GenericSliderRef } from 'tweakpane'
export type IntervalSliderValueTuple = [min: number, max: number]
export type IntervalSliderValueObject = {
	min: number
	max: number
}
export type IntervalSliderValue = Simplify<IntervalSliderValueObject | IntervalSliderValueTuple>
export type IntervalSliderChangeEvent = ValueChangeEvent<IntervalSliderValue>
declare const __propDef: {
	props: {
		/**
		 * Interval value to control.
		 *
		 * Tuples are a convenience addition to the vanilla JS Tweakpane API.
		 * @bindable
		 */
		value: IntervalSliderValue
		/**
		 * Midpoint of the interval range value.
		 * @bindable
		 * */
		meanValue?: number
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
			 * Interval value to control.
			 *
			 * Tuples are a convenience addition to the vanilla JS Tweakpane API.
			 * @bindable
			 */
			value: IntervalSliderValue
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, IntervalSliderValue>
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
					plugin?: import('../utils').Plugin | undefined
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
		change: IntervalSliderChangeEvent
	}
}
export type IntervalSliderProps = typeof __propDef.props
export type IntervalSliderEvents = typeof __propDef.events
export type IntervalSliderSlots = typeof __propDef.slots
/**
 * A twin-handled slider control for specifying range values.
 *
 * Integrates the [Interval](https://github.com/tweakpane/plugin-essentials#interval) control from
 * Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me)  [Essentials
 * plugin](https://github.com/tweakpane/plugin-essentials).
 *
 * _Svelte Tweakpane UI_ extends the original implementation to by supporting tuple values in addition
 * to object values. It also exposes a `meanValue` prop for reading or setting the midpoint of the
 * interval range value.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the interval slider in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-essentials) of the plugin with build optimizations. The fork also changes the package name from `@tweakpane/plugin-essentials` to `@kitschpatrol/tweakpane-plugin-essentials` for consistency with other plugins.
 *
 * @emits {IntervalSliderChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { IntervalSlider } from 'svelte-tweakpane-ui'
 *
 * // Could specify convenience type IntervalSliderValueTuple here, or
 * // use the object {start: number, end: number} instead of a tuple
 * let value: [number, number] = [25, 75]
 * </script>
 *
 * <IntervalSlider
 * bind:value
 * min={0}
 * max={100}
 * format={(v) => `${v.toFixed(0)}%`}
 * />
 * <div class="demo" style:--e="{value[1]}%" style:--s="{value[0]}%"></div>
 *
 * <style>
 * div.demo {
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(45deg, magenta var(--s), orange var(--e));
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [IntervalSlider.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/IntervalSlider.svelte)
 */
export default class IntervalSlider extends SvelteComponent<
	IntervalSliderProps,
	IntervalSliderEvents,
	IntervalSliderSlots
> {}
export {}
