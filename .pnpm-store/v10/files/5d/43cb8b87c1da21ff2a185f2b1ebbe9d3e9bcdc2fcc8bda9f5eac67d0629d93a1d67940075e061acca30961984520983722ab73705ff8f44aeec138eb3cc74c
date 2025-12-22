<script context="module"></script>

<script
	generics="T extends any, U extends GenericInputFoldingOptions = GenericInputFoldingOptions, V extends GenericInputFoldingRef = GenericInputFoldingRef"
>
	import GenericInput from './GenericInput.svelte'
	import { updateCollapsibility } from '../utils.js'
	export let value
	export let ref = void 0
	export let options = void 0
	export let userExpandable = true
	export let expanded = false
	export let buttonClass = ''
	export let picker = void 0
	let optionsInternal
	let gotBinding = false
	const initialExpanded = expanded
	let internalExpanded = initialExpanded
	$: if (!gotBinding && ref) {
		gotBinding = true
		ref.controller?.valueController?.foldable_?.value('expanded').emitter.on('change', (event) => {
			internalExpanded = event.rawValue
			expanded = internalExpanded
		})
	}
	$: optionsInternal = {
		...options,
		expanded: initialExpanded,
		// Only set once
		picker,
	}
	$: ref && buttonClass && updateCollapsibility(userExpandable ?? true, ref.element, buttonClass)
	$: ref &&
		buttonClass &&
		expanded !== internalExpanded &&
		ref.element.querySelectorAll(`.${buttonClass}`).length > 0 &&
		ref.element.querySelector(`.${buttonClass}`)?.click()
</script>

<GenericInput bind:value bind:ref on:change options={optionsInternal} {...$$restProps} />
