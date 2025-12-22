import type { Simplify } from './utils'
import { type RgbaColorObject, type RgbColorObject } from '@tweakpane/core'
export type ThemeColorValue = Simplify<RgbaColorObject | RgbColorObject | string>
export type Theme = CustomThemeKeys & ThemeKeys
type ThemeKeys = {
	baseBackgroundColor?: ThemeColorValue
	baseBorderRadius?: string
	baseFontFamily?: string
	baseShadowColor?: ThemeColorValue
	bladeBorderRadius?: string
	bladeHorizontalPadding?: string
	bladeValueWidth?: string
	buttonBackgroundColor?: ThemeColorValue
	buttonBackgroundColorActive?: ThemeColorValue
	buttonBackgroundColorFocus?: ThemeColorValue
	buttonBackgroundColorHover?: ThemeColorValue
	buttonForegroundColor?: ThemeColorValue
	containerBackgroundColor?: ThemeColorValue
	containerBackgroundColorActive?: ThemeColorValue
	containerBackgroundColorFocus?: ThemeColorValue
	containerBackgroundColorHover?: ThemeColorValue
	containerForegroundColor?: ThemeColorValue
	containerHorizontalPadding?: string
	containerUnitSize?: string
	containerUnitSpacing?: string
	containerVerticalPadding?: string
	grooveForegroundColor?: ThemeColorValue
	inputBackgroundColor?: ThemeColorValue
	inputBackgroundColorActive?: ThemeColorValue
	inputBackgroundColorFocus?: ThemeColorValue
	inputBackgroundColorHover?: ThemeColorValue
	inputForegroundColor?: ThemeColorValue
	labelForegroundColor?: ThemeColorValue
	monitorBackgroundColor?: ThemeColorValue
	monitorForegroundColor?: ThemeColorValue
	pluginImageDraggingColor?: ThemeColorValue
}
type CustomThemeKeys = Record<string, ThemeColorValue>
export declare const keys: Record<string, string>
export declare const presets: {
	/** Dark blue theme. */
	iceberg: Theme
	/** Extra dark theme. */
	jetblack: Theme
	/** Standard Tweakpane light theme. */
	light: Theme
	/** Light theme with CRT vibes. */
	retro: Theme
	/** Standard Tweakpane dark theme. This is the default theme. */
	standard: Theme
	/** Dark translucent theme. */
	translucent: Theme
	/** Red theme. */
	vivid: Theme
}
/**
 * Used during SSR to calculate metrics Returns CSS string.
 */
export declare function getValueOrFallback(theme: Theme | undefined, key: keyof ThemeKeys): string
export declare function applyTheme(element: HTMLElement, theme: Theme | undefined): void
/**
 * Sets a default theme for all Tweakpane components on the page. Useful if you have a light / dark
 * mode toggle.
 */
export declare function setGlobalDefaultTheme(theme: Theme | undefined): void
declare const _default: {
	/**
	 * A collection of default theme color schemes, matching those provided in the Tweakpane
	 * [Panebuilder presets](https://tweakpane.github.io/docs/theming/#builder).
	 */
	presets: {
		/** Dark blue theme. */
		iceberg: Theme
		/** Extra dark theme. */
		jetblack: Theme
		/** Standard Tweakpane light theme. */
		light: Theme
		/** Light theme with CRT vibes. */
		retro: Theme
		/** Standard Tweakpane dark theme. This is the default theme. */
		standard: Theme
		/** Dark translucent theme. */
		translucent: Theme
		/** Red theme. */
		vivid: Theme
	}
	setGlobalDefaultTheme: typeof setGlobalDefaultTheme
}
export default _default
