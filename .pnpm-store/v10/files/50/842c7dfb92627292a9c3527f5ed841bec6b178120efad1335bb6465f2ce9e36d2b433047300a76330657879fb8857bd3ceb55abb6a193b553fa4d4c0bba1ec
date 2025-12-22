import { SvelteComponent } from 'svelte'
import { type Theme } from '../theme.js'
import { Pane as TpPane } from 'tweakpane'
declare const __propDef: {
	props: {
		/**
		 * Text in the pane's title bar.
		 * @default `Tweakpane`  \
		 * Unless `position="inline"`, in which case the default is `undefined` and no title bar is
		 * shown.
		 * */ title?: string | undefined
		/**
		 * Allow users to interactively expand / contract the pane by clicking its title bar.
		 *
		 * Hides the collapse button from the title bar when `false`.
		 * @default `true`
		 * */ userExpandable?: boolean
		/**
		 * Expand or collapse the pane into its title bar.
		 * @default `true`
		 * @bindable
		 * */ expanded?: boolean
		/**
		 * Custom color scheme.
		 *
		 * Applies to all child components, but note that setting a different `theme` on a child
		 * component's prop will **not** override the parent pane's theme.
		 *
		 * Note that `<Pane position="inline' ...>` squares off rounded corners by default to better
		 * integrate with surrounding content.
		 *
		 * Simply pass a custom or default theme like `ThemeUtils.presets.standard` if you want rounded
		 * corners on an `inline` pane.
		 *
		 * See also the `setGlobalDefaultTheme()` for a way to set a custom default theme for all panes
		 * on the page.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.
		 * */ theme?: Theme | undefined
		/**
		 * Scales the pane's elements by a factor of `scale` to make it easier to see.
		 *
		 * Holds the width of the pane constant, so the pane will grow taller as it is scaled and will
		 * continue to respect position- and size-related props. If you need more breathing room, set
		 * the `width` property on the pane.
		 *
		 * Note that the scaling prop is only available on `<Pane>`, not on stand-alone (implicitly
		 * wrapped) inline elements.
		 *
		 * Negative values are ignored.
		 * @default `1`
		 */ scale?: number
		/** Internal use only. */ userCreatedPane?: boolean
		/**
		 * The internal Tweakpane [`Pane`](https://tweakpane.github.io/docs/api/classes/Pane.html) object.
		 *
		 * This property is exposed for advanced use cases only.
		 *
		 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
		 *
		 * Note that the `Pane` type for this property comes from the core Tweakpane library.
		 * Creating an alias is suggested to avoid confusion with the _Svelte Tweakpane UI_ `Pane`
		 * component: e.g. `import { type Pane as TpPane } from 'tweakpane'`
		 *
		 * @bindable
		 * @readonly
		 * */ tpPane?: TpPane | undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		/**
		 * Any Tweakpane component, except another `<Pane>`.
		 */
		default: {}
	}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type GenericPaneProps = typeof __propDef.props
export type GenericPaneEvents = typeof __propDef.events
export type GenericPaneSlots = typeof __propDef.slots
/**
 * This component is for internal use only.
 *
 * @sourceLink
 * [GenericPane.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/GenericPane.svelte)
 */
export default class GenericPane extends SvelteComponent<
	GenericPaneProps,
	GenericPaneEvents,
	GenericPaneSlots
> {}
export {}
