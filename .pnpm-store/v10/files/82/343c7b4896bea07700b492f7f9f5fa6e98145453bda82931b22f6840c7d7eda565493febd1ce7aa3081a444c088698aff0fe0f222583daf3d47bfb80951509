/* eslint-disable ts/no-unsafe-call */
/* eslint-disable ts/no-explicit-any */
/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable ts/no-unnecessary-type-parameters */
/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/no-unnecessary-type-arguments */
// Utility functions
/**
 * For CLS SSR calculation
 */
export function rowsForMonitor(buffer, rows, graph) {
	if (graph) {
		return Math.max(rows ?? 3, 3)
	}
	if (buffer === undefined && rows === undefined) {
		return 1
	}
	if (buffer === undefined && rows !== undefined) {
		return 1
	}
	if (buffer !== undefined && rows === undefined) {
		return buffer > 1 ? 3 : 1
	}
	if (buffer === 1) {
		return 1
	}
	// Both defined
	return rows ?? 1 // TODO
}
/**
 * Fills an array of length `quantity` with a `value`
 */
export function fillWith(value, quantity) {
	return Array.from({ length: quantity }, () => value)
}
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
export function enforceReadonly(
	internal,
	external,
	componentName,
	propertyName,
	allowAssignmentToUndefined,
) {
	allowAssignmentToUndefined ??= false
	if (
		!(
			external === internal ||
			(allowAssignmentToUndefined && internal === undefined && external !== undefined)
		)
	) {
		const componentString = componentName ? `<${componentName}> ` : ''
		const propertyString = propertyName ? `property "${propertyName}" ` : ''
		console.error(
			`Svelte component "${componentString}" property "${propertyString}" is intended for readonly use.\nAssigning\n"${String(external)}"\nto\n"${String(internal)}"\nis not allowed.`,
		)
	}
}
export function isRootPane(container) {
	return container.constructor.name === 'Pane'
}
export function clamp(value, min, max) {
	// Prioritize min over max
	return Math.min(Math.max(value, min), max)
}
export function getElementIndex(element) {
	let index = 0
	// eslint-disable-next-line ts/no-restricted-types
	let sibling = element
	while ((sibling = sibling.previousElementSibling) !== null) {
		// The Element component can add extra stuff to the DOM which will mess up counting...
		// So we add an extra class to its wrapper and don't let it increment the index.
		// This was the cause of https://github.com/kitschpatrol/svelte-tweakpane-ui/issues/18
		if (!sibling.classList.contains('skip-element-index')) {
			index++
		}
	}
	return index
}
// Doesn't create a new object, only works with string keys
export function removeKeys(object, ...keys) {
	for (const key of keys) {
		if (key in object) {
			// eslint-disable-next-line ts/no-dynamic-delete
			delete object[key]
		}
	}
	return object
}
function clickBlocker(event) {
	// Only block user clicks, not programmatic ones
	if (event.isTrusted) event.stopPropagation()
}
// Used by folder and pane TODO rewrite to use getSwatchButton etc.
export function updateCollapsibility(isUserExpandableEnabled, element, titleBarClass, iconClass) {
	if (element) {
		const titleBarElement = element.querySelector(`.${titleBarClass}`)
		if (titleBarElement) {
			const iconElement = iconClass ? element.querySelector(`.${iconClass}`) : undefined
			if (isUserExpandableEnabled) {
				titleBarElement.removeEventListener('click', clickBlocker, { capture: true })
				titleBarElement.style.cursor = 'pointer'
				if (iconElement) iconElement.style.display = 'block'
			} else {
				// Expanded = true;
				titleBarElement.addEventListener('click', clickBlocker, { capture: true })
				titleBarElement.style.cursor = 'default'
				if (iconElement) iconElement.style.display = 'none'
			}
		}
	} else {
		console.warn(`Title bar element not found with class "${titleBarClass}"`)
	}
}
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
export function getGridDimensions(itemCount, maxColumns, maxRows) {
	let rows
	let columns
	if (maxColumns && maxRows) {
		// No flexing; items can exceed the available slots
		rows = Math.min(Math.ceil(itemCount / maxColumns), maxRows)
		columns = Math.min(maxColumns, itemCount)
	} else if (maxColumns) {
		// Only maxColumns defined, so rows will flex
		rows = Math.ceil(itemCount / maxColumns)
		columns = maxColumns
	} else if (maxRows) {
		// Only maxRows defined, so columns will flex
		columns = Math.ceil(itemCount / maxRows)
		rows = maxRows
	} else {
		// Neither maxColumns nor maxRows defined; create a square grid
		columns = Math.ceil(Math.sqrt(itemCount))
		rows = Math.ceil(itemCount / columns)
	}
	return { columns, rows }
}
// eslint-disable-next-line ts/consistent-indexed-object-style
export function tupleToObject(tuple, keys) {
	// eslint-disable-next-line ts/consistent-type-assertions
	const result = {}
	for (const [index, key] of keys.entries()) {
		// Assert that the assignment is safe
		result[key] = tuple[index]
	}
	return result
}
export function objectToTuple(object, keys) {
	return keys.map((key) => object[key])
}
// Tweakpane  helpers
export function pickerIsOpen(blade) {
	return Boolean(blade.controller.valueController?.foldable_?.valMap_?.expanded?.value_)
}
export function getSwatchButton(blade) {
	const swatch =
		blade.controller?.valueController?.view?.swatchElement?.querySelector('button') ??
		blade.controller?.valueController?.view?.buttonElement
	return swatch
}
// Utility functions
function quaternionToCssTransform(quaternion) {
	const [x, y, z, w] = Array.isArray(quaternion)
		? quaternion
		: [quaternion.x, quaternion.y, quaternion.z, quaternion.w]
	const m11 = 1 - 2 * y * y - 2 * z * z
	const m12 = 2 * x * y - 2 * z * w
	const m13 = 2 * x * z + 2 * y * w
	const m21 = 2 * x * y + 2 * z * w
	const m22 = 1 - 2 * x * x - 2 * z * z
	const m23 = 2 * y * z - 2 * x * w
	const m31 = 2 * x * z - 2 * y * w
	const m32 = 2 * y * z + 2 * x * w
	const m33 = 1 - 2 * x * x - 2 * y * y
	return `matrix3d(
  		${m11}, ${m12}, ${m13}, 0,
  		${m21}, ${m22}, ${m23}, 0,
  		${m31}, ${m32}, ${m33}, 0,
  		0, 0, 0, 1
		)`
}
function eulerToCssTransform(rotation, units = 'rad') {
	const [x, y, z] = Array.isArray(rotation) ? rotation : [rotation.x, rotation.y, rotation.z]
	// Note negative z
	return `rotateX(${x}${units}) rotateY(${y}${units}) rotateZ(${-z}${units})`
}
function cubicBezierToEaseFunction(cubicBezier) {
	const [_x1, y1, _x2, y2] = Array.isArray(cubicBezier)
		? cubicBezier
		: [cubicBezier.x1, cubicBezier.y1, cubicBezier.x2, cubicBezier.y2]
	return (t) =>
		(1 - t) ** 3 * 0 + (1 - t) ** 2 * t * 3 * y1 + (1 - t) * t ** 2 * 3 * y2 + t ** 3 * 1
}
// Library exports
export default {
	/**
	 * Convenience function for creating easing functions ready for Svelte's tween and animation
	 * systems
	 * @param cubicBezier - `CubicBezierValue`, probably from a `<CubicBezier>` component
	 * @returns Tween function
	 */
	cubicBezierToEaseFunction,
	/**
	 * Convenience function for creating CSS-ready euler rotation transforms
	 * @param rotation - `RotationEulerValue`, probably from a `<RotationEuler>` component
	 * @param quaternion
	 * @returns CSS rotate X/Y/Z string ready to be passed into a CSS transform
	 */
	eulerToCssTransform,
	/**
	 * Convenience function for creating CSS-ready quaternion rotation transforms
	 * @param rotation - RotationQuaternionValue, probably from a <RotationQuaternionValue>
	 * component
	 * @returns CSS matrix3d string ready to be passed into a CSS transform
	 */
	quaternionToCssTransform,
}
