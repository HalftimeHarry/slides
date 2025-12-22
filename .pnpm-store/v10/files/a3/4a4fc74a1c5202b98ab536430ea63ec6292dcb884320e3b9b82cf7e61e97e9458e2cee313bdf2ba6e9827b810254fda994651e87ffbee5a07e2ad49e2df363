import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
export type CubicBezierValueObject = {
	x1: number
	y1: number
	x2: number
	y2: number
}
export type CubicBezierValueTuple = [x1: number, y1: number, x2: number, y2: number]
export type CubicBezierValue = Simplify<CubicBezierValueObject | CubicBezierValueTuple>
export type CubicBezierChangeEvent = ValueChangeEvent<CubicBezierValue>
import type { CubicBezierApi as CubicBezierRef } from '@kitschpatrol/tweakpane-plugin-essentials'
import type { CubicBezierBladeParams as CubicBezierOptions } from '@kitschpatrol/tweakpane-plugin-essentials/dist/types/cubic-bezier/plugin.d.ts'
declare const __propDef: {
	props: {
		/**
		 * The cubic bezier value to control.
		 *
		 * Object value type is a convenience added by _Svelte Tweakpane UI_, and is not part of the
		 * original `@tweakpane/plugin-essentials` API.
		 * @bindable
		 */
		value: CubicBezierValue
		/**
		 * Text displayed next to the control.
		 * @default `undefined`
		 * */
		label?: string
	} & Omit<
		{
			/**
			 * DOM class name of the button used to expand and collapse the blade's picker.
			 * @default `undefined`
			 */
			buttonClass?: string
			/**
			 * Expand or collapse the blade's picker.
			 * @default `true`
			 * @bindable
			 */
			expanded?: boolean
			/**
			 * The style of value "picker" to use in the blade.
			 * @default `'popup'`
			 */
			picker?: 'inline' | 'popup'
			/**
			 * Allow users to interactively expand / contract the value picker by clicking its icon.
			 *
			 * Most useful when `picker` is `inline`.
			 * @default `true`
			 */
			userExpandable?: boolean
		} & {
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: CubicBezierOptions
			/**
			 * Prevent interactivity and gray out the control.
			 * @default `false`
			 */
			disabled?: boolean
			/**
			 * Custom color scheme.
			 * @default `undefined`  \
			 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
			 * set with `setGlobalDefaultTheme()`.
			 */
			theme?: import('..').Theme | undefined
			/**
			 * Reference to internal Tweakpane
			 * [`BladeApi`](https://tweakpane.github.io/docs/api/classes/BladeApi.html) for this blade.
			 *
			 * This property is exposed for advanced use cases only, such as when implementing convenience
			 * components wrapping `<Blade>`'s functionality.
			 *
			 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
			 *
			 * @bindable
			 * @readonly
			 */
			ref?: CubicBezierRef | undefined
			/**
			 * Imported Tweakpane `TpPluginBundle` (aliased as `Plugin`) module to automatically register in
			 * the `<Blade>`'s containing `<Pane>`.
			 *
			 * This property is exposed for advanced use cases only, such as when implementing convenience
			 * components wrapping `<Blade>`'s functionality in combination with a Tweakpane plugin.
			 *
			 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
			 *
			 * @default `undefined`
			 */
			plugin?: import('../utils').Plugin | undefined
		},
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
		change: CubicBezierChangeEvent
	}
}
export type CubicBezierProps = typeof __propDef.props
export type CubicBezierEvents = typeof __propDef.events
export type CubicBezierSlots = typeof __propDef.slots
/**
 * A control for editing a bezier curve. Ideal for tweaking animation easing values.
 *
 * Integrates the [Cubic Bezier](https://github.com/tweakpane/plugin-essentials#cubic-bezier) control
 * from Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me)  [Essentials
 * plugin](https://github.com/tweakpane/plugin-essentials).
 *
 * _Svelte Tweakpane UI_ extends the original implementation to by supporting tuple values in addition
 * to object values.
 *
 * A utility function `Utils.cubicBezierToEaseFunction()` is also provided to easily convert a cubic
 * bezier value to an easing function compatible with Svelte's built-in
 * [motion](https://svelte.dev/docs/svelte-motion),
 * [transition](https://svelte.dev/docs/svelte-transition), and
 * [animate](https://svelte.dev/docs/svelte-animate) modules.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the cubic bezier control in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a [fork](https://github.com/kitschpatrol/tweakpane-plugin-essentials) of the plugin with build optimizations and [a fix for a performance issue](https://github.com/tweakpane/plugin-essentials/pull/21). The fork also changes the package name from `@tweakpane/plugin-essentials` to `@kitschpatrol/tweakpane-plugin-essentials` for consistency with other plugins.
 *
 * @emits {CubicBezierChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import {
 *   CubicBezier,
 *   type CubicBezierValue,
 *   RadioGrid,
 *   Slider,
 *   Utils,
 * } from 'svelte-tweakpane-ui'
 * import { tweened } from 'svelte/motion'
 *
 * // could also be a tuple
 * let value: CubicBezierValue = {
 *   x1: 0.25,
 *   y1: 0.1,
 *   x2: 0.25,
 *   y2: 1,
 * }
 * let duration = 1000
 * let moods = ['Set', 'Rise']
 * let mood: string = moods[0]
 *
 * const positionTween = tweened(0)
 *
 * function lerp(value: number, low: number, high: number): number {
 *   return (1 - value) * low + value * high
 * }
 *
 * $: positionTween.set(mood === 'Set' ? 0 : 1, {
 *   duration,
 *   easing: Utils.cubicBezierToEaseFunction(value),
 * })
 *
 * $: celestialHeight = lerp($positionTween, 20, 80)
 * $: twilightAmount = lerp($positionTween, 20, -80)
 * </script>
 *
 * <CubicBezier bind:value expanded={true} picker="inline" />
 * <Slider
 * bind:value={duration}
 * min={0}
 * max={10_000}
 * format={(v) => `${(v / 1000).toFixed(1)}`}
 * label="Duration (Seconds)"
 * />
 * <RadioGrid bind:value={mood} values={['Rise', 'Set']} />
 *
 * <div class="demo" style:--a="{twilightAmount}%">
 * <div class="celestial-object" style:--t="{celestialHeight}%"></div>
 * </div>
 *
 * <style>
 * .demo {
 *   position: relative;
 *   overflow: hidden;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(to top, orange var(--a), magenta 100%);
 * }
 *
 * .celestial-object {
 *   position: absolute;
 *   bottom: var(--t);
 *   left: 50%;
 *   transform-origin: center;
 *   transform: translate(-50%, 50%);
 *   aspect-ratio: 1;
 *   width: 20%;
 *   background-color: yellow;
 *   border-radius: 50%;
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [CubicBezier.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/CubicBezier.svelte)
 */
export default class CubicBezier extends SvelteComponent<
	CubicBezierProps,
	CubicBezierEvents,
	CubicBezierSlots
> {}
export {}
