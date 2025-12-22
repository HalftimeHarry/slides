import { SvelteComponent } from 'svelte'
import type {
	SeparatorBladeApi as SeparatorBladeRef,
	SeparatorBladeParams as SeparatorOptions,
} from 'tweakpane'
declare const __propDef: {
	props: Omit<
		{
			/**
			 * Blade configuration exposing Tweakpane's internal
			 * [`BladeParams`](https://tweakpane.github.io/docs/api/interfaces/BaseBladeParams.html).
			 *
			 */
			options: SeparatorOptions
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
			ref?: SeparatorBladeRef | undefined
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
			plugin?: import('./Blade.svelte').Plugin | undefined
		},
		'ref' | 'options' | 'plugin'
	>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type SeparatorProps = typeof __propDef.props
export type SeparatorEvents = typeof __propDef.events
export type SeparatorSlots = typeof __propDef.slots
/**
 * A convenience component providing a subtle visual separator between controls, in the spirit of the
 * HTML `<hr>` element.
 *
 * Wraps Tweakpane's [separator blade](https://tweakpane.github.io/docs/blades/#separator).
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the separator in `<Pane
 * position="inline">`.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, Separator } from 'svelte-tweakpane-ui'
 * </script>
 *
 * <Button title="Oil" />
 * <Separator />
 * <Button title="Water" />
 * ```
 *
 * @sourceLink
 * [Separator.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/Separator.svelte)
 */
export default class Separator extends SvelteComponent<
	SeparatorProps,
	SeparatorEvents,
	SeparatorSlots
> {}
export {}
