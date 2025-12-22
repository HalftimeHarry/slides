import { SvelteComponent } from 'svelte'
export type ButtonClickEvent = CustomEvent<null>
import type { Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * Text inside of the button.
		 * @default `'Button'`
		 * */ title?: string
		/**
		 * Text displayed next to the button.
		 * @default `undefined`
		 * */ label?: string | undefined
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Custom color scheme.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to
		 * `ThemeUtils.presets.standard`, or the theme set with
		 * `setGlobalDefaultTheme()`.)
		 * */ theme?: Theme | undefined
	}
	slots: {}
	events: {
		/**
		 * Fires when the button is clicked.
		 * @event
		 * */
		click: ButtonClickEvent
	}
}
export type ButtonProps = typeof __propDef.props
export type ButtonEvents = typeof __propDef.events
export type ButtonSlots = typeof __propDef.slots
/**
 * A humble but effective push button.
 *
 * Wraps the Tweakpane [`addButton`](https://tweakpane.github.io/docs/ui-components/#button) method.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the button in `<Pane position="inline">`.
 *
 * See the `<ButtonGrid>` and `<RadioGrid>` components for a convenient way to lay out multiple
 * buttons.
 *
 * @emits {void} click - When the button is clicked.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button } from 'svelte-tweakpane-ui'
 *
 * let count = 0
 * </script>
 *
 * <Button on:click={() => count++} label="Count" title="Increment" />
 * <pre>Count: {count}</pre>
 * ```
 *
 * @sourceLink
 * [Button.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Button.svelte)
 */
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {}
export {}
