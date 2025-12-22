import { SvelteComponent } from 'svelte'
import type { Simplify } from '../utils'
import type { ValueChangeEvent } from '../utils.js'
import type { Point2dInputParams, Point3dInputParams, Point4dInputParams } from 'tweakpane'
export type PointValue2dObject = {
	x: number
	y: number
}
export type PointValue2dTuple = [x: number, y: number]
export type PointValue2d = Simplify<PointValue2dObject | PointValue2dTuple>
export type PointValue3dObject = {
	x: number
	y: number
	z: number
}
export type PointValue3dTuple = [x: number, y: number, z: number]
export type PointValue3d = Simplify<PointValue3dObject | PointValue3dTuple>
export type PointValue4dObject = {
	x: number
	y: number
	z: number
	w: number
}
export type PointValue4dTuple = [x: number, y: number, z: number, w: number]
export type PointValue4d = Simplify<PointValue4dObject | PointValue4dTuple>
/**
 * TODO docs
 */
export type PointOptions<
	Dimensions extends '2' | '3' | '4',
	Axis extends 'w' | 'x' | 'y' | 'z',
> = Dimensions extends '4'
	? Point4dInputParams[Axis]
	: Dimensions extends '3'
		? Point3dInputParams[Axis]
		: Dimensions extends '2'
			? Point2dInputParams[Axis]
			: never
export type PointChangeEvent = ValueChangeEvent<PointValue2d | PointValue3d | PointValue4d>
declare class __sveltets_Render<T extends PointValue2d | PointValue3d | PointValue4d> {
	props(): {
		/**
		 * A 2D, 3D, or 4D point object to control.
		 *
		 * Takes a tuple with a `number` value for each dimension, or an object with at least `x`
		 * and `y` values, and optionally `z` and `w` values for additional dimensions.
		 *
		 * The type of this value will determine the availability of axis-specific option props.
		 * @bindable
		 * */
		value: T
		/**
		 * The minimum value for all dimensions.
		 * @default `undefined`  \
		 * No minimum.
		 * */
		min?: number
		/**
		 * The maximum value for all dimensions.
		 * @default `undefined`  \
		 * No maximum.
		 * */
		max?: number
		/**
		 * A function to customize the point value's string representation (e.g. rounding, etc.).
		 * @default `undefined`  \
		 * Normal `.toString()` formatting.
		 * */
		format?: ((value: number) => string) | undefined
		/**
		 * The unit scale for key-based input for all dimensions (e.g. the up and down arrow keys).
		 * @default `1`  \
		 * Or `stepValue` if defined.
		 *  */
		keyScale?: number
		/**
		 * The unit scale for pointer-based input for all dimensions.
		 * @default `undefined`  \
		 * [Dynamic based on magnitude of
		 * `value`](https://github.com/cocopon/tweakpane/blob/66dfbea04bfe9b7f031673c955ceda1f92356e75/packages/core/src/common/number/util.ts#L54).
		 * */
		pointerScale?: number
		/**
		 * The minimum step interval for all dimensions.
		 * @default `undefined`  \
		 * No step constraint.
		 * */
		step?: number
	} & Omit<
		{
			/**
			 * DOM class name of the button used to expand and collapse the input's picker.
			 * @default `undefined`
			 */
			buttonClass?: string
			/**
			 * Expand or collapse the input's picker.
			 * @default `false`
			 * @bindable
			 */
			expanded?: boolean
			/**
			 * The style of value "picker" to use in the input.
			 * @default `'popup'`
			 */
			picker?: 'inline' | 'popup'
			/**
			 * Allow users to interactively expand / contract the picker.
			 * @default `true`
			 */
			userExpandable?: boolean
		} & {
			/**
			 * A 2D, 3D, or 4D point object to control.
			 *
			 * Takes a tuple with a `number` value for each dimension, or an object with at least `x`
			 * and `y` values, and optionally `z` and `w` values for additional dimensions.
			 *
			 * The type of this value will determine the availability of axis-specific option props.
			 * @bindable
			 */
			value: T
		} & Omit<
				{
					/**
					 * The binding's target object with values to manipulate.
					 * @bindable
					 */
					object: import('@tweakpane/core').Bindable & Record<string, T>
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
					options?:
						| (T extends PointValue4d
								? Point4dInputParams
								: T extends PointValue3d
									? Point3dInputParams
									: T extends PointValue2d
										? Point2dInputParams
										: unknown)
						| undefined
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
					plugin?: import('../utils').Plugin | undefined
				},
				'object' | 'key'
			>,
		'ref' | 'options' | 'plugin' | 'buttonClass'
	> &
		(T extends PointValue2d | PointValue3d | PointValue4d
			? {
					/**
					 * Input parameters specific to the X dimension.
					 *
					 * Renamed from `x` in Tweakpane API to clarify that it is an object of options, not
					 * a value.
					 * @default `undefined`
					 * */
					optionsX?:
						| (T extends infer T_1
								? T_1 extends T
									? T_1 extends PointValue4d
										? Point4dInputParams
										: T_1 extends PointValue3d
											? Point3dInputParams
											: T_1 extends PointValue2d
												? Point2dInputParams
												: unknown
									: never
								: never)['x']
						| undefined
					/**
					 * Input parameters specific to the Y dimension.
					 *
					 * For 2D point values, the object also includes the `inverted` key, which inverts
					 * the Y axis.
					 *
					 * Renamed from `y` in Tweakpane API to clarify that it is an object of options, not
					 * a value.
					 * @default `undefined`  \
					 * `inverted` is `false`
					 * */
					optionsY?:
						| (T extends infer T_2
								? T_2 extends T
									? T_2 extends PointValue4d
										? Point4dInputParams
										: T_2 extends PointValue3d
											? Point3dInputParams
											: T_2 extends PointValue2d
												? Point2dInputParams
												: unknown
									: never
								: never)['y']
						| undefined
				}
			: unknown) &
		(T extends PointValue3d | PointValue4d
			? {
					/**
					 * Input parameters specific to the Z dimension.
					 *
					 * Renamed from `z` in Tweakpane API to clarify that it is an object of options,
					 * not a value.
					 * @default `undefined`
					 * */
					optionsZ?:
						| (T extends infer T_3
								? T_3 extends T
									? T_3 extends PointValue4d
										? Point4dInputParams
										: T_3 extends PointValue3d
											? Point3dInputParams
											: T_3 extends PointValue2d
												? Point2dInputParams
												: unknown
									: never
								: never)['z']
						| undefined
				}
			: unknown) &
		(T extends PointValue4d
			? {
					/**
					 * Input parameters specific to the W dimension.
					 *
					 * Renamed from `w` in Tweakpane API to clarify that it is an object of options,
					 * not a value.
					 * @default `undefined`
					 * */
					optionsW?:
						| (T extends infer T_4
								? T_4 extends T
									? T_4 extends PointValue4d
										? Point4dInputParams
										: T_4 extends PointValue3d
											? Point3dInputParams
											: T_4 extends PointValue2d
												? Point2dInputParams
												: unknown
									: never
								: never)['w']
						| undefined
				}
			: unknown)
	events(): {
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
		change: PointChangeEvent
	}
	slots(): {}
}
export type PointProps<T extends PointValue2d | PointValue3d | PointValue4d> = ReturnType<
	__sveltets_Render<T>['props']
