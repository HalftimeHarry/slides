<script context="module"></script>

<script>
	import GenericInput from '../internal/GenericInput.svelte'
	import {} from '../utils.js'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-textarea'
	import { BROWSER } from 'esm-env'
	import { createEventDispatcher, onDestroy } from 'svelte'
	export let value
	export let live = true
	export let rows = void 0
	export let placeholder = void 0
	const dispatch = createEventDispatcher()
	let _value = value
	let ref
	let options
	onDestroy(() => {
		updateListeners(live ?? true, true)
	})
	function onBlur(event) {
		value = event.target.value
		lastText = value
		dispatch('change', { value, origin: 'internal' })
	}
	function onInput(event) {
		value = event.target.value
		lastText = value
		dispatch('change', { value, origin: 'internal' })
	}
	function updateListeners(live2, destroy = false) {
		const input = ref?.controller.valueController.view.element.querySelector('textarea')
		input?.removeEventListener('blur', onBlur)
		input?.removeEventListener('input', onInput)
		!destroy && live2 && input?.addEventListener('input', onInput)
		!destroy && !live2 && input?.addEventListener('blur', onBlur)
	}
	let lastText = value
	function onBoundValueChange(text) {
		if (text !== lastText) {
			dispatch('change', { value: text, origin: 'external' })
			lastText = text
		}
	}
	$: _value = value
	$: ref && live !== void 0 && updateListeners(live)
	$: options = {
		placeholder,
		rows,
		view: 'textarea',
	}
	$: ref && onBoundValueChange(_value)
</script>

<GenericInput value={_value} bind:ref {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	<!-- TODO magic numbers -->
	<div style:height={`calc(${16 * (rows ?? 3)}px - 14px)`}></div>
	<!-- <ClsPad keysAdd={fillWith('containerUnitSize', 1)} theme={$$props.theme} /> -->
{/if}
