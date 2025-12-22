import { SvelteComponent } from 'svelte'
import type { Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * Text in the tab.
		 * @default `'Tab Page'`
		 * */ title?: string
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Sets the page is the active tab.
		 *
		 * When bound it will indicate whether the tab is active.
		 * @default `false`
		 * @bindable
		 * */ selected?: boolean
		/**
		 * Custom color scheme.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.)
		 * */ theme?: Theme | undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		/**
		 * Any Tweakpane component, except a `<Pane>`.
		 */
		default: {}
	}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type TabPageProps = typeof __propDef.props
export type TabPageEvents = typeof __propDef.events
export type TabPageSlots = typeof __propDef.slots
/**
 * Contains a collection of Tweakpane controls to be presented as a single group inside a `<TabGroup>`
 * component.
 *
 * Provides `page` values to Tweakpane's
 * [`addTab`](https://tweakpane.github.io/docs/ui-components/#tab) method.
 *
 * The name of this concept within the underlying vanilla JS Tweakpane API is `page`, but it has been
 * changed to `TabPage` in _Svelte Tweakpane UI_ for clarity its relationship to the `<TabGroup>`
 * component.
 *
 * Usage outside of a `<TabGroup>` component wouldn't make much sense, but in such cases the
 * `<TabPage>` will be implicitly wrapped in a `<TabGroup>` and `<Pane position="inline">`.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, TabGroup, TabPage } from 'svelte-tweakpane-ui'
 *
 * let countA = 0
 * let countB = 0
 * </script>
 *
 * <TabGroup>
 * <TabPage title="A">
 *   <Button on:click={() => countA++} title="Button A" />
 * </TabPage>
 * <TabPage title="B">
 *   <Button on:click={() => countB++} title="Button B" />
 * </TabPage>
 * </TabGroup>
 *
 * <pre>
 * Count A: {countA}
 * Count B: {countB}
 * </pre>
 * ```
 *
 * @sourceLink
 * [TabPage.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/TabPage.svelte)
 */
export default class TabPage extends SvelteComponent<TabPageProps, TabPageEvents, TabPageSlots> {}
export {}
