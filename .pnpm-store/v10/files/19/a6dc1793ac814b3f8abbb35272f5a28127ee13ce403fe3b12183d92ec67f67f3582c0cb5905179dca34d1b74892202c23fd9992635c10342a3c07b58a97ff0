<script context="module"></script>

<script generics="T extends BladeOptions, U extends BladeRef">
	import Blade from '../core/Blade.svelte'
	import { updateCollapsibility } from '../utils'
	export let options
	export let ref = void 0
	export let userExpandable = true
	export let expanded = void 0
	export let buttonClass = ''
	export let picker = void 0
	let gotBlade = false
	const initialExpanded = expanded
	let internalExpanded = initialExpanded
	$: if (!gotBlade && ref) {
		gotBlade = true
		ref.controller?.valueController?.foldable_?.value('expanded').emitter.on('change', (event) => {
			internalExpanded = event.rawValue
			expanded = internalExpanded
		})
	}
	$: options = {
		...options,
		expanded: initialExpanded,
		// Only set once
		picker,
	}
	$: ref &&
		buttonClass !== void 0 &&
		updateCollapsibility(userExpandable ?? true, ref.element, buttonClass)
	$: ref &&
		buttonClass !== void 0 &&
		expanded !== internalExpanded &&
		ref.element.querySelectorAll(`.${buttonClass}`).length > 0 &&
		ref.element.querySelector(`.${buttonClass}`).click()
</script>

<Blade bind:ref {options} {...$$restProps} />
