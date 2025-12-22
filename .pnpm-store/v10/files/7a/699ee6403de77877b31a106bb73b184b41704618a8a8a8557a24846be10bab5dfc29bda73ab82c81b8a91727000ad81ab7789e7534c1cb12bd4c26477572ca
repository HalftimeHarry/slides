import { SvelteComponent } from 'svelte'
import type { BladeRef } from '../core/Blade.svelte'
declare const __propDef: {
	props: {
		/**
		 * Maximum height of the element block, in pixels. By default, the element
		 * block will expand vertically to fit its contents, but clip any horizontal
		 * excess.
		 *
		 * If a max height is set, it is used as the component height during SSR. If
		 * the actual element content is less than the max, you will see CLS. If it
		 * is not set, the contents are rendered... but keep in mind that style and
		 * other contextual changes during the client render could result in CLS.
		 * @default `undefined`  \
		 * No max height.
		 */
		maxHeight?: number
		/**
		 * Whether to reset the CSS of the element block to its default values.
		 * Avoids inheritance of Tweakpane's CSS styles. Note that this uses a
		 * simple `all: initial;` rule.
		 * @default `true`
		 */
		resetStyle?: boolean
	} & Omit<
		{
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: import('tweakpane').BaseBladeParams
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
			ref?: BladeRef | undefined
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
			plugin?: import('../core/Blade.svelte').Plugin | undefined
		},
		'ref' | 'disabled' | 'options' | 'plugin'
	>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		/**
		 * Any HTML Element.
		 */
		default: {}
	}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type ElementProps = typeof __propDef.props
export type ElementEvents = typeof __propDef.events
export type ElementSlots = typeof __propDef.slots
/**
 * A component for embedding arbitrary HTML elements into a pane.
 *
 * Any children wrapped in this component will be rendered into the pane. Any
 * content larger than the pane in the horizontal axis will be clipped.
 *
 * Useful for quickly prototyping UIs, or adding content to a pane that's not
 * easily represented by the built-in components.
 *
 * This component does not have a direct analog in the vanilla Tweakpane universe.
 *
 * Think of `<Element>` as an escape hatch for getting something into the pane that
 * you couldn't otherwise. Generally, it's recommended to abstract new
 * functionality for reuse by extending one of the internal component types in
 * Svelte Tweakpane UI, or better yet by creating a new [Tweakpane
 * Plugin](https://github.com/tweakpane/plugin-template) — but sometimes you just
 * need to get something into the pane quickly.
 *
 * In many cases, this component should not be necessary because _Svelte Tweakpane
 * UI_ already makes it easy to combine tweakpane components with other inline
 * elements simply by using stand-alone components or a `<Pane position="inline">`
 * component. `<Element>` should generally be the most useful when you're using
 * `<Pane position="draggable">` or `<Pane position="fixed">` and you want a custom
 * element embedded in the pane.
 *
 * Usage outside of a `<Pane>` component doesn't make a ton of sense, but in such a
 * case the `<Element>` will be implicitly wrapped in `<Pane position="inline">`.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, Element, Pane, Wheel } from 'svelte-tweakpane-ui'
 *
 * let gradientAngle = 45
 * let textAngle = 0
 * </script>
 *
 * <Pane position="inline" title="Element Demo">
 * <Wheel
 *   bind:value={gradientAngle}
 *   format={(v) => `${(Math.abs(v) % 360).toFixed(0)}°`}
 *   label="Gradient Angle"
 *   pointerScale={-5}
 * />
 * <Wheel
 *   bind:value={textAngle}
 *   format={(v) => `${(Math.abs(v) % 360).toFixed(0)}°`}
 *   label="Text Angle"
 *   pointerScale={-2}
 * />
 * <Element>
 *   <div class="demo" style:--a="{gradientAngle}deg">
 *     <p style:rotate="{textAngle}deg">
 *       <code>&lt;Pane&gt;</code><br />
 *       <code>&lt;Element&gt;</code><br />
 *       Whatever you want.<br />
 *       <code>&lt;/Element&gt;</code><br />
 *       <code>&lt;/Pane&gt;</code>
 *     </p>
 *   </div>
 * </Element>
 * <Button
 *   on:click={() => {
 *     gradientAngle = 45
 *     textAngle = 0
 *   }}
 *   disabled={gradientAngle === 45 && textAngle === 0}
 *   title="Reset"
 * />
 * </Pane>
 *
 * <style>
 * .demo {
 *   display: grid;
 *   place-content: center;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(var(--a), orange, magenta);
 * }
 *
 * .demo > p {
 *   font-family: sans-serif;
 *   font-size: 1rem;
 *   color: white;
 *   text-align: center;
 * }
 *
 * .demo > p > code {
 *   color: white;
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [Element.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/extra/Element.svelte)
 */
export default class Element extends SvelteComponent<ElementProps, ElementEvents, ElementSlots> {}
export {}
