import { SvelteComponent } from 'svelte'
import type { BindingObject, ValueChangeEvent } from '../utils.js'
export type AutoObjectChangeEvent = ValueChangeEvent<BindingObject>
import type { Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * Custom color scheme.
		 * @default `undefined`  \
		 * Inherits default Tweakpane theme equivalent to `ThemeUtils.presets.standard`, or the theme
		 * set with `setGlobalDefaultTheme()`.
		 * */ theme?: Theme | undefined
		/**
		 * Transforms keys into more pleasant control labels (e.g. capitalization and spaces in lieu of
		 * camelCase, kebab-case, etc.)
		 * @default `true`
		 * */ prettyLabels?: boolean
		/**
		 * Object to create an automatic set of Tweakpane controls for.
		 *
		 * Keys will be used as labels, and a (reasonably) appropriate Tweakpane control will be used
		 * for each value's type.
		 * @bindable
		 * */ object: BindingObject
	}
	slots: {}
	events: {
		/**
		 * Fires when a value in the `object` changes.
		 *
		 * _This event is provided for advanced use cases. It's usually preferred to bind to the `object` prop instead._
		 *
		 * The `event.details` payload includes a copy of the value and an `origin` field to distinguish between user-interactive changes (`internal`)
		 * and changes resulting from programmatic manipulation of the `object` (`external`).
		 *
		 * @extends ValueChangeEvent
		 * @event
		 * */
		change: AutoObjectChangeEvent
	}
}
export type AutoObjectProps = typeof __propDef.props
export type AutoObjectEvents = typeof __propDef.events
export type AutoObjectSlots = typeof __propDef.slots
/**
 * Rapid-development component which automatically creates a set of Tweakpane controls for an arbitrary
 * object.
 *
 * Object keys will be used as labels, and a (reasonably) appropriate Tweakpane control will be used
 * for each value's type.
 *
 * Values are generally mapped to controls according to the logic outlined in the [Tweakpane input
 * binding documentation](https://tweakpane.github.io/docs/input-bindings/).
 *
 * This component is intended for quick tests where you want "best guess" non-customizable controls for
 * an entire object, without considering the ideal component for each value.
 *
 * See `<AutoValue>` for a variation that works directly on a stand-alone value that isn't wrapped in
 * an object.
 *
 * Records within the object will wrap their contents in a `<Folder>` component. Value objects in the
 * shape of color or point objects will show a more specialized control.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the component in `<Pane
 * position="inline">`.
 *
 * `<AutoObject>` was inspired by the
 * [`<TWPAutoMutable>`](https://github.com/MrFoxPro/solid-tweakpane/blob/master/src/automutable.tsx)
 * component in [Dmitriy Nikiforov's](https://github.com/MrFoxPro)
 * [solid-tweakpane](https://github.com/MrFoxPro/solid-tweakpane) library.
 *
 * Plugin component behavior is not available in `<AutoObject>`.
 *
 * @emits {AutoObjectChangeEvent} change - When `object` changes. (This event is provided for advanced use cases. Prefer binding to `object`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { AutoObject } from 'svelte-tweakpane-ui'
 *
 * let object = {
 *   // Creates a <Checkbox>
 *   someBoolean: true,
 *   // Creates a <Color> picker
 *   someColor: {
 *     r: 255,
 *     g: 0,
 *
 *     b: 55,
 *   },
 *   // Wraps children in a <Folder>
 *   someFolder: {
 *     b: 2,
 *     a: 1,
 *     c: 3,
 *   },
 *   // Creates a <Slider>
 *   someNumber: 1,
 *   // creates a <Point>
 *   somePoint: {
 *     x: 1,
 *     y: 2,
 *   },
 *   // Creates a <Text>
 *   someString: 'test',
 * }
 * </script>
 *
 * <AutoObject bind:object />
 *
 * <pre>{JSON.stringify(object, null, 2)}</pre>
 * ```
 *
 * @sourceLink
 * [AutoObject.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/extra/AutoObject.svelte)
 */
export default class AutoObject extends SvelteComponent<
	AutoObjectProps,
	AutoObjectEvents,
	AutoObjectSlots
> {}
export {}
