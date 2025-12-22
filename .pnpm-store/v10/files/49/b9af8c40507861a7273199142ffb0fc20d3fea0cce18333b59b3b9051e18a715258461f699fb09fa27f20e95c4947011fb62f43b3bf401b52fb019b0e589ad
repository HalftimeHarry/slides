import { SvelteComponent } from 'svelte'
import type { BindingObject } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type { BindingApi, BindingParams } from '@tweakpane/core'
export type BindingOptions = BindingParams
export type BindingRef = BindingApi
export type BindingChangeEvent = ValueChangeEvent<BindingObject>
import type { Theme } from '../theme.js'
import { type Plugin } from '../utils.js'
declare class __sveltets_Render<
	T extends BindingObject,
	U extends BindingOptions,
	V extends BindingRef,
> {
	props(): {
		/**
		 * The binding's target object with values to manipulate.
		 * @bindable
		 * */ object: T
		/** The key for the value in the target `object` that the control should manipulate. */ key: keyof T
		/**
		 * Prevent interactivity and gray out the control.
		 * @default `false`
		 * */ disabled?: boolean
		/**
		 * Text displayed next to control.
		 * @default `undefined`
		 * */ label?: string | undefined
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
		 * */ options?: U | undefined
		/**
		 * Custom color scheme.
		 *
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.
		 * */ theme?: Theme | undefined
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
		 * */ ref?: V | undefined
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
		 * */ plugin?: Plugin | undefined
	}
	events(): {
		/**
		 * Fires when the value of `object[key]` changes.
		 *
		 * _This event is provided for advanced use cases. It's usually preferred to bind to the `object` prop instead._
		 *
		 * The `event.details` payload includes a copy of the value and an `origin` field to distinguish between user-interactive changes (`internal`)
		 * and changes resulting from programmatic manipulation of the `object` (`external`).
		 *
		 * @extends ValueChangeEvent
		 * @event
		 * */
		change: BindingChangeEvent
	}
	slots(): {}
}
export type BindingProps<
	T extends BindingObject,
	U extends BindingOptions,
	V extends BindingRef,
> = ReturnType<__sveltets_Render<T, U, V>['props']>
export type BindingEvents<
	T extends BindingObject,
	U extends BindingOptions,
	V extends BindingRef,
> = ReturnType<__sveltets_Render<T, U, V>['events']>
export type BindingSlots<
	T extends BindingObject,
	U extends BindingOptions,
	V extends BindingRef,
> = ReturnType<__sveltets_Render<T, U, V>['slots']>
/**
 * Wraps the Tweakpane [`addBinding`](https://tweakpane.github.io/docs/input-bindings/) method.
 *
 * Important: This component is provided for consistency with Tweakpane's API, but is not recommended
 * for general use in _Svelte Tweakpane UI_ because more helpful abstractions are available.
 *
 * Please consider convenience components like `<Slider>`, `<Color>`, etc. etc. before using this
 * component directly.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the component in `<Pane
 * position="inline">`.
 *
 * @emits {BindingChangeEvent} change - When the value of `object[key]` changes. (This event is provided for advanced use cases. Prefer binding to `object`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Binding, type BindingObject } from 'svelte-tweakpane-ui'
 *
 * let object: BindingObject = { r: 0 }
 * </script>
 *
 * <Binding bind:object key="r" label="Reticulation" />
 * <pre>Value: {object.r}</pre>
 * ```
 *
 * @sourceLink
 * [Binding.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/core/Binding.svelte)
 */
export default class Binding<
	T extends BindingObject,
	U extends BindingOptions,
	V extends BindingRef,
> extends SvelteComponent<BindingProps<T, U, V>, BindingEvents<T, U, V>, BindingSlots<T, U, V>> {}
export {}
