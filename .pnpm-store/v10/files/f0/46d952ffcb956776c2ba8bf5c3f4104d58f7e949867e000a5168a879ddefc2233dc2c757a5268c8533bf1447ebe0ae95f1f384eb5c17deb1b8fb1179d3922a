import { SvelteComponent } from 'svelte'
import type { BaseBladeParams, BladeApi } from 'tweakpane'
export type BladeRef = BladeApi
export type BladeOptions = BaseBladeParams
export type { Plugin } from '../utils.js'
import type { Theme } from '../theme.js'
import { type Plugin } from '../utils.js'
declare class __sveltets_Render<U extends BladeOptions, V extends BladeRef> {
	props(): {
		/**
		 * Blade configuration exposing Tweakpane's internal
		 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
		 *
		 * */ options: U
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Custom color scheme.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.
		 * */ theme?: Theme | undefined
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
		 * */ ref?: V | undefined
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
		 * */ plugin?: Plugin | undefined
	}
	events(): {} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type BladeProps<U extends BladeOptions, V extends BladeRef> = ReturnType<
	__sveltets_Render<U, V>['props']
>
export type BladeEvents<U extends BladeOptions, V extends BladeRef> = ReturnType<
	__sveltets_Render<U, V>['events']
>
export type BladeSlots<U extends BladeOptions, V extends BladeRef> = ReturnType<
	__sveltets_Render<U, V>['slots']
>
/**
 * Wraps the Tweakpane [`addBlade`](https://tweakpane.github.io/docs/blades/) method.
 *
 * Important: This component is provided for consistency with Tweakpane's API, but is not recommended
 * for general use in _Svelte Tweakpane UI_ because more helpful abstractions are available.
 *
 * Please consider convenience components like `<Separator>`, etc. before using this component
 * directly.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the component in `<Pane
 * position="inline">`.
 *
 * Tweakpane's vanilla JS API offers Blades as as a way to create unbound components, but in Svelte the
 * same is achieved by simply not binding the component's value.
 *
 * In the example, a `<Separator>` component would be preferred over `<Blade>`, and would  obviate the
 * need for the options param.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Blade } from 'svelte-tweakpane-ui'
 * </script>
 *
 * <Blade
 * options={{
 *   view: 'separator',
 * }}
 * />
 * ```
 *
 * @sourceLink
 * [Blade.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/Blade.svelte)
 */
export default class Blade<U extends BladeOptions, V extends BladeRef> extends SvelteComponent<
	BladeProps<U, V>,
	BladeEvents<U, V>,
	BladeSlots<U, V>
> {}
