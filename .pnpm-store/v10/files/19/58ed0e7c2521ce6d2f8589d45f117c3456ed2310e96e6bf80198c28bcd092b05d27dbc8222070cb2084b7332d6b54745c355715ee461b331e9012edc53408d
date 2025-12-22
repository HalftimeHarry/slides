import type { Theme } from './theme'
import type { FolderApi, Pane, TabPageApi } from 'tweakpane'
export type Container = FolderApi | Pane | TabPageApi
export type Simplify<T> = NonNullable<unknown> & {
	[KeyType in keyof T]: T[KeyType]
}
export type SimplifyDeep<Type> = Type extends Theme
	? Type
	: {
			[TypeKey in keyof Type]: SimplifyDeep<Type[TypeKey]>
		}
export type HasKey<U, V extends PropertyKey> = V extends keyof U ? U[V] : unknown
import type { Bindable, BladeApi, BladeController, TpPluginBundle, View } from '@tweakpane/core'
export type BindingObject = Bindable
export type Plugin = TpPluginBundle
/**
 * The base event type for value change notification events emitted by various controls.
 */
export type ValueChangeEvent<V> = CustomEvent<{
	/**
	 * The origin of the event.
	 * Changes resulting from the user's direct manipulation of the control will are marked as `internal`.
	 * Changes resulting from manipulation of the bound value from _outside_ the component are marked as `external`.
	 */
	origin: 'external' | 'internal'
	/**
	 * A copy of the value at the time of the event.
	 */
	value: V
}>
/**
 * Needed to conveniently use $$Events as the single source of truth for component events Performs
 * the transformation necessary (extracting detail types) to pass the $$Events type into
 * createEventDispatcher(). See
 * [documentation](https://svelte.dev/docs/typescript#script-lang-ts-events).
 *
 * An alternative would be to use a custom dispatcher, like [Threlte
 * does])https://github.com/threlte/threlte/blob/main/packages/core/src/lib/lib/createRawEventDispatcher.ts_.
 *
 */
export type UnwrapCustomEvents<T> = {
	[P in keyof T]: T[P] extends CustomEvent<infer detail> ? detail : never
}
/**
 * For CLS SSR calculation
 */
export declare function rowsForMonitor(buffer?: number, rows?: number, graph?: boolean): number
/**
 * Fills an array of length `quantity` with a `value`
 */
export declare function fillWith<T>(value: T, quantity: number): T[]
/**
 * There's no way to enforce readonly properties in Svelte components, so this is a workaround. See
 * [general approach](https://github.com/sveltejs/svelte/issues/7712#issuecomment-1642470141) and
 * [runtime error approach](https://github.com/sveltejs/svelte/issues/7712#issuecomment-1642817764)
 *
 * Generally:
 * ```svelte
 * <script>
 *   export let value = "foo"
 *   let _value;
 *   // if you want to set init value from outside
 *   // uncomment this line:
 *   // _value = value;
 *   $: value = _value;
 *   $: enforceReadonly(_value, value, "value");
 * </script>
 *
 * <input bind:value={_value} />
 *
 * This is not perfect and there are some edge cases it doesn't catch because we have to
 * allow assignment to undefined in some internal cases (via the `allowAssignmentToUndefined` flag).
 *
 */
export declare function enforceReadonly(
	internal: unknown,
	external: unknown,
	componentName?: string,
	propertyName?: string,
	allowAssignmentToUndefined?: boolean,
): void
export declare function isRootPane(container: Container): boolean
export declare function clamp(value: number, min: number, max: number): number
export declare function getElementIndex(element: HTMLElement): number
export declare function removeKeys<T extends Record<string, unknown>>(
	object: T,
	...keys: string[]
): T
export declare function updateCollapsibility(
	isUserExpandableEnabled: boolean,
	element: HTMLElement | undefined,
	titleBarClass: string,
	iconClass?: string,
): void
/**
 * Infers grid dimensions for a given number of items, respecting optional maximums for rows and
 * columns.
 *
 * If no constraints are provided, it creates the most square grid possible.
 *
 * If a single constraint is provided, it lets the undefined axis grow / shrink as needed.
 *
 * If both constraints are provided, values may be clipped.
 */
export declare function getGridDimensions(
	itemCount: number,
	maxColumns?: number,
	maxRows?: number,
): {
	columns: number
	rows: number
}
export declare function tupleToObject<
	T extends string,
	O extends {
		[K in T]: number
	},
>(tuple: number[], keys: T[]): O
export declare function objectToTuple<T extends string, O extends Record<T, number>>(
	object: O,
	keys: [T],
): [number]
export declare function objectToTuple<T extends string, O extends Record<T, number>>(
	object: O,
	keys: [T, T],
): [number, number]
export declare function objectToTuple<T extends string, O extends Record<T, number>>(
	object: O,
	keys: [T, T, T],
): [number, number, number]
export declare function objectToTuple<T extends string, O extends Record<T, number>>(
	object: O,
	keys: [T, T, T, T],
): [number, number, number, number]
export declare function pickerIsOpen(blade: BladeApi<BladeController<View>>): boolean
export declare function getSwatchButton(
	blade: BladeApi<BladeController<View>>,
): HTMLButtonElement | undefined
import type { CubicBezierValue } from './control/CubicBezier.svelte'
import type { RotationEulerUnit, RotationEulerValue } from './control/RotationEuler.svelte'
import type { RotationQuaternionValue } from './control/RotationQuaternion.svelte'
declare function quaternionToCssTransform(quaternion: RotationQuaternionValue): string
declare function eulerToCssTransform(
	rotation: RotationEulerValue,
	units?: RotationEulerUnit,
): string
declare function cubicBezierToEaseFunction(cubicBezier: CubicBezierValue): (t: number) => number
declare const _default: {
	/**
	 * Convenience function for creating easing functions ready for Svelte's tween and animation
	 * systems
	 * @param cubicBezier - `CubicBezierValue`, probably from a `<CubicBezier>` component
	 * @returns Tween function
	 */
	cubicBezierToEaseFunction: typeof cubicBezierToEaseFunction
	/**
	 * Convenience function for creating CSS-ready euler rotation transforms
	 * @param rotation - `RotationEulerValue`, probably from a `<RotationEuler>` component
	 * @param quaternion
	 * @returns CSS rotate X/Y/Z string ready to be passed into a CSS transform
	 */
	eulerToCssTransform: typeof eulerToCssTransform
	/**
	 * Convenience function for creating CSS-ready quaternion rotation transforms
	 * @param rotation - RotationQuaternionValue, probably from a <RotationQuaternionValue>
	 * component
	 * @returns CSS matrix3d string ready to be passed into a CSS transform
	 */
	quaternionToCssTransform: typeof quaternionToCssTransform
}
export default _default
