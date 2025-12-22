import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ProfilerBladeMeasureHandler } from '@kitschpatrol/tweakpane-plugin-profiler'
export type ProfilerCalcMode = 'frame' | 'mean' | 'median'
export type ProfilerMeasure = (name: string, functionToMeasure: () => void) => void
export type ProfilerMeasureAsync = (
	name: string,
	functionToMeasure: () => Promise<void>,
) => Promise<void>
export type ProfilerMeasureHandler = Simplify<ProfilerBladeMeasureHandler>
export type ProfilerChangeEvent = CustomEvent<number>
import type { ProfilerBladeApi as ProfilerRef } from '@kitschpatrol/tweakpane-plugin-profiler/dist/types/ProfilerBladeApi.js'
import type { ProfilerBladePluginParams as ProfilerOptions } from '@kitschpatrol/tweakpane-plugin-profiler/dist/types/ProfilerBladePluginParams.js'
declare const __propDef: {
	props: {
		/**
		 * Function handle that wraps another function to measure its execution duration.
		 *
		 *  If you want to measure something other than execution duration, customize
		 * `ProfilerBladeDefaultMeasureHandler`.
		 *
		 * @example `measure('Hard Work', () => { ... })`;
		 * @bindable
		 * @readonly
		 * @default `undefined`
		 */
		measure?: ProfilerMeasure | undefined
		/**
		 * Async variation of function handle that wraps another function to measure its execution
		 * duration.
		 *
		 * @example `measureAsync('Hard Work', async () => { ... })`;
		 * @bindable
		 * @async
		 * @readonly
		 * @default `undefined`
		 */
		measureAsync?: ProfilerMeasureAsync | undefined
	} & ({
		/**
		 * Number of duration samples from which to calculate the delta value when `calcMode` is
		 * `'mean'` or `'median'`.
		 * @default `30`
		 */
		bufferSize?: number
		/**
		 * How to calculate the delta value.
		 *
		 * `'frame'` takes only the latest sample into account, while `'mean'` and `'median'` are
		 * calculated from the samples in the buffer.
		 * @default `'mean'`
		 */
		calcMode?: ProfilerCalcMode
		/**
		 * Label suffix for the delta values shown in the control.
		 *
		 * Possibly useful if you're using a custom `ProfilerBladeDefaultMeasureHandler` and are
		 * measuring something other than time.
		 * @default `'ms'`
		 * */
		deltaUnit?: string
		/**
		 * Precision of the delta values shown in the control.
		 * @default `2`
		 */
		fractionDigits?: number
		/**
		 * Milliseconds between updates to the profiler visualization and delta label text.
		 *
		 * Note that this does not affect the internal sampling rate of the profiler itself, which
		 * is determined by your calls to the bound `measure` function.
		 * @default `500`
		 */
		interval?: number
		/**
		 * Text displayed next to the profiler visualization.
		 * @default `undefined`
		 * */
		label?: string
		/**
		 * Function handle that wraps another function to measure its execution duration.
		 *
		 *  If you want to measure something other than execution duration, customize
		 * `ProfilerBladeDefaultMeasureHandler`.
		 *
		 * @example `measure('Hard Work', () => { ... })`;
		 *
		 * @bindable
		 * @readonly
		 * @default `undefined`
		 */
		measure?: ProfilerMeasure
		/**
		 * Async variation of function handle that wraps another function to measure its execution
		 * duration.
		 *
		 * @example `measureAsync('Hard Work', async () => { ... })`;
		 *
		 * @bindable
		 * @async
		 * @readonly
		 * @default `undefined`
		 */
		measureAsync?: ProfilerMeasureAsync
		/**
		 * Function wrapping the `measure` function.
		 *
		 * The default is fine for most cases when you want to measure a temporal duration.
		 * @default [`new
		 * ProfilerBladeDefaultMeasureHandler()`](https://github.com/kitschpatrol/tweakpane-plugin-profiler/blob/dev/src/ProfilerBladeDefaultMeasureHandler.ts)
		 */
		measureHandler?: ProfilerMeasureHandler
		/**
		 * Determines the horizontal scale and color mapping of the profiler visualization bars.
		 * @default `16.67`  \
		 * 60fps.
		 */
		targetDelta?: number
	} & Omit<
		{
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: ProfilerOptions
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
			ref?: ProfilerRef | undefined
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
		'ref' | 'options' | 'plugin'
	>)
	slots: {}
	events: {
		/**
		 * Fires when the overall delta value changes, passing the latest measurement.
		 *
		 * Note that the values described in the `ProfilerChangeEvent` type are available on the
		 * `event.detail` parameter.
		 * @event
		 * */
		change: ProfilerChangeEvent
	}
}
export type ProfilerProps = typeof __propDef.props
export type ProfilerEvents = typeof __propDef.events
export type ProfilerSlots = typeof __propDef.slots
/**
 * Measure and visualize multiple quantities over time.
 *
 * Configured to measure a function's execution duration by default, but can be customized to measure
 * anything.
 *
 * Integrates [0b5vr's](https://0b5vr.com)
 * [tweakpane-plugin-profiler](https://github.com/0b5vr/tweakpane-plugin-profiler).
 *
 * See `<FpsGraph>` for a simpler alternative optimized for framerate visualization.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the profiler in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-profiler) of the plugin with build optimizations.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { onMount } from 'svelte'
 * import {
 *   Profiler,
 *   type ProfilerMeasure,
 *   Slider,
 * } from 'svelte-tweakpane-ui'
 *
 * // This is a readonly function handle assigned by Profiler component
 * // first used in onMount since it is not bound until then
 * let measure: ProfilerMeasure
 *
 * let loopExponent = 1
 *
 * // Helper to test Math functions
 * function hardWork(
 *   function_: (n: number) => number,
 *   exponent: number,
 * ): void {
 *   measure(function_.name, () => {
 *     for (let sum = 0; sum < Number('1e' + exponent); sum++) {
 *       function_(sum)
 *     }
 *   })
 * }
 *
 * onMount(() => {
 *   let animationFrameHandle: number
 *
 *   // Nesting measurements creates a hierarchy
 *   // in the Profile visualization
 *   function tick() {
 *     measure('Tick', () => {
 *       measure('Trigonometry', () => {
 *         hardWork(Math.sin, loopExponent)
 *         hardWork(Math.cos, loopExponent)
 *         hardWork(Math.tan, loopExponent)
 *         hardWork(Math.atan, loopExponent)
 *         hardWork(Math.acos, loopExponent)
 *         hardWork(Math.acosh, loopExponent)
 *       })
 *       measure('Logarithms', () => {
 *         hardWork(Math.log, loopExponent)
 *         hardWork(Math.log10, loopExponent)
 *         hardWork(Math.log1p, loopExponent)
 *         hardWork(Math.log2, loopExponent)
 *       })
 *       measure('Rounding', () => {
 *         hardWork(Math.round, loopExponent)
 *         hardWork(Math.floor, loopExponent)
 *         hardWork(Math.ceil, loopExponent)
 *         hardWork(Math.fround, loopExponent)
 *       })
 *     })
 *
 *     animationFrameHandle = requestAnimationFrame(tick)
 *   }
 *
 *   tick()
 *
 *   return () => {
 *     cancelAnimationFrame(animationFrameHandle)
 *   }
 * })
 * </script>
 *
 * <Profiler bind:measure label="Profiler" />
 * <Slider
 * bind:value={loopExponent}
 * min={1}
 * max={5}
 * label="Loop Exponent (Careful)"
 * step={1}
 * />
 * ```
 *
 * @sourceLink
 * [Profiler.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/monitor/Profiler.svelte)
 */
export default class Profiler extends SvelteComponent<
	ProfilerProps,
	ProfilerEvents,
	ProfilerSlots
> {
	get measure(): ProfilerMeasure
	get measureAsync(): ProfilerMeasureAsync
}
export {}
