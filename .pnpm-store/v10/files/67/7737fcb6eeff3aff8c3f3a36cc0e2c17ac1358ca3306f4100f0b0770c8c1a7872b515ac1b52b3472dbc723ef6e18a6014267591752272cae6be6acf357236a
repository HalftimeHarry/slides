import { SvelteComponent } from 'svelte'
import { getValueOrFallback, type Theme } from '../theme.js'
declare const __propDef: {
	props: {
		/**
		 * The theme to use when estimating the height of the pane.
		 */ theme?: Theme | undefined
		/**
		 * Theme keys to add to the height estimate.
		 */ keysAdd?: Array<Parameters<typeof getValueOrFallback>[1]>
		/**
		 * Theme keys to subtract from the height estimate.
		 */ keysSubtract?: Array<Parameters<typeof getValueOrFallback>[1]>
		/**
		 * Extra arbitrary space to add to the height estimate, in pixels.
		 */ extra?: number | undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
	exports?: {} | undefined
	bindings?: string | undefined
}
export type ClsPadProps = typeof __propDef.props
export type ClsPadEvents = typeof __propDef.events
export type ClsPadSlots = typeof __propDef.slots
/**
 * This component is for internal use only.
 *
 * It's a utility to assist in estimating the rendered height of Tweakpane components for use during prerendering in an attempt to minimize layout shift upon hydration.
 *
 * The associated SSR / prerendering CLS prevention feature is experimental.
 *
 * @sourceLink
 * [ClsPad.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/internal/ClsPad.svelte)
 */
export default class ClsPad extends SvelteComponent<ClsPadProps, ClsPadEvents, ClsPadSlots> {}
export {}
