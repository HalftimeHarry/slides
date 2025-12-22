<script context="module"></script>

<script>
	import GenericSlider from '../internal/GenericSlider.svelte'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-essentials'
	import { shallowEqual } from 'fast-equals'
	export let value
	export let meanValue = void 0
	export let wide = void 0
	let internalValue
	function updateInternalValueFromValue() {
		const newInternalValue = Array.isArray(value) ? { min: value[0], max: value[1] } : value
		if (!shallowEqual(internalValue, newInternalValue)) {
			internalValue = { ...newInternalValue }
		}
	}
	function updateValueFromInternalValue() {
		if (Array.isArray(value)) {
			const newValue = [internalValue.min, internalValue.max]
			if (!shallowEqual(value, newValue)) {
				value = newValue
			}
		} else if (!shallowEqual(value, internalValue)) {
			value = { ...internalValue }
		}
	}
	function updateValueFromMean() {
		if (meanValue !== void 0) {
			const r = internalValue.max - internalValue.min
			const valueFromMean = { min: meanValue - r / 2, max: meanValue + r / 2 }
			if (!shallowEqual(valueFromMean, internalValue)) {
				internalValue = valueFromMean
			}
		}
	}
	let ref
	function updateWide(wide2) {
		const inputField = ref?.element.querySelector('div.tp-rsltxtv_t')
		if (wide2) {
			inputField?.style.setProperty('display', 'none')
		} else {
			inputField?.style.removeProperty('display')
		}
	}
	$: ref && wide !== void 0 && updateWide(wide)
	$: value, updateInternalValueFromValue()
	$: internalValue, updateValueFromInternalValue()
	$: meanValue = (internalValue.min + internalValue.max) / 2
	$: meanValue, updateValueFromMean()
</script>

<GenericSlider
	bind:value={internalValue}
	bind:ref
	on:change
	plugin={pluginModule}
	{...$$restProps}
/>
