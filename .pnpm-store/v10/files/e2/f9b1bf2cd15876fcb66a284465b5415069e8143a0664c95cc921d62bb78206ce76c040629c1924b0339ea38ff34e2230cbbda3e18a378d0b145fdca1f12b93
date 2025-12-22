<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInput from '../internal/GenericInput.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-file-import'
	import { BROWSER } from 'esm-env'
	import { shallowEqual } from 'fast-equals'
	export let value = void 0
	export let rows = void 0
	export let invalidExtensionMessage = void 0
	export let extensions = void 0
	let internalValue
	function updateInternalValueFromValue() {
		const newInternalValue = value ?? ''
		if (!shallowEqual(internalValue, newInternalValue)) {
			internalValue = newInternalValue
		}
	}
	function updateValueFromInternalValue() {
		if (internalValue instanceof File) {
			if (!shallowEqual(value, internalValue)) {
				value = internalValue
			}
		} else if (value !== void 0) {
			value = void 0
		}
	}
	let options
	$: options = {
		extensions,
		filetypes: extensions,
		invalidFiletypeMessage: invalidExtensionMessage,
		lineCount: rows,
		view: 'file-input',
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
	{#if rows}
		<ClsPad keysAdd={fillWith('containerUnitSize', rows)} theme={$$props.theme} />
	{:else}
		<ClsPad keysAdd={fillWith('containerUnitSize', 3)} theme={$$props.theme} />
	{/if}
{/if}
