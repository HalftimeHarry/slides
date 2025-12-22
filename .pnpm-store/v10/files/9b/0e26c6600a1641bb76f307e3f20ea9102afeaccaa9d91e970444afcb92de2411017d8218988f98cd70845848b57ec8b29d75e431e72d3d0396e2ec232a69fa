<script context="module"></script>

<script generics="T extends PointValue2d | PointValue3d | PointValue4d">
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInputFolding from '../internal/GenericInputFolding.svelte'
	import { removeKeys } from '../utils'
	import { BROWSER } from 'esm-env'
	import { shallowEqual } from 'fast-equals'
	export let value
	export let expanded = $$props.expanded ?? void 0
	let pointerScale = $$props['pointerScale'] ?? void 0
	let keyScale = $$props['keyScale'] ?? void 0
	let min = $$props['min'] ?? void 0
	let max = $$props['max'] ?? void 0
	let step = $$props['step'] ?? void 0
	let optionsX = $$props['optionsX'] ?? void 0
	let optionsY = $$props['optionsY'] ?? void 0
	let optionsZ = $$props['optionsZ'] ?? void 0
	let optionsW = $$props['optionsW'] ?? void 0
	let format = $$props['format'] ?? void 0
	let internalValue
	let options
	const buttonClass = 'tp-p2dv_b'
	function updateInternalValueFromValue() {
		if (Array.isArray(value)) {
			const newInternalValue =
				value.length === 4
					? { x: value[0], y: value[1], z: value[2], w: value[3] }
					: value.length === 3
						? { x: value[0], y: value[1], z: value[2] }
						: { x: value[0], y: value[1] }
			if (!shallowEqual(internalValue, newInternalValue)) {
				internalValue = newInternalValue
			}
		} else if (!shallowEqual(internalValue, value)) {
			internalValue = { ...value }
		}
	}
	function updateValueFromInternalValue() {
		if (Array.isArray(value)) {
			const newValue =
				'w' in internalValue
					? [internalValue.x, internalValue.y, internalValue.z, internalValue.w]
					: 'z' in internalValue
						? [internalValue.x, internalValue.y, internalValue.z]
						: [internalValue.x, internalValue.y]
			if (!shallowEqual(value, newValue)) {
				value = newValue
			}
		} else if (!shallowEqual(value, internalValue)) {
			value = { ...internalValue }
		}
	}
	$: value, updateInternalValueFromValue()
	$: internalValue, updateValueFromInternalValue()
	$: options = {
		x: optionsX,
		y: optionsY,
		z: optionsZ,
		w: optionsW,
		min,
		max,
		format,
		keyScale,
		pointerScale,
		step,
	}
</script>

<GenericInputFolding
	bind:value={internalValue}
	bind:expanded
	on:change
	{buttonClass}
	{options}
	{...removeKeys(
		$$restProps,
		...Object.keys(options),
		'optionsX',
		'optionsY',
		'optionsZ',
		'optionsW',
	)}
/>
{#if !BROWSER && !('z' in internalValue)}
	<!-- 2D points only -->
	{#if expanded && $$props.picker === 'inline'}
		{#if $$props.label !== undefined}
			<ClsPad
				keysAdd={['bladeValueWidth']}
				keysSubtract={[`containerUnitSize`]}
				theme={$$props.theme}
			/>
		{:else}
			<!-- Without a label, the grid takes the full width of the control -->
			<!-- TODO remove magic number -->
			<div style="aspect-ratio: 1; width: calc(100% - 28px);"></div>
		{/if}
	{/if}
{/if}
