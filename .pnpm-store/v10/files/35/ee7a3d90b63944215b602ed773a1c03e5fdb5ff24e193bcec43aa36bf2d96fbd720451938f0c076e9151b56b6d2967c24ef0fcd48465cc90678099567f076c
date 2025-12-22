import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type { PointDimensionParams } from '@tweakpane/core'
export type RotationQuaternionOptions = Simplify<PointDimensionParams>
export type RotationQuaternionValueObject = {
	x: number
	y: number
	z: number
	w: number
}
export type RotationQuaternionValueTuple = [x: number, y: number, z: number, w: number]
export type RotationQuaternionValue = Simplify<
	RotationQuaternionValueObject | RotationQuaternionValueTuple
>
export type RotationQuaternionChangeEvent = ValueChangeEvent<RotationQuaternionValue>
import type { RotationInputPluginQuaternionParams as RotationQuaternionOptionsInternal } from '@kitschpatrol/tweakpane-plugin-rotation/dist/types/RotationInputPluginQuaternionParams'
declare const __propDef: {
	props: {
		/**
		 * The quaternion value to control.
		 *
		 * Tuple values are a convenience added by _Svelte Tweakpane UI_, and is not part of the
		 * original TweakpaneRotationPlugin API.
		 * @bindable
		 * */
		value: RotationQuaternionValue
		/**
		 * Input parameters specific to the X dimension.
		 *
		 * Renamed from `x` in TweakpaneRotationPlugin API to clarify that it is an object of
		 * options, not a value.
		 * @default `undefined`
		 * */
		optionsX?: RotationQuaternionOptions
		/**
		 * Input parameters specific to the Y dimension.
		 *
		 * Renamed from `y` in TweakpaneRotationPlugin API to clarify that it is an object of
		 * options, not a value.
		 * @default `undefined`
		 * */
		optionsY?: RotationQuaternionOptions
		/**
		 * Input parameters specific to the Z dimension.
		 *
		 * Renamed from `z` in TweakpaneRotationPlugin API to clarify that it is an object of
		 * options, not a value.
		 * @default `undefined`
		 * */
		optionsZ?: RotationQuaternionOptions
		/**
		 * Input parameters specific to the W dimension.
		 *
		 * Renamed from `w` in TweakpaneRotationPlugin API to clarify that it is an object of
		 * options, not a value.
		 * @default `undefined`
		 * */
		optionsW?: RotationQuaternionOptions
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
			 * The quaternion value to control.
			 *
			 * Tuple values are a convenience added by _Svelte Tweakpane UI_, and is not part of the
			 * original TweakpaneRotationPlugin API.
			 * @bindable
			 */
			value: RotationQuaternionValue
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, RotationQuaternionValue>
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
					options?: RotationQuaternionOptionsInternal | undefined
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
		change: RotationQuaternionChangeEvent
	}
}
export type RotationQuaternionProps = typeof __propDef.props
export type RotationQuaternionEvents = typeof __propDef.events
export type RotationQuaternionSlots = typeof __propDef.slots
/**
 * Integrates the [quaternion
 * rotation](https://github.com/0b5vr/tweakpane-plugin-rotation/blob/dev/src/RotationInputPluginQuaternion.ts)
 * control from [0b5vr](https://0b5vr.com)'s [tweakpane-plugin-rotation](https://github.com/0b5vr/tweakpane-plugin-rotation).
 *
 * _Svelte Tweakpane UI_ extends the original API to support tuple values in addition to object values.
 * (Useful when working with frameworks like [three.js](https://threejs.org) /
 * [threlte](https://threlte.xyz).)
 *
 * A utility function `Utils.quaternionToCssTransform()` is also provided to easily convert a euler
 * rotation value object or tuple into a CSS transform string.
 *
 * See also `<RotationEuler>` if you're not into the whole `w` thing.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the profiler in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-rotation) of the plugin with build optimizations.
 *
 * @emits {RotationQuaternionChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *  import {
 *    Button,
 *    RotationQuaternion,
 *    type RotationQuaternionValue,
 *    Utils,
 *  } from 'svelte-tweakpane-ui'
 *
 *  // Value could also be an object
 *  // e.g. {x: 0, y: 0, z: 0, w: 0}
 *  let value: RotationQuaternionValue = [0, 0, 0, 0]
 *
 *  $: transform = Utils.quaternionToCssTransform(value)
 *  $: valueRows = Array.isArray(value)
 *    ? value.map((v) => `${v >= 0 ? '+' : ''}${v.toFixed(6)}`).join('\n')
 *    : ''
 * </script>
 *
 * <RotationQuaternion
 *  bind:value
 *  expanded={true}
 *  label="CSS Rotation"
 *  picker="inline"
 * />
 * <Button on:click={() => (value = [0, 0, 0, 0])} title="Reset" />
 *
 * <div class="billboard" style:transform>
 *  <pre>{valueRows}</pre>
 * </div>
 *
 * <style>
 *  div.billboard {
 *    display: flex;
 *    align-items: center;
 *    justify-content: center;
 *    aspect-ratio: 1;
 *    width: 100%;
 *    background: linear-gradient(45deg, magenta, orange);
 *  }
 * </style>
 * ```
 *
 * @sourceLink
 * [RotationQuaternion.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/RotationQuaternion.svelte)
 */
export default class RotationQuaternion extends SvelteComponent<
	RotationQuaternionProps,
	RotationQuaternionEvents,
	RotationQuaternionSlots
> {}
export {}
