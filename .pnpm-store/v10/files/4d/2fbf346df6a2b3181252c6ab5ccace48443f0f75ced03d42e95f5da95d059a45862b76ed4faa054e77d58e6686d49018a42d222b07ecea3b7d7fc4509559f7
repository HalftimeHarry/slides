import { SvelteComponent } from 'svelte'
import type { Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * Text in folder title bar.
		 *
		 * Unlike a `<Pane>`, a `<Folder>`'s title bar is always visible and the title is always shown.
		 * It can be set to an empty string if you want an unadorned title bar.
		 * @default `'Folder'`
		 * */ title?: string
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Expand or collapse folder.
		 *
		 * When bound it will indicate whether the folder is expanded or collapsed.
		 * @default `true`
		 * @bindable
		 * */ expanded?: boolean
		/**
		 * Allow the user to be collapse and expand the folder by clicking its title bar.
		 * @default `true`
		 * */ userExpandable?: boolean
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
		 * Any Tweakpane component, except a `<Pane>`.
		 */
		default: {}
	}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type FolderProps = typeof __propDef.props
export type FolderEvents = typeof __propDef.events
export type FolderSlots = typeof __propDef.slots
/**
 * Organize multiple controls into a collapsable folder.
 *
 * Wraps the Tweakpane [`addFolder`](https://tweakpane.github.io/docs/ui-components/#folder) method.
 *
 * May also be used to label and group multiple controls without user-collapsibility by setting
 * `userExpandable` to `false` and `expanded` to true.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the folder in `<Pane position="inline">`.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, Checkbox, Folder, Monitor } from 'svelte-tweakpane-ui'
 *
 * let expanded = true
 * let count = 0
 * </script>
 *
 * <Folder bind:expanded title="Reticulation Management Folder">
 * <Button on:click={() => count++} title="Increment" />
 * <Monitor value={count} label="Count" />
 * </Folder>
 *
 * <Checkbox bind:value={expanded} label="Expanded" />
 * ```
 *
 * @sourceLink
 * [Folder.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/Folder.svelte)
 */
export default class Folder extends SvelteComponent<FolderProps, FolderEvents, FolderSlots> {}
export {}
