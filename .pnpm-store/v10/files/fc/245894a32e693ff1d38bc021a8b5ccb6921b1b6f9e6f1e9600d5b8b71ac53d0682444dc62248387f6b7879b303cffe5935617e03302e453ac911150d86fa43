<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInputFolding from '../internal/GenericInputFolding.svelte'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-rotation'
	import { BROWSER } from 'esm-env'
	import { shallowEqual } from 'fast-equals'
	export let value
	export let order = void 0
	export let unit = void 0
	export let optionsX = void 0
	export let optionsY = void 0
	export let optionsZ = void 0
	export let expanded = void 0
	let options
	let internalValue
	const buttonClass = 'tp-rotationswatchv_b'
	function updateInternalValueFromValue() {
		if (Array.isArray(value)) {
			const newInternalValue = { x: value[0], y: value[1], z: value[2] }
			if (!shallowEqual(newInternalValue, internalValue)) {
				internalValue = newInternalValue
			}
		} else if (!shallowEqual(value, internalValue)) {
			internalValue = { ...value }
		}
	}
	function updateValueFromInternalValue() {
		if (Array.isArray(value)) {
			const newValue = [internalValue.x, internalValue.y, internalValue.z]
			if (!shallowEqual(newValue, value)) {
				value = newValue
			}
		} else if (!shallowEqual(internalValue, value)) {
			value = { ...internalValue }
		}
	}
	$: value, updateInternalValueFromValue()
	$: internalValue, updateValueFromInternalValue()
	$: options = {
		x: optionsX,
		y: optionsY,
		z: optionsZ,
		order,
		rotationMode: 'euler',
		unit,
		view: 'rotation',
	}
</script>

<GenericInputFolding
	bind:value={internalValue}
	bind:expanded
	on:change
	{buttonClass}
	{options}
	plugin={pluginModule}
	{...$$restProps}
/>
{#if !BROWSER && expanded && $$props.picker === 'inline'}
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
