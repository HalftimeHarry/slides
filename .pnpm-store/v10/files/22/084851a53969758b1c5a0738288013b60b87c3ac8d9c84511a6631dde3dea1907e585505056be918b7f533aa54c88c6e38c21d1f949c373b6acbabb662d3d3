import { SvelteComponent } from 'svelte'
import type { BladeOptions, BladeRef } from '../core/Blade.svelte'
declare class __sveltets_Render<T extends BladeOptions, U extends BladeRef> {
	props(): {
		/**
		 * DOM class name of the button used to expand and collapse the blade's picker.
		 * @default `undefined`
		 * */
		buttonClass?: string
		/**
		 * Expand or collapse the blade's picker.
		 * @default `true`
		 * @bindable
		 * */
		expanded?: boolean
		/**
		 * The style of value "picker" to use in the blade.
		 * @default `'popup'`
		 */
		picker?: 'inline' | 'popup'
		/**
		 * Allow users to interactively expand / contract the value picker by clicking its icon.
		 *
		 * Most useful when `picker` is `inline`.
		 * @default `true`
		 * */
		userExpandable?: boolean
	} & {
		/**
		 * Blade configuration exposing Tweakpane's internal
		 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
		 *
		 */
		options: T
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
		ref?: U | undefined
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
	}
	events(): {} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type GenericBladeFoldingProps<T extends BladeOptions, U extends BladeRef> = ReturnType<
	__sveltets_Render<T, U>['props']
>
export type GenericBladeFoldingEvents<T extends BladeOptions, U extends BladeRef> = ReturnType<
	__sveltets_Render<T, U>['events']
>
export type GenericBladeFoldingSlots<T extends BladeOptions, U extends BladeRef> = ReturnType<
	__sveltets_Render<T, U>['slots']
>
/**
 * This component is for internal use only.
 *
 * @sourceLink
 * [GenericBladeFolding.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/GenericBladeFolding.svelte)
 */
export default class GenericBladeFolding<
	T extends BladeOptions,
	U extends BladeRef,
> extends SvelteComponent<
	GenericBladeFoldingProps<T, U>,
	GenericBladeFoldingEvents<T, U>,
	GenericBladeFoldingSlots<T, U>
> {}
export {}
