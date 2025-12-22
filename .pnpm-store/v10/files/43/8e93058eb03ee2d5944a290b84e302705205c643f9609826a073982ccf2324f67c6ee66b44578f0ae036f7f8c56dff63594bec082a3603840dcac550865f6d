import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type TextareaChangeEvent = ValueChangeEvent<string>
import type { TextareaPluginInputParams } from '@kitschpatrol/tweakpane-plugin-textarea/dist/types/plugin.js'
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
		 * @default `true`
		 * */
		live?: boolean
		/**
		 * Placeholder text to display when the `value` is empty.
		 * @default `'Enter text here'`
		 */
		placeholder?: string
		/**
		 * The number of lines of text to display.
		 *
		 * If lines of input exceed this value, then the text area will scroll.
		 * @default `3`
		 */
		rows?: number
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
				options?: TextareaPluginInputParams | undefined
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
		change: TextareaChangeEvent
	}
}
export type TextareaProps = typeof __propDef.props
export type TextareaEvents = typeof __propDef.events
export type TextareaSlots = typeof __propDef.slots
/**
 * A multi-line text input field, in the spirit of the HTML `<textarea>`
 * element.
 *
 * Integrates the
 * [tweakpane-textarea-plugin](https://github.com/panGenerator/tweakpane-textarea-plugin)
 * by [Krzysztof Goliński](http://www.golinski.org) and [Jakub
 * Koźniewski](https://pangenerator.com).
 *
 * Extends the underlying implementation with the `live` property to match the
 * behavior of the `<Text>` component.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the text area in
 * `<Pane position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-textarea) of the plugin with build optimizations. The fork also changes the package name from `@pangenerator/tweakpane-textarea-plugin` to `@kitschpatrol/tweakpane-plugin-textarea` for consistency with other plugins.
 *
 * @emits {TextareaChangeEvent} change - When `value` changes. (This event is
 * provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Textarea } from 'svelte-tweakpane-ui'
 *
 * let text = ''
 * </script>
 *
 * <Textarea bind:value={text} placeholder="The void" rows={8} />
 * <pre>{text}</pre>
 * ```
 *
 * @sourceLink
 * [Textarea.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Textarea.svelte)
 */
export default class Textarea extends SvelteComponent<
	TextareaProps,
	TextareaEvents,
	TextareaSlots
> {}
export {}
