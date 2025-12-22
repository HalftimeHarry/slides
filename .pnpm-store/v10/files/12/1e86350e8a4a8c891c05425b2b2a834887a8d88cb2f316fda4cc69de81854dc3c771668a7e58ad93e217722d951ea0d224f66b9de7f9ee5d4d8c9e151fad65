import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type WheelChangeEvent = ValueChangeEvent<number>
declare const __propDef: {
	props: {
		/**
		 * A `number` value to control.
		 * @bindable
		 * */
		value: number
		/** The amount of the value to change per pixel of movement.
		 * @default `undefined`  \
		 * [Dynamic based on magnitude of
		 * `value`](https://github.com/cocopon/tweakpane/blob/66dfbea04bfe9b7f031673c955ceda1f92356e75/packages/core/src/common/number/util.ts#L54).
		 */
		amount?: number
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
					ref?: import('tweakpane').SliderInputBindingApi | undefined
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
		change: WheelChangeEvent
	}
}
export type WheelProps = typeof __propDef.props
export type WheelEvents = typeof __propDef.events
export type WheelSlots = typeof __propDef.slots
/**
 * A control evoking a dial on a proper camera body.
 *
 * Similar in functionality to a `<Slider>`.
 *
 * Integrates the [Wheel](https://github.com/tweakpane/plugin-camerakit/blob/main/src/plugin-wheel.ts)
 * control from Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me) [Camerakit
 * plugin](https://github.com/tweakpane/plugin-camerakit).
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the wheel in `<Pane position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-camerakit) of the plugin with build optimizations. The fork also changes the package name from `@tweakpane/plugin-camerakit` to `@kitschpatrol/tweakpane-plugin-camerakit` for consistency with other plugins.
 *
 * @emits {WheelChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Wheel } from 'svelte-tweakpane-ui'
 *
 * let angle = 45
 * </script>
 *
 * <Wheel
 * bind:value={angle}
 * format={(v) => `${(Math.abs(v) % 360).toFixed(0)}°`}
 * />
 *
 * <div class="demo" style:--a="{angle}deg"></div>
 *
 * <style>
 * div.demo {
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(var(--a), magenta, orange);
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [Wheel.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Wheel.svelte)
 */
export default class Wheel extends SvelteComponent<WheelProps, WheelEvents, WheelSlots> {}
export {}
