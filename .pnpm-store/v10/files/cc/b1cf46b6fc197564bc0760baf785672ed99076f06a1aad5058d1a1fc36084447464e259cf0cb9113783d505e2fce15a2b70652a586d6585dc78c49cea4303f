import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type TextChangeEvent = ValueChangeEvent<string>
import { type GenericInputRef } from '../internal/GenericInput.svelte'
declare const __propDef: {
	props: {
		/**
		 * A `string` value to control.
		 * @bindable
		 * */
		value: string
		/**
		 * Whether to provide live updates to the bound `value` on every keystroke.
		 *
		 * To match expectations around reactive components, the default here diverges from the
		 * vanilla JS Tweakpane behavior, which only updates on blur.
		 * @default `true`
		 * */
		live?: boolean
	} & Omit<
		{
			/**
			 * A `string` value to control.
			 * @bindable
			 */
			value: string
		} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable & Record<string, string>
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
				ref?: GenericInputRef | undefined
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
		change: TextChangeEvent
	}
}
export type TextProps = typeof __propDef.props
export type TextEvents = typeof __propDef.events
export type TextSlots = typeof __propDef.slots
/**
 * A text field, in the spirit of the HTML `<input type="text">` element.
 *
 * Wraps Tweakpane's [string binding](https://tweakpane.github.io/docs/input-bindings/#string).
 *
 * Extends the vanilla JS Tweakpane API to update the bound value on every keystroke. (If you prefer
 * Tweakpane's default behavior of only updating on blur, set `live={false}`.)
 *
 * See `<TextArea>` for a multi-line input variation.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the text field in `<Pane
 * position="inline">`.
 *
 * @emits {TextChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Text } from 'svelte-tweakpane-ui'
 *
 * let text = 'Cosmic Manifold'
 * </script>
 *
 * <Text bind:value={text} label="The Message" />
 * <pre>Message: {text}</pre>
 * ```
 *
 * @sourceLink
 * [Text.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Text.svelte)
 */
export default class Text extends SvelteComponent<TextProps, TextEvents, TextSlots> {}
export {}
