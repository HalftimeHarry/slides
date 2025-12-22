<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInputFolding from '../internal/GenericInputFolding.svelte'
	import { objectToTuple } from '../utils'
	import { fillWith } from '../utils'
	import { isColorObject, isRgbaColorObject, isRgbColorObject } from '@tweakpane/core'
	import { BROWSER } from 'esm-env'
	import { shallowEqual } from 'fast-equals'
	export let value
	export let expanded = void 0
	export let type = void 0
	let internalValue
	let options
	let ref
	const buttonClass = 'tp-colswv_b'
	function updateInternalValueFromValue() {
		if (typeof value === 'string') {
			if (internalValue !== value) {
				internalValue = value
			}
		} else if (isColorObject(value)) {
			if (!shallowEqual(value, internalValue)) {
				internalValue = { ...value }
			}
		} else if (Array.isArray(value)) {
			let newInternalValue =
				value.length === 4
					? { r: value[0], g: value[1], b: value[2], a: value[3] }
					: value.length === 3
						? { r: value[0], g: value[1], b: value[2] }
						: void 0
			if (newInternalValue === void 0) {
				console.error('Unreachable')
			} else if (!shallowEqual(newInternalValue, internalValue)) {
				internalValue = newInternalValue
			}
		} else {
			console.error('Unreachable')
		}
	}
	function updateValueFromInternalValue() {
		if (typeof value === 'string' && typeof internalValue === 'string') {
			if (internalValue !== value) {
				value = internalValue
			}
		} else if (Array.isArray(value) && isColorObject(internalValue)) {
			const newValue = isRgbaColorObject(internalValue)
				? objectToTuple(internalValue, ['r', 'g', 'b', 'a'])
				: isRgbColorObject(internalValue)
					? objectToTuple(internalValue, ['r', 'g', 'b'])
					: void 0
			if (newValue === void 0) {
				console.error('Unreachable color type mismatch')
			} else if (!shallowEqual(newValue, value)) {
				value = newValue
			}
		} else if (isColorObject(value) && isColorObject(internalValue)) {
			if (!shallowEqual(internalValue, value)) {
				value = { ...internalValue }
			}
		} else {
			console.error('Unreachable color type mismatch')
		}
	}
	function addListeners() {
		ref.on('change', () => {
			ref.refresh()
		})
	}
	$: value, updateInternalValueFromValue()
	$: internalValue, updateValueFromInternalValue()
	$: ref !== void 0 && addListeners()
	$: options = {
		color: {
			type,
		},
		view: 'color',
	}
</script>

<GenericInputFolding
	bind:value={internalValue}
	bind:expanded
	bind:ref
	on:change
	{buttonClass}
	{options}
	{...$$restProps}
/>
{#if !BROWSER && expanded && $$props.picker === 'inline'}
	<!-- Main swatch -->
	<ClsPad keysAdd={fillWith('containerUnitSize', 6)} theme={$$props.theme} />
	<ClsPad keysAdd={fillWith('containerUnitSpacing', 3)} theme={$$props.theme} />
	{#if isRgbaColorObject(internalValue)}
		<ClsPad keysAdd={fillWith('containerUnitSize', 1)} theme={$$props.theme} />
		<ClsPad extra={2} keysAdd={fillWith('containerVerticalPadding', 2)} theme={$$props.theme} />
	{/if}
{/if}
