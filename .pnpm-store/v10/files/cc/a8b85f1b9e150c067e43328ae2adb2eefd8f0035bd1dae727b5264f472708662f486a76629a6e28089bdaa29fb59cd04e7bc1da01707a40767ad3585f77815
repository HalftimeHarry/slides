import { SvelteComponent } from 'svelte'
export type ButtonGridClickEvent = CustomEvent<{
	cell: {
		x: number
		y: number
	}
	index: number
	label: string
}>
import type { ButtonGridApi as ButtonGridRef } from '@kitschpatrol/tweakpane-plugin-essentials'
import type { ButtonGridBladeParams as ButtonGridOptions } from '@kitschpatrol/tweakpane-plugin-essentials/dist/types/button-grid/plugin.d.ts'
declare const __propDef: {
	props: {
		/**
		 * Array of names, each of which will become the title of a button in the grid.
		 * */
		buttons: string[]
		/**
		 * Number of columns to arrange the buttons into.
		 *
		 * Setting `columns` without setting `rows` will lock the column count and allow the row
		 * count to change dynamically based on the number of buttons.
		 * @default `undefined`  \
		 * Dynamic based on quantity of `buttons`.
		 * */
		columns?: number
		/**
		 * Text displayed next to the button grid.
		 * @default `undefined`
		 */
		label?: string
		/**
		 * Number of rows to arrange the buttons into.
		 *
		 * Setting `rows` without setting `columns` will lock the column count and allow the column
		 * count to change dynamically based on the number of buttons.
		 * @default `undefined`  \
		 * Dynamic based on quantity of `buttons`.
		 * */
		rows?: number
	} & Omit<
		{
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: ButtonGridOptions
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
			ref?: ButtonGridRef | undefined
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
	>
	slots: {}
	events: {
		/**
		 * Fires when a button is clicked.
		 *
		 * Note that the values described in the `ButtonGridClickEvent` type are available on the
		 * `event.detail` parameter.
		 * @event
		 * */
		click: ButtonGridClickEvent
	}
}
export type ButtonGridProps = typeof __propDef.props
export type ButtonGridEvents = typeof __propDef.events
export type ButtonGridSlots = typeof __propDef.slots
/**
 * A grid of `<Button>` components.
 *
 * Integrates the [Button Grid](https://github.com/tweakpane/plugin-essentials#button-grid) control
 * from Tweakpane-creator [Hiroki Kokubun's](https://cocopon.me)  [Essentials
 * plugin](https://github.com/tweakpane/plugin-essentials).
 *
 * See `<RadioGrid>` for a radio-flavored variation.
 *
 * _Svelte Tweakpane UI_ also includes some additional logic to manage default grid dimensions:
 *
 *   - If no `rows` or `columns` props are provided, it will create a grid with the squarest possible aspect ratio for the given quantity of `values`.
 *
 *   - If a single `rows` or `columns` prop is provided, it lets the undefined axis grow / shrink as needed to accommodate the quantity of `values`.
 *
 *   - If both `rows` _and_ `columns` props area provided, then buttons may be clipped if `rows * columns < values.length`.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the button grid in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-essentials) of the plugin with build optimizations. The fork also changes the package name from `@tweakpane/plugin-essentials` to `@kitschpatrol/tweakpane-plugin-essentials` for consistency with other plugins.
 *
 * @emits {ButtonGridClickEvent} click - When a button in the grid is clicked.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import {
 *   Button,
 *   ButtonGrid,
 *   type ButtonGridClickEvent,
 *   Pane,
 * } from 'svelte-tweakpane-ui'
 *
 * const keyboard = [
 *   ...Array.from(
 *     {
 *       length: 26,
 *     },
 *     (_, index) => String.fromCodePoint(65 + index),
 *   ),
 *   ',',
 *   '.',
 *   '!',
 *   '⌫',
 * ]
 *
 * let textBuffer = ''
 *
 * function handleClick(event: ButtonGridClickEvent) {
 *   textBuffer =
 *     event.detail.label === '⌫'
 *       ? textBuffer.slice(0, -1)
 *       : textBuffer + event.detail.label
 * }
 * </script>
 *
 * <Pane position="inline" title="Austerity Keyboard">
 * <ButtonGrid on:click={handleClick} buttons={keyboard} />
 * <Button on:click={() => (textBuffer += '\u2002')} title=" " />
 * </Pane>
 *
 * <div class="demo">
 * <p>
 *   {textBuffer}
 * </p>
 * </div>
 *
 * <style>
 * .demo {
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(45deg, orange, magenta);
 * }
 *
 * .demo > p {
 *   margin: 0;
 *   padding: 0.5rem;
 *   font-family: monospace;
 *   font-size: 2rem;
 *   line-height: 1.2;
 *   color: white;
 *   word-break: break-all;
 *   white-space: pre-wrap;
 * }
 *
 * .demo > p::after {
 *   content: '_';
 *   opacity: 0.5;
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [ButtonGrid.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/ButtonGrid.svelte)
 */
export default class ButtonGrid extends SvelteComponent<
	ButtonGridProps,
	ButtonGridEvents,
	ButtonGridSlots
> {}
export {}
