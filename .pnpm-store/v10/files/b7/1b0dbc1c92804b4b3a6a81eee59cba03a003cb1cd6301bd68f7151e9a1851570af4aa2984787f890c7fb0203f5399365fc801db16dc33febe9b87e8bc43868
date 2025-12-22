import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type {
	RgbaColorObject,
	RgbColorObject,
} from '@tweakpane/core/dist/input-binding/color/model/color.js'
export type ColorValueRgbTuple = [r: number, g: number, b: number]
export type ColorValueRgbaTuple = [r: number, g: number, b: number, a: number]
export type ColorValueRgbObject = Simplify<RgbColorObject>
export type ColorValueRgbaObject = Simplify<RgbaColorObject>
export type ColorValueString = string
export type ColorValue = Simplify<
	| ColorValueRgbaObject
	| ColorValueRgbaTuple
	| ColorValueRgbObject
	| ColorValueRgbTuple
	| ColorValueString
>
export type ColorChangeEvent = ValueChangeEvent<ColorValue>
import type { ColorInputParams as ColorOptions } from 'tweakpane'
declare const __propDef: {
	props: {
		/**
		 * A color value to control.
		 *
		 * Use either a color-like string (e.g. #ff00ff), or an object with `r`, `b`, `g`, and
		 * optional `a` keys.
		 * @bindable
		 * */
		value: ColorValue
		/**
		 * Whether to treat values as floats from 0.0 to 1.0, or integers from 0 to 255.
		 * @default `'int'`
		 * */
		type?: 'float' | 'int'
	} & Omit<
		{
			/**
			 * DOM class name of the button used to expand and collapse the input's picker.
			 * @default `undefined`
			 */
			buttonClass?: string
			/**
			 * Expand or collapse the input's picker.
			 * @default `false`
			 * @bindable
			 */
			expanded?: boolean
			/**
			 * The style of value "picker" to use in the input.
			 * @default `'popup'`
			 */
			picker?: 'inline' | 'popup'
			/**
			 * Allow users to interactively expand / contract the picker.
			 * @default `true`
			 */
			userExpandable?: boolean
		} & {
			/**
			 * A color value to control.
			 *
			 * Use either a color-like string (e.g. #ff00ff), or an object with `r`, `b`, `g`, and
			 * optional `a` keys.
			 * @bindable
			 */
			value: ColorValue
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, ColorValue>
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
					options?: ColorOptions | undefined
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
					plugin?: import('../utils').Plugin | undefined
				},
				'object' | 'key'
			>,
		'ref' | 'options' | 'plugin' | 'buttonClass'
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
		change: ColorChangeEvent
	}
}
export type ColorProps = typeof __propDef.props
export type ColorEvents = typeof __propDef.events
export type ColorSlots = typeof __propDef.slots
/**
 * A color picker.
 *
 * Wraps Tweakpane's [color input binding](https://tweakpane.github.io/docs/input-bindings/#color).
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the color picker in `<Pane
 * position="inline">`.
 *
 * @emits {ColorChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Color } from 'svelte-tweakpane-ui'
 *
 * let startColor = '#fff000'
 * let endColor = '#ff00ff'
 * </script>
 *
 * <Color bind:value={startColor} label="Start Color" />
 * <Color bind:value={endColor} label="End Color" />
 *
 * <div class="demo" style:--a={startColor} style:--b={endColor}></div>
 *
 * <style>
 * .demo {
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(to top, var(--a), var(--b));
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [Color.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Color.svelte)
 */
export default class Color extends SvelteComponent<ColorProps, ColorEvents, ColorSlots> {}
export {}
