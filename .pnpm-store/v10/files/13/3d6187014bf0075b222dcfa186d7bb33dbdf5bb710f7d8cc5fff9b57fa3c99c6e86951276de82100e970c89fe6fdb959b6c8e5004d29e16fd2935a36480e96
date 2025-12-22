<script context="module"></script>

<script>
	import GenericInput from '../internal/GenericInput.svelte'
	import { onDestroy } from 'svelte'
	export let value
	export let live = true
	const options = { view: 'text' }
	let ref
	onDestroy(() => {
		updateListeners(live ?? true, true)
	})
	function onInput(event) {
		event.target?.dispatchEvent(new Event('change'))
	}
	function updateListeners(live2, destroy = false) {
		const input = ref?.controller.valueController.view.element.querySelector('input')
		input?.removeEventListener('input', onInput)
		!destroy && live2 && input?.addEventListener('input', onInput)
	}
	$: ref && live !== void 0 && updateListeners(live)
</script>

<GenericInput bind:value bind:ref on:change {options} {...$$restProps} />
