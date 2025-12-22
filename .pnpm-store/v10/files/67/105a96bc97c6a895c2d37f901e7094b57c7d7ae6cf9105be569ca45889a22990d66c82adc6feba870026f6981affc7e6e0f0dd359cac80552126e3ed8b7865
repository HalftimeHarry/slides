<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInput from '../internal/GenericInput.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-image'
	import { BROWSER } from 'esm-env'
	import { shallowEqual } from 'fast-equals'
	export let value = void 0
	export let fit = void 0
	export let extensions = void 0
	let internalValue = 'placeholder'
	function updateInternalValueFromValue() {
		const newInternalValue = value ?? 'placeholder'
		if (!shallowEqual(internalValue, newInternalValue)) {
			internalValue = newInternalValue
		}
	}
	function updateValueFromInternalValue() {
		if (internalValue === 'placeholder') {
			if (value !== void 0) {
				value = void 0
			}
		} else if (internalValue instanceof HTMLImageElement) {
			if (value !== internalValue.src) {
				value = internalValue.src
			}
		} else if (internalValue instanceof File) {
			console.warn('Image control does not support File objects.')
			if (value !== void 0) {
				value = void 0
			}
		} else if (value !== internalValue) {
			value = internalValue
		}
	}
	let options
	$: options = {
		extensions,
		imageFit: fit,
		view: 'input-image',
	}
	$: value, updateInternalValueFromValue()
	$: internalValue, updateValueFromInternalValue()
</script>

<GenericInput
	bind:value={internalValue}
	on:change
	{options}
	plugin={pluginModule}
	{...$$restProps}
/>
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerVerticalPadding', 2)} theme={$$props.theme} />
{/if}
