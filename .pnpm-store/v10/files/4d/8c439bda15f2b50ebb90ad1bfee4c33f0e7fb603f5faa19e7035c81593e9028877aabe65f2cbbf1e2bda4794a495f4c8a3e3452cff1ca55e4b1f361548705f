import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type AutoValueChangeEvent = ValueChangeEvent<boolean | number | object | string>
declare const __propDef: {
	props: Omit<
		{
			/**
			 * The value to control.
			 * @bindable
			 */
			value: string | number | boolean | object
		} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable &
					Record<string, string | number | boolean | object>
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
				options?: import('tweakpane').BindingParams | undefined
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
				ref?: import('..').BindingRef | undefined
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
		change: AutoValueChangeEvent
	}
}
export type AutoValueProps = typeof __propDef.props
export type AutoValueEvents = typeof __propDef.events
export type AutoValueSlots = typeof __propDef.slots
/**
 * Rapid-development component which automatically creates a Tweakpane control for an arbitrary value.
 *
 * A (reasonably) appropriate Tweakpane control will be used for the value type.
 *
 * This component is intended for quick tests where you don't want to fuss with component selection or
 * customization.
 *
 * See `<AutoObject>` for a variation that creates controls for multiple values in an object.
 *
 * The value is generally mapped to controls according to the logic outlined in the [Tweakpane input
 * binding documentation](https://tweakpane.github.io/docs/input-bindings/).
 *
 * Plugin component behavior is not available in `<AutoValue>`.
 *
 * @emits {AutoValueChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { AutoValue } from 'svelte-tweakpane-ui'
 *
 * let number = 0
 * let color = { r: 255, g: 0, b: 255 }
 * let point = { x: 0, y: 0 }
 * let text = 'Cosmic manifold'
 * </script>
 *
 * <AutoValue bind:value={number} label="Number" />
 * <AutoValue bind:value={color} label="Color" />
 * <AutoValue bind:value={point} label="Point" />
 * <AutoValue bind:value={text} label="Text" />
 * ```
 *
 * @sourceLink
 * [AutoValue.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/extra/AutoValue.svelte)
 */
export default class AutoValue extends SvelteComponent<
	AutoValueProps,
	AutoValueEvents,
	AutoValueSlots
> {}
export {}
