import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type ImageValue = string | undefined
export type ImageChangeEvent = ValueChangeEvent<ImageValue>
declare const __propDef: {
	props: {
		/**
		 * Image data as Base64-encoded string, or `undefined` to clear.
		 * @default `'undefined'`
		 * @bindable
		 */
		value?: ImageValue
		/**
		 * Array of image extension types to accept.
		 * @default `['.jpg', '.png', '.gif']`
		 */
		extensions?: string[]
		/**
		 * How to display the image in the preview pane.
		 *
		 * Renamed from `imageFit` in `tweakpane-image-plugin` for concision.
		 * @default `'cover'`
		 */
		fit?: 'contain' | 'cover'
	} & Omit<
		{
			/**
			 * Image data as Base64-encoded string, or `undefined` to clear.
			 * @default `'undefined'`
			 * @bindable
			 */
			value: string | HTMLImageElement | File | undefined
		} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable &
					Record<string, string | HTMLImageElement | File | undefined>
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
		'ref' | 'plugin' | 'value'
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
		change: ImageChangeEvent
	}
}
export type ImageProps = typeof __propDef.props
export type ImageEvents = typeof __propDef.events
export type ImageSlots = typeof __propDef.slots
/**
 * An image input control.
 *
 * _Important: This component has some rough edges, and should be considered experimental._
 *
 * Integrates the [tweakpane-image-plugin](https://github.com/metehus/tweakpane-image-plugin),
 * incorporating work by [Florian Morel](http://ayamflow.fr), [Matheus
 * Dias](https://www.linkedin.com/in/matheusdbs/), [Palash Bansal](https://github.com/repalash), and
 * others.
 *
 * Use the `<File>` control instead if you're working with other file types, or don't wish to display a thumbnail preview of an uploaded image.
 *
 * There is currently a known bug where change events' `origin` values are sometimes incorrect. (This issue is limited to this component.)
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the image control in `<Pane
 * position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-image) of the plugin with build optimizations. The fork also changes the package name to `@kitschpatrol/tweakpane-plugin-image` for consistency with other plugins.
 *
 * @emits {ImageChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import { Button, Image, type ImageValue } from '..'
 *
 * let source: ImageValue
 *
 * async function getRandomKittenUrl() {
 *   const { url } = await fetch('https://loremflickr.com/800/800/kitten', {
 *     method: 'HEAD',
 *     redirect: 'follow',
 *   })
 *   return url
 * }
 * </script>
 *
 * <Image bind:value={source} fit="contain" label="Image" />
 * <Button
 * on:click={async () => {
 *   source = await getRandomKittenUrl()
 * }}
 * label="Random Placeholder"
 * title="Load Kitten"
 * />
 *
 * <div class="demo">
 * {#if source === undefined}
 *   <p>Tap “No Image” above to load an image from disk.</p>
 * {:else if typeof source === 'string'}
 *   <img alt="" src={source} />
 * {/if}
 * </div>
 *
 * <style>
 * div.demo {
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 *   aspect-ratio: 1;
 *   width: 100%;
 *   background: linear-gradient(magenta, orange);
 * }
 *
 * div.demo > img {
 *   max-width: 80%;
 *   max-height: 80%;
 * }
 *
 * div.demo > p {
 *   max-width: 50%;
 *   color: white;
 *   text-align: center;
 * }
 * </style>
 * ```
 *
 * @sourceLink
 * [Image.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Image.svelte)
 */
export default class Image extends SvelteComponent<ImageProps, ImageEvents, ImageSlots> {}
export {}
