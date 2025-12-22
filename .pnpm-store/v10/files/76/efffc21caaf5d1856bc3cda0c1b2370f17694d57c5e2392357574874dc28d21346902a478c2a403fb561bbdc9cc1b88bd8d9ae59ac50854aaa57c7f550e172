import { SvelteComponent } from 'svelte'
export type FpsGraphChangeEvent = CustomEvent<number>
import type { FpsGraphBladeApi as FpsGraphRef } from '@kitschpatrol/tweakpane-plugin-essentials'
import type { FpsGraphBladeParams as FpsGraphOptions } from '@kitschpatrol/tweakpane-plugin-essentials/dist/types/fps-graph/plugin.js'
declare const __propDef: {
	props: {
		/**
		 * Function to start a single frame measurement sample.
		 *
		 * If undefined, a `requestAnimationFrame` is used to indicate the overall performance of
		 * the page.
		 * @default `undefined`
		 */
		begin?: () => void
		/**
		 * Function to end a single frame measurement sample.
		 *
		 * If undefined, a `requestAnimationFrame` is used to indicate the overall performance of
		 * the page.
		 * @default `undefined`
		 */
		end?: () => void
	} & ({
		/**
		 * Lower bound of the FPS graph.
		 * @default `0`
		 * */
		min?: number
		/**
		 * Upper bound of the FPS graph.
		 * @default `90`
		 * */
		max?: number
		/**
		 * Function to start a single frame measurement sample.
		 *
		 * If undefined, a `requestAnimationFrame` is used to indicate the overall performance of
		 * the page.
		 * @default `undefined`
		 * */
		begin?: () => void
		/**
		 * Function to end a single frame measurement sample.
		 *
		 * If undefined, a `requestAnimationFrame` is used to indicate the overall performance of
		 * the page.
		 * @default `undefined`
		 * */
		end?: () => void
		/**
		 * Time in milliseconds between updates to the graph.
		 * @default `1000`
		 * */
		interval?: number
		/**
		 * Text displayed next to the FPS graph.
		 * @default `undefined`
		 * */
		label?: string
		/**
		 * Height of the FPS graph, in rows.
		 * @default `2`
		 * */
		rows?: number
	} & Omit<
		{
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: FpsGraphOptions
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
			ref?: FpsGraphRef | undefined
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
			plugin?: import('../utils.js').Plugin | undefined
		},
		'ref' | 'options' | 'plugin'
	>)
	slots: {}
	events: {
		/**
		 * Fires when the FPS value changes, passing the latest FPS measurement.
		 *
		 * Note that the values described in the `FpsGraphChangeEvent` type are available on the
		 * `event.detail` parameter.
		 * @event
		 * */
		change: FpsGraphChangeEvent
	}
}
export type FpsGraphProps = typeof __propDef.props
export type FpsGraphEvents = typeof __propDef.events
export type FpsGraphSlots = typeof __propDef.slots
/**
 * A control for monitoring and graphing frame rates over time.
 *
 * Integrates the [FPS Graph](https://github.com/tweakpane/plugin-essentials#fps-graph) control from
 * Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me)  [Essentials
 * plugin](https://github.com/tweakpane/plugin-essentials).
 *
 * By default, the component creates an internal `requestAnimationFrame` loop to measure the overall
 * performance of the page. If you want to measure the performance of a specific block of code, you can
 * bind the `begin` and `end` props for access to functions to fence the code of interest. (The default
 * internal loop will be cleaned up automatically on the bound functions first use.)
 *
 * See the `<Profiler>` component for a more advanced measurement and visualization strategies.
 *
 * If you'd like to observe or visualize the frame rate data elsewhere, a `change` event is provided to
 * notify when the FPS value changes.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the FPS graph in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-essentials) of the plugin with build optimizations. The fork also changes the package name from `@tweakpane/plugin-essentials` to `@kitschpatrol/tweakpane-plugin-essentials` for consistency with other plugins.
 *
 * @emits {number} change - When the FPS value changes.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { onMount } from 'svelte'
 * import { FpsGraph, Monitor, Slider } from 'svelte-tweakpane-ui'
 *
 * let rotation = 0
 * let rotationSpeed = 3
 * let phase = 500
 * let scale = 1.25
 * let intensity = 4
 *
 * onMount(() => {
 *   let animationFrameHandle: number
 *
 *   function tick() {
 *     rotation += rotationSpeed
 *     animationFrameHandle = requestAnimationFrame(tick)
 *   }
 *
 *   tick()
 *
 *   return () => {
 *     cancelAnimationFrame(animationFrameHandle)
 *   }
 * })
 *
 * $: gridSize = intensity ** 2
 * </script>
 *
 * <FpsGraph interval={50} label="FPS" rows={5} />
 * <Slider
 * bind:value={intensity}
 * min={1}
 * max={10}
 * label="Intensity (Careful)"
 * step={1}
 * />
 * <Monitor
 * value={gridSize ** 2}
 * format={(v) => v.toFixed(0)}
 * label="Boxes (Monitor)"
 * />
 * <Slider bind:value={scale} min={0.25} max={2} label="Scale" />
 * <Slider bind:value={phase} min={0} max={2000} label="Phase" />
 * <Slider bind:value={rotationSpeed} label="Rotation Speed" />
 *
 * <div class="demo">
 * {#each Array.from({ length: gridSize }, (_, index) => index) as x}
 *   {#each Array.from({ length: gridSize }, (_, index) => index) as y}
 *     <div
 *       class="box"
 *       style:left="{(x / gridSize) * 100}%"
 *       style:scale
 *       style:top="{(y / gridSize) * 100}%"
 *       style:transform="rotateZ({rotation +
 *         (x / gridSize) * phase +
 *         (y / gridSize) * phase}deg)"
 *       style:width="{100 / gridSize}%"
 *     ></div>
 *   {/each}
 * {/each}
 * </div>
 *
 * <style>
 * .demo {
 *   position: relative;
 *   overflow: hidden;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(to top, gold, rebeccapurple);
 * }
 *
 * .box {
 *   position: absolute;
 *   transform-origin: center;
 *   aspect-ratio: 1;
 *   opacity: 0.5;
 *   background: linear-gradient(to bottom, orange, magenta);
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [FpsGraph.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/monitor/FpsGraph.svelte)
 */
export default class FpsGraph extends SvelteComponent<
	FpsGraphProps,
	FpsGraphEvents,
	FpsGraphSlots
> {
	get begin(): (() => void) & (() => void)
	get end(): (() => void) & (() => void)
}
export {}
