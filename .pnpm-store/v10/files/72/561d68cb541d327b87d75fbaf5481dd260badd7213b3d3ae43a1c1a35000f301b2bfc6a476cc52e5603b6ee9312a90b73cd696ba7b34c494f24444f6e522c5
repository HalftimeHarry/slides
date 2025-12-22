import { SvelteComponent } from 'svelte'
export type PanePosition = 'draggable' | 'fixed' | 'inline'
declare const __propDef: {
	props: {
		/**
		 * Pane mode, one of three options:
		 * - **'draggable'** *(default)*  \
		 *   The pane is draggable and resizable, and may be placed anywhere over the page.
		 * - **'inline'**  \
		 *   The pane appears inline with other content in the normal flow of the document.  \
		 *   This is the default mode for components created outside of an explicit `<Pane>`
		 *   component.*
		 * - **'fixed'** \
		 *   Standard Tweakpane behavior where the pane is shown in a fixed position over the page.
		 *
		 *   Note that `<Pane>` is a dynamic component, and availability of additional props will
		 *   vary depending on the defined `position` value.
		 * @default `'draggable'`
		 * */
		position?: PanePosition
	} & (
		| ({
				/**
				 * Pane mode, one of three options:
				 * - **'draggable'** *(default)*  \
				 *   The pane is draggable and resizable, and may be placed anywhere over the page.
				 * - **'inline'**  \
				 *   The pane appears inline with other content in the normal flow of the document.  \
				 *   This is the default mode for components created outside of an explicit `<Pane>`
				 *   component.*
				 * - **'fixed'** \
				 *   Standard Tweakpane behavior where the pane is shown in a fixed position over the page.
				 *
				 *   Note that `<Pane>` is a dynamic component, and availability of additional props will
				 *   vary depending on the defined `position` value.
				 * @default `'draggable'`
				 */
				position: 'fixed'
		  } & {
				/**
				 * Horizontal position of the pane relative to the left edge of the window, in pixels.
				 *
				 * Not to be confused with the `position` prop which defines _how_, not _where_, the pane is
				 * positioned on the page. (So-named because of its similarity to CSS `position` property.)
				 *
				 * By default, this position is saved to local storage for persistence across page loads.
				 * @default `0`
				 * @bindable
				 */
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
				 */
				y?: number
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
				 */
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
				>)
		| ({
				/**
				 * Pane mode, one of three options:
				 * - **'draggable'** *(default)*  \
				 *   The pane is draggable and resizable, and may be placed anywhere over the page.
				 * - **'inline'**  \
				 *   The pane appears inline with other content in the normal flow of the document.  \
				 *   This is the default mode for components created outside of an explicit `<Pane>`
				 *   component.*
				 * - **'fixed'** \
				 *   Standard Tweakpane behavior where the pane is shown in a fixed position over the page.
				 *
				 *   Note that `<Pane>` is a dynamic component, and availability of additional props will
				 *   vary depending on the defined `position` value.
				 * @default `'draggable'`
				 */
				position: 'inline'
		  } & Omit<
				{
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
					 */
					width?: number
				} & {
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
		  >)
		| ({
				/**
				 * Pane mode, one of three options:
				 * - **'draggable'** *(default)*  \
				 *   The pane is draggable and resizable, and may be placed anywhere over the page.
				 * - **'inline'**  \
				 *   The pane appears inline with other content in the normal flow of the document.  \
				 *   This is the default mode for components created outside of an explicit `<Pane>`
				 *   component.*
				 * - **'fixed'** \
				 *   Standard Tweakpane behavior where the pane is shown in a fixed position over the page.
				 *
				 *   Note that `<Pane>` is a dynamic component, and availability of additional props will
				 *   vary depending on the defined `position` value.
				 * @default `'draggable'`
				 */
				position?: 'draggable' | undefined
		  } & {
				/**
				 * Horizontal position of the pane relative to the left edge of the window, in pixels.
				 *
				 * Not to be confused with the `position` prop which defines _how_, not _where_, the pane is
				 * positioned on the page. (So-named because of its similarity to CSS `position` property.)
				 *
				 * By default, this position is saved to local storage for persistence across page loads.
				 * @default `0`
				 * @bindable
				 */
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
				 */
				y?: number
				/**
				 * Minimum pane width in pixels.
				 * @default `200`
				 */
				minWidth?: number
				/**
				 * Maximum pane width in pixels.
				 * @default `600`
				 */
				maxWidth?: number
				/**
				 * Automatically collapse open panels when the available window size is less than the height
				 * of the pane.
				 *
				 * @default `false`
				 */
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
				 */
				resizable?: boolean
				/**
				 * Store the pane's position and width when the user changes it interactively.
				 *
				 * Set the `localStoreId` prop if you have multiple draggable panes on the same page with
				 * `storePositionLocally` set to `true`.
				 * @default `true`
				 */
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
				 */
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
				>)
	)
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
export type PaneProps = typeof __propDef.props
export type PaneEvents = typeof __propDef.events
export type PaneSlots = typeof __propDef.slots
/**
 * The root `<Pane>` component, used for organizing controls into a single group and controlling how
 * and where the Tweakpane is displayed.
 *
 * This component is a wrapper around Tweakpane's
 * [`Pane`](https://tweakpane.github.io/docs/api/classes/Pane.html) class.
 *
 * Important: Unlike the vanilla JS Tweakpane API, wrapping components in a `<Pane>` is not mandatory.
 *
 * Pane-less components will be automatically nested in a `<Pane position="inline">` component and
 * displayed in the regular block flow of the page. `<Pane>` is only necessary when you want to
 * explicitly group a number of components, or when you want convenient means to control how and where
 * the Tweakpane is shown on the page. (See an [important
 * exception](https://kitschpatrol.com/svelte-tweakpane-ui/docs#island-framework-compatibility)
 * regarding _Svelte Tweakpane UI_ in island frameworks like Astro.)
 *
 *
 * Multiple `<Pane>` components of different modes may be added to a single page. If the panes are in
 * `fixed` or `draggable` mode, you might want to set the `x` or `y` properties to prevent overlap.
 *
 * Note that `<Pane>` is a dynamic component, and availability of additional props will vary depending
 * on the defined `position` value.
 *
 * Position mode overview:
 *
 * - **`<Pane position="draggable" ...>`**  \
 *   This is an extension of Tweakpane's core functionality, which reasonably considers pane dragging
 * outside of the library's scope. See discussion in Tweakpane issues
 * [#88](https://github.com/cocopon/tweakpane/issues/88) and
 * [#301](https://github.com/cocopon/tweakpane/issues/301).
 *     \
 * By default, the pane's last position and width will be saved to the browser's local storage and
 * re-applied across page reloads. (Set the `storePositionLocally` prop to false to prevent this.)
 *     \
 * If multiple `<Pane position="draggable" ...>` components are used on the same page with
 * `storePositionLocally` set to true, then each must have a unique `localStoreId` prop set to avoid
 * collisions.
 *     \
 * Double-clicking the width drag handle will expand or contract the pane between to its `minWidth`
 * and `maxWidth` sizes.
 *
 * - **`<Pane position="inline" ...>`**  \
 *   Provides an inline version of the pane component, allowing the Tweakpane window to appear in the
 * normal flow of the document.
 *     \
 * All other _Svelte Tweakpane UI_ components which are created without a containing `<Pane>` are
 * nested implicitly inside a title-less `<Pane position="inline">` component. As such, you do not
 * necessarily need create `<Pane position="inline">` components in most cases.
 *     \
 * This mode's behavior is similar to creating a Pane in the vanilla JS Tweakpane with its
 * [`container`](https://tweakpane.github.io/docs/misc/#containerElement) property set to a specific
 * element where you want the Pane to appear.
 *
 * - **`<Pane position="fixed" ...>`**  \
 *   This mode uses the standard vanilla JS Tweakpane behavior of displaying in a fixed position over
 * the top-right of the page.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Pane, type PanePosition, RadioGrid } from 'svelte-tweakpane-ui'
 *
 * const options: PanePosition[] = ['inline', 'fixed', 'draggable']
 * let position: PanePosition = options[0]
 * </script>
 *
 * <Pane {position} title="Pane" y={position === 'inline' ? undefined : 110}>
 * <RadioGrid
 *   bind:value={position}
 *   columns={1}
 *   label="Pane Position Prop"
 *   values={options}
 * />
 * </Pane>
 * {#if position === 'fixed'}
 * <p>Pane is fixed at the top-right of the page.</p>
 * {:else if position === 'draggable'}
 * <p>Pane is draggable at the top-right of the page.</p>
 * {/if}
 *
 * <style>
 * p {
 *   display: grid;
 *   place-content: center;
 *   width: 100%;
 *   height: 96px;
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [Pane.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/Pane.svelte)
 */
export default class Pane extends SvelteComponent<PaneProps, PaneEvents, PaneSlots> {}
export {}
