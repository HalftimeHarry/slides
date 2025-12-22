import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
export type ListOptionsArray<T> = T[]
export type ListOptionsObjectArray<T> = Array<{
	value: T
	text: string
}>
export type ListOptionsRecord<T> = Record<string, T>
export type ListOptions<T> = Simplify<
	ListOptionsArray<T> | ListOptionsObjectArray<T> | ListOptionsRecord<T>
>
export type ListChangeEvent = ValueChangeEvent<unknown>
import type { ListBladeApi, ListBladeParams } from 'tweakpane'
declare class __sveltets_Render<T extends any> {
	props(): {
		/**
		 * Value of the selected `options` item.
		 * @bindable
		 * */
		value: T
		/**
		 * Text displayed next to list.
		 * @default `undefined`
		 * */
		label?: string
		/**
		 * A collection of options to select from.
		 *
		 * The arbitrary array list type is a convenience addition to to the vanilla JS Tweakpane
		 * API.
		 * */
		options: ListOptions<T>
	} & Omit<
		{
			/**
			 * A collection of options to select from.
			 *
			 * The arbitrary array list type is a convenience addition to to the vanilla JS Tweakpane
			 * API.
			 */
			options: ListBladeParams<T>
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
			ref?: ListBladeApi<T> | undefined
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
		},
		'ref' | 'options' | 'plugin'
	>
	events(): {
		/**
		 * Fires when `value` changes.
		 *
		 * _This event is provided for advanced use cases. It's usually preferred to bind to the `value` prop instead._
		 *
		 * The `event.details` payload includes a copy of the value and an `origin` field to distinguish between user-interactive changes (`internal`)
		 * and changes resulting from programmatic manipulation of the `value` (`external`).
		 *
		 * @extends ValueChangeEvent
		 * @event
		 * */
		change: ListChangeEvent
	}
	slots(): {}
}
export type ListProps<T extends any> = ReturnType<__sveltets_Render<T>['props']>
export type ListEvents<T extends any> = ReturnType<__sveltets_Render<T>['events']>
export type ListSlots<T extends any> = ReturnType<__sveltets_Render<T>['slots']>
/**
 * An option list picker, similar to an HTML `<select>` element.
 *
 * Wraps Tweakpane's list blade. See Tweakpane's documentation for [list
 * blades](https://tweakpane.github.io/docs/blades/#list).
 *
 * _Svelte Tweakpane UI_ extends Tweakpane's underlying implementation to allow for arbitrary arrays of
 * values to be used as options. See the `ListOptions` type for details on how to provide specific
 * labels to options.
 *
 * Tweakpane's `addBlade` list variations is used instead of the `addBinding` method to allow for
 * additional value types. The `value` remains bindable via Svelte's reactivity.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the color picker in `<Pane
 * position="inline">`.
 *
 * @emits {ListChangeEvent} change - When `value` changes. (For advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { List, type ListOptions } from 'svelte-tweakpane-ui'
 *
 * const options: ListOptions<number> = {
 *   b: 2,
 *   a: 1,
 *   c: 3,
 * }
 * let selection: number = 1
 * </script>
 *
 * <List bind:value={selection} label="Alphanumerics" {options} />
 * <pre>Selected Option: {selection}</pre>
 * ```
 *
 * @sourceLink
 * [List.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/List.svelte)
 */
export default class List<T extends any> extends SvelteComponent<
	ListProps<T>,
	ListEvents<T>,
	ListSlots<T>
> {}
export {}
