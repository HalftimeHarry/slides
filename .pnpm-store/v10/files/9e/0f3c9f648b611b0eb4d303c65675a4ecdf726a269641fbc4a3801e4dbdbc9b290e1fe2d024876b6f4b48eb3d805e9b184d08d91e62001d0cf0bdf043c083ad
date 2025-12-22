import { SvelteComponent } from 'svelte'
declare const __propDef: {
	props: {
		/**
		 * Horizontal position of the pane relative to the left edge of the window, in pixels.
		 *
		 * Not to be confused with the `position` prop which defines _how_, not _where_, the pane is
		 * positioned on the page. (So-named because of its similarity to CSS `position` property.)
		 *
		 * By default, this position is saved to local storage for persistence across page loads.
		 * @default `0`
		 * @bindable
		 * */
		x?: number
		/**
		 * Vertical position of the pane relative to the top of the window, in pixels.
		 *
		 * Not to be confused with the `position` prop which defines _how_, not _where_, the pane is
		 * positioned on the page. (So-named because of its similarity to CSS `position` property.)
		 *
		 * By default, this position is saved to local storage for persistence across page loads.
		 * @default `0`
		 * @bindable
		 * */
		y?: number
		/**
		 * Minimum pane width in pixels.
		 * @default `200`
		 * */
		minWidth?: number
		/**
		 * Maximum pane width in pixels.
		 * @default `600`
		 * */
		maxWidth?: number
		/**
		 * Automatically collapse open panels when the available window size is less than the height
		 * of the pane.
		 *
		 * @default `false`
		 * */
		collapseChildrenToFit?: boolean
		/**
		 * Identifier to be used if multiple `<Pane position="draggable">` components with
		 * `storePositionLocally` set to true are used on the same page.
		 * @default `'1'`
		 */
		localStoreId?: string
		/**
		 * CSS [padding property string](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
		 * to apply to the draggable pane container to prevent it from being dragged all the way to
		 * the edge of the window.
		 *
		 * Useful for keeping the pane away from of menu bars, etc.
		 * @default `'0'`
		 */
		padding?: string
		/**
		 * Allow the user to resize the width of the pane by dragging the right corner of the title
		 * bar.
		 * @default `true`
		 * */
		resizable?: boolean
		/**
		 * Store the pane's position and width when the user changes it interactively.
		 *
		 * Set the `localStoreId` prop if you have multiple draggable panes on the same page with
		 * `storePositionLocally` set to `true`.
		 * @default `true`
		 * */
		storePositionLocally?: boolean
		/**
		 * Width of the pane, in pixels.
		 *
		 * Setting explicitly via a passed prop will override saved user-specified width.
		 *
		 * Use this prop to set a starting width, or to monitor changes in the the pane's width when
		 * a user resizes it.
		 *
		 * Note that height is not exposed because it is determined dynamically by the pane's
		 * contents and state of its foldable elements.
		 *
		 * By default, the width value is saved to local storage for persistence across page loads.
		 * @default `256`
		 * @bindable
		 * */
		width?: number
	} & Omit<
		{
			/**
			 * Text in the pane's title bar.
			 * @default `Tweakpane`  \
			 * Unless `position="inline"`, in which case the default is `undefined` and no title bar is
			 * shown.
			 */
			title?: string | undefined
			/**
			 * Allow users to interactively expand / contract the pane by clicking its title bar.
			 *
			 * Hides the collapse button from the title bar when `false`.
			 * @default `true`
			 */
			userExpandable?: boolean
			/**
			 * Expand or collapse the pane into its title bar.
			 * @default `true`
			 * @bindable
			 */
			expanded?: boolean
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
			 */
			theme?: import('..').Theme | undefined
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
			 */
			scale?: number
			/** Internal use only. */
			userCreatedPane?: boolean
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
			 */
			tpPane?: import('tweakpane').Pane | undefined
		},
		'userCreatedPane'
	>
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
export type InternalPaneDraggableProps = typeof __propDef.props
export type InternalPaneDraggableEvents = typeof __propDef.events
export type InternalPaneDraggableSlots = typeof __propDef.slots
/**
 * This component is for internal use only.
 *
 * @sourceLink
 * [InternalPaneDraggable.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/InternalPaneDraggable.svelte)
 */
export default class InternalPaneDraggable extends SvelteComponent<
	InternalPaneDraggableProps,
	InternalPaneDraggableEvents,
	InternalPaneDraggableSlots
> {}
export {}
