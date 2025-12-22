import { SvelteComponent } from 'svelte'
import type { BaseInputParams, InputBindingApi } from '@tweakpane/core'
export type GenericInputOptions = BaseInputParams
export type GenericInputRef = InputBindingApi
declare class __sveltets_Render<
	T extends any,
	U extends GenericInputOptions = GenericInputOptions,
	V extends GenericInputRef = GenericInputRef,
> {
	props(): {
		/**
		 * The value to control.
		 * @bindable
		 */
		value: T
	} & Omit<
		{
			/**
			 * The binding's target object with values to manipulate.
			 * @bindable
			 */
			object: import('@tweakpane/core').Bindable & Record<string, T>
			/** The key for the value in the target `object` that the control should manipulate. */
			key: string
			/**
			 * Prevent interactivity and gray out the control.
			 * @default `false`
			 */
			disabled?: boolean
			/**
			 * Text displayed next to control.
			 * @default `undefined`
			 */
			label?: string | undefined
			/**
			 * Tweakpane's internal options object.
			 *
			 * See [`BindingParams`](https://tweakpane.github.io/docs/api/types/BindingParams.html).
			 *
			 * Valid types are contingent on the type of the value `key` points to in `object`.
			 *
			 * This is intended internal use, when implementing convenience components wrapping Binding's
			 * functionality. Options of interest are instead exposed as top-level props in _Svelte
			 * Tweakpane UI_.
			 * @default `undefined`
			 */
			options?: U | undefined
			/**
			 * Custom color scheme.
			 *
			 * @default `undefined`  \
			 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
			 * set with `setGlobalDefaultTheme()`.
			 */
			theme?: import('..').Theme | undefined
			/**
			 * Reference to internal Tweakpane
			 * [`BindingApi`](https://tweakpane.github.io/docs/api/classes/_internal_.BindingApi.html) for
			 * this control.
			 *
			 * This property is exposed for advanced use cases only, such as when implementing convenience
			 * components wrapping `<Binding>`'s functionality.
			 *
			 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
			 *
			 * @bindable
			 * @readonly
			 */
			ref?: V | undefined
			/**
			 * Imported Tweakpane `TpPluginBundle` (aliased as `Plugin`) module to automatically register in
			 * the `<Binding>`'s containing `<Pane>`.
			 *
			 * This property is exposed for advanced use cases only, such as when implementing convenience
			 * components wrapping `<Binding>`'s functionality in combination with a Tweakpane plugin.
			 *
			 * Direct manipulation of Tweakpane's internals can break _Svelte Tweakpane UI_ abstractions.
			 *
			 * @default `undefined`
			 */
			plugin?: import('..').Plugin | undefined
		},
		'object' | 'key'
	>
	events(): {
		change: import('..').BindingChangeEvent
	} & {
		[evt: string]: CustomEvent<any>
	}
	slots(): {}
}
export type GenericInputProps<
	T extends any,
	U extends GenericInputOptions = GenericInputOptions,
	V extends GenericInputRef = GenericInputRef,
> = ReturnType<__sveltets_Render<T, U, V>['props']>
export type GenericInputEvents<
	T extends any,
	U extends GenericInputOptions = GenericInputOptions,
	V extends GenericInputRef = GenericInputRef,
> = ReturnType<__sveltets_Render<T, U, V>['events']>
export type GenericInputSlots<
	T extends any,
	U extends GenericInputOptions = GenericInputOptions,
	V extends GenericInputRef = GenericInputRef,
> = ReturnType<__sveltets_Render<T, U, V>['slots']>
/**
 * This component is for internal use only.
 *
 * @sourceLink
 * [GenericInput.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/GenericInput.svelte)
 */
export default class GenericInput<
	T extends any,
	U extends GenericInputOptions = GenericInputOptions,
	V extends GenericInputRef = GenericInputRef,
> extends SvelteComponent<
	GenericInputProps<T, U, V>,
	GenericInputEvents<T, U, V>,
	GenericInputSlots<T, U, V>
> {}
export {}
