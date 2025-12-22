import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type { EulerOrder } from '@kitschpatrol/tweakpane-plugin-rotation/dist/types/EulerOrder.js'
import type { EulerUnit } from '@kitschpatrol/tweakpane-plugin-rotation/dist/types/EulerUnit.js'
import type { PointDimensionParams } from '@tweakpane/core'
export type RotationEulerOptions = Simplify<PointDimensionParams>
export type RotationEulerOrder = EulerOrder
export type RotationEulerUnit = EulerUnit
export type RotationEulerValueObject = {
	x: number
	y: number
	z: number
}
export type RotationEulerValueTuple = [x: number, y: number, z: number]
export type RotationEulerValue = Simplify<RotationEulerValueObject | RotationEulerValueTuple>
export type RotationEulerChangeEvent = ValueChangeEvent<RotationEulerValue>
import type { RotationInputPluginEulerParams as RotationEulerOptionsInternal } from '@kitschpatrol/tweakpane-plugin-rotation/dist/types/RotationInputPluginEulerParams'
declare const __propDef: {
	props: {
		/**
		 * The rotation value to control.
		 *
		 * Tuple values are a convenience added by _Svelte Tweakpane UI_, and are not part of the
		 * original TweakpaneRotationPlugin API.
		 *
		 * See the `order` prop to specify the sequence in which rotations are applied.
		 * @bindable
		 * */
		value: RotationEulerValue
		/**
		 * Input parameters specific to the X dimension.
		 *
		 * Renamed from `x` in the original TweakpaneRotationPlugin API to clarify that it is an
		 * object of options, not a value.
		 * @default `undefined`
		 * */
		optionsX?: RotationEulerOptions
		/**
		 * Input parameters specific to the Y dimension.
		 *
		 * Renamed from `y` in the original TweakpaneRotationPlugin API to clarify that it is an
		 * object of options, not a value.
		 * @default `undefined`
		 * */
		optionsY?: RotationEulerOptions
		/**
		 * Input parameters specific to the Z dimension.
		 *
		 * Renamed from `z` in the original TweakpaneRotationPlugin API to clarify that it is an
		 * object of options, not a value.
		 * @default `undefined`
		 * */
		optionsZ?: RotationEulerOptions
		/**
		 * Order of in which rotations are applied.
		 *
		 * Note that this is extrinsic rotations (used by Blender, Maya, and Unity). Three.js uses
		 * intrinsic rotations, so you have to reverse the order if you want to match Three.js'
		 * behavior.
		 * @default `'XYZ'`
		 * */
		order?: RotationEulerOrder
		/**
		 * Units of rotation.
		 * @default `'rad'`
		 */
		unit?: RotationEulerUnit
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
			 * The rotation value to control.
			 *
			 * Tuple values are a convenience added by _Svelte Tweakpane UI_, and are not part of the
			 * original TweakpaneRotationPlugin API.
			 *
			 * See the `order` prop to specify the sequence in which rotations are applied.
			 * @bindable
			 */
			value: RotationEulerValue
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, RotationEulerValue>
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
					options?: RotationEulerOptionsInternal | undefined
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
		change: RotationEulerChangeEvent
	}
}
export type RotationEulerProps = typeof __propDef.props
export type RotationEulerEvents = typeof __propDef.events
export type RotationEulerSlots = typeof __propDef.slots
/**
 * Integrates the [euler
 * rotation](https://github.com/0b5vr/tweakpane-plugin-rotation/blob/dev/src/RotationInputPluginEuler.ts)
 * control from [0b5vr](https://0b5vr.com)'s [tweakpane-plugin-rotation](https://github.com/0b5vr/tweakpane-plugin-rotation).
 *
 * _Svelte Tweakpane UI_ extends the original API to support tuple values in addition to object values.
 * (Useful when working with frameworks like [three.js](https://threejs.org) /
 * [threlte](https://threlte.xyz).)
 *
 * A utility function `Utils.eulerToCssTransform()` is also provided to easily convert a quaternion
 * value object or tuple into a CSS transform string.
 *
 * See also `<RotationQuaternion>` if you're feeling gimbal locked.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the profiler in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-rotation) of the plugin with build optimizations.
 *
 * @emits {RotationEulerChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import {
 *   Button,
 *   RotationEuler,
 *   type RotationEulerValueObject,
 *   Utils,
 * } from 'svelte-tweakpane-ui'
 *
 * // Value could also be a tuple
 * // e.g. [0, 0, 0]
 * let value: RotationEulerValueObject = {
 *   x: 0,
 *   y: 0,
 *   z: 0,
 * }
 *
 * $: transform = Utils.eulerToCssTransform(value)
 * $: valueRows = Object.values(value)
 *   .map((v) => `${v >= 0 ? '+' : ''}${v.toFixed(6)}`)
 *   .join('\n')
 * </script>
 *
 * <RotationEuler
 * bind:value
 * expanded={true}
 * label="CSS Rotation"
 * picker="inline"
 * />
 * <Button
 * on:click={() =>
 *   (value = {
 *     x: 0,
 *     y: 0,
 *     z: 0,
 *   })}
 * title="Reset"
 * />
 *
 * <div class="billboard" style:transform>
 * <pre>{valueRows}</pre>
 * </div>
 *
 * <style>
 * div.billboard {
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(45deg, magenta, orange);
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [RotationEuler.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/RotationEuler.svelte)
 */
export default class RotationEuler extends SvelteComponent<
	RotationEulerProps,
	RotationEulerEvents,
	RotationEulerSlots
> {}
export {}
