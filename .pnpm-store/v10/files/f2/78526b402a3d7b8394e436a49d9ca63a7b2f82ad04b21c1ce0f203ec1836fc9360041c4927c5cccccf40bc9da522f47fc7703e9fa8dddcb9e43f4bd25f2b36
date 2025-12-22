import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type CheckboxChangeEvent = ValueChangeEvent<boolean>
declare const __propDef: {
	props: Omit<
		{
			/**
			 * The value to control.
			 * @bindable
			 */
			value: boolean
		} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable & Record<string, boolean>
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
				options?: import('@tweakpane/core').BaseInputParams | undefined
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
				ref?: import('../internal/GenericInput.svelte').GenericInputRef | undefined
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
				plugin?: import('../utils.js').Plugin | undefined
			},
			'object' | 'key'
		>,
		'ref' | 'options' | 'plugin'
	>
	slots: {}
	events: {
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
		change: CheckboxChangeEvent
	}
}
export type CheckboxProps = typeof __propDef.props
export type CheckboxEvents = typeof __propDef.events
export type CheckboxSlots = typeof __propDef.slots
/**
 * A checkbox.
 *
 * Wraps Tweakpane's [boolean input binding](https://tweakpane.github.io/docs/input-bindings/#boolean).
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the checkbox in `<Pane position="inline">`.
 *
 * @emits {CheckboxChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *  import { Checkbox } from 'svelte-tweakpane-ui'
 *
 *  let reticulationEnabled: boolean = false
 * </script>
 *
 * <Checkbox bind:value={reticulationEnabled} label="Reticulation" />
 * <pre>Enabled: {reticulationEnabled}</pre>
 * ```
 *
 * @sourceLink
 * [Checkbox.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Checkbox.svelte)
 */
export default class Checkbox extends SvelteComponent<
	CheckboxProps,
	CheckboxEvents,
	CheckboxSlots
> {}
export {}
