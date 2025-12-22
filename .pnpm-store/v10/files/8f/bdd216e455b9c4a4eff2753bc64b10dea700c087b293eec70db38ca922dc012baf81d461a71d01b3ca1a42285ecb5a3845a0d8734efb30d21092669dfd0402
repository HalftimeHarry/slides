import { SvelteComponent } from 'svelte'
import type { ValueChangeEvent } from '../utils.js'
export type FileValue = File | undefined
export type FileChangeEvent = ValueChangeEvent<FileValue>
declare const __propDef: {
	props: {
		/**
		 * File data, or `undefined` to clear the file input.
		 * @default `undefined`
		 * @bindable
		 */
		value?: FileValue
		/**
		 * Array of valid file extensions.
		 * @default Any file extension
		 */
		extensions?: string[] | undefined
		/**
		 * String shown when the user tries to upload an invalid filetype.
		 * @default `'Unaccepted file type.'`
		 */
		invalidExtensionMessage?: string | undefined
		/**
		 * Height of the file input drop zone, in rows.
		 * @default `3`
		 */
		rows?: number | undefined
	} & Omit<
		{
			/**
			 * File data, or `undefined` to clear the file input.
			 * @default `undefined`
			 * @bindable
			 */
			value: string | File | null
		} & Omit<
			{
				/**
				 * The binding's target object with values to manipulate.
				 * @bindable
				 */
				object: import('@tweakpane/core').Bindable & Record<string, string | File | null>
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
		change: FileChangeEvent
	}
}
export type FileProps = typeof __propDef.props
export type FileEvents = typeof __propDef.events
export type FileSlots = typeof __propDef.slots
/**
 * A file input control.
 *
 * _Important: This component has some rough edges, and should be considered experimental._
 *
 * Integrates the [File Input](https://github.com/LuchoTurtle/tweakpane-plugin-file-import/blob/main/src/plugin.ts) control from [LuchoTurtle's](https://github.com/LuchoTurtle) [tweakpane-plugin-file-import](https://github.com/LuchoTurtle/tweakpane-plugin-file-import) plugin. Some of the control's parameter names have been changed for consistency with the `<Image>` CompositionEvent.
 *
 * Use the `<Image>` control instead if you're working with images and want to see a thumbnail preview of the image.
 *
 * There is currently a known bug where change events' `origin` values are sometimes incorrect. (This issue is limited to this component.)
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the image control in `<Pane position="inline">`.
 *
 * Note that _Svelte Tweakpane UI_ embeds a functionally identical [fork](https://github.com/kitschpatrol/tweakpane-plugin-file-import) of the plugin with build optimizations.
 *
 *
 * @emits {FileChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *  import { File, type FileValue } from '..'
 *
 *  let file: FileValue
 *
 *  async function getFileBase64(file: FileValue): Promise<string> {
 *    if (file === undefined) return 'Your bytes here...'
 *    return new Promise((resolve, reject) => {
 *      const reader = new FileReader()
 *      reader.addEventListener('load', () => {
 *        const { result } = reader
 *        if (result && typeof result === 'string') resolve(result)
 *        else reject(new Error('Empty result'))
 *      })
 *      reader.addEventListener('error', reject)
 *      reader.readAsDataURL(file)
 *    })
 *  }
 *
 *  function truncate(text: string, length: number) {
 *    return text.length > length ? text.slice(0, length - 1) + '...' : text
 *  }
 * </script>
 *
 * <File bind:value={file} label="File" />
 *
 * <div class="demo">
 *  <p>
 *    {#await getFileBase64(file)}
 *      Loading...
 *    {:then value}
 *      {truncate(value, 512)}
 *    {/await}
 *  </p>
 * </div>
 *
 * <style>
 *  .demo {
 *    width: 100%;
 *    background: linear-gradient(45deg, orange, magenta);
 *  }
 *
 *  .demo > p {
 *    margin: 0;
 *    padding: 0.5rem;
 *    font-family: monospace;
 *    line-height: 1.2;
 *    color: white;
 *    word-break: break-all;
 *    white-space: pre-wrap;
 *  }
 * </style>
 * ```
 *
 * @sourceLink
 * [File.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/File.svelte)
 */
export default class File extends SvelteComponent<FileProps, FileEvents, FileSlots> {}
export {}
