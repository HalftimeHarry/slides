import { SvelteComponent } from 'svelte'
import type { Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Active page index.
		 *
		 * Note that SSR will always render the first page height, regardless of the initial active
		 * index.
		 * @default `0`
		 * @bindable
		 * */ selectedIndex?: number
		/**
		 * Custom color scheme.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.
		 * */ theme?: Theme | undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		/**
		 * A `<TabPage>` component.
		 */
		default: {}
	}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type TabGroupProps = typeof __propDef.props
export type TabGroupEvents = typeof __propDef.events
export type TabGroupSlots = typeof __propDef.slots
/**
 * Contains a collection of `<TabPage>` components to be presented as a tabs.
 *
 * Wrapper around Tweakpane's [`addTab`](https://tweakpane.github.io/docs/ui-components/#tab) method.
 *
 * The name of this concept within the underlying vanilla JS Tweakpane API is `tab`, but it has been
 * changed to `TabGroup` in _Svelte Tweakpane UI_ to clarify it's relationship to the `<TabPage>`
 * component.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the tab in `<Pane position="inline">`.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, TabGroup, TabPage } from 'svelte-tweakpane-ui'
 * </script>
 *
 * <TabGroup>
 * <TabPage title="A">
 *   <Button on:click={() => alert('A...')} title="Button A" />
 * </TabPage>
 * <TabPage title="B">
 *   <Button on:click={() => alert('B...')} title="Button B" />
 * </TabPage>
 * </TabGroup>
 * ```
 *
 * @sourceLink
 * [TabGroup.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/TabGroup.svelte)
 */
export default class TabGroup extends SvelteComponent<
	TabGroupProps,
	TabGroupEvents,
	TabGroupSlots
> {}
export {}