>
export type PointEvents<T extends PointValue2d | PointValue3d | PointValue4d> = ReturnType<
	__sveltets_Render<T>['events']
>
export type PointSlots<T extends PointValue2d | PointValue3d | PointValue4d> = ReturnType<
	__sveltets_Render<T>['slots']
>
/**
 * Wraps the Tweakpane [point bindings](https://tweakpane.github.io/docs/input-bindings/#point).
 *
 * Provides a nice cartesian picker for 2D points, and numeric input fields for 3D and 4D points. See
 * the `<RotationEuler>` and `<RotationQuaternion>` components for higher-dimension graphical pickers.
 *
 * Extends the vanilla JS Tweakpane APIs to also support tuple values. (Useful when working with
 * frameworks like [three.js](https://threejs.org) / [threlte](https://threlte.xyz).)
 *
 * `<Point>` is a dynamic component, and the availability of the `optionsZ` and `optionsW` props will
 * change depending on the number of dimensions in the `value`.
 *
 * Usage outside of a `<Pane>` component will implicitly wrap the point picker in a `<Pane
 * position="inline">` component.
 *
 * @emits {PointChangeEvent} change - When `value` changes. (This event is provided for advanced use cases. Prefer binding to `value`.)
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import {
 *   Point,
 *   type PointOptions,
 *   type PointValue2d,
 *   type PointValue3d,
 *   type PointValue4d,
 * } from 'svelte-tweakpane-ui'
 *
 * let point2d: PointValue2d = { x: 0, y: 0 }
 *
 * // tuples are also fine
 * let point3d: PointValue3d = [0, 0, 0]
 *
 * // dimension-specific option type needs to know the type of the point value
 * let point3dXOptions: PointOptions<'3', 'x'> = {
 *   min: -100,
 *   max: 100,
 * }
 *
 * let point4d: PointValue4d = {
 *   x: 0,
 *   y: 0,
 *   z: 0,
 *   w: 0,
 * }
 * </script>
 *
 * <Point
 * bind:value={point2d}
 * expanded={true}
 * label="2D Point Picker"
 * picker="inline"
 * userExpandable={false}
 * />
 * <Point
 * bind:value={point3d}
 * label="3D Point Picker"
 * optionsX={point3dXOptions}
 * />
 * <Point bind:value={point4d} min={0} max={100} label="4D Point Picker" />
 *
 * <pre>
 * 2D Value:
 * {JSON.stringify(point2d, null, 2)}
 *
 * 3D Value:
 * {JSON.stringify(point3d, null, 2)}
 *
 * 4D Value:
 * {JSON.stringify(point4d, null, 2)}
 * </pre>
 * ```
 *
 * @sourceLink
 * [Point.svelte](https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/main/src/lib/control/Point.svelte)
 */
export default class Point<
	T extends PointValue2d | PointValue3d | PointValue4d,
> extends SvelteComponent<PointProps<T>, PointEvents<T>, PointSlots<T>> {}
export {}
