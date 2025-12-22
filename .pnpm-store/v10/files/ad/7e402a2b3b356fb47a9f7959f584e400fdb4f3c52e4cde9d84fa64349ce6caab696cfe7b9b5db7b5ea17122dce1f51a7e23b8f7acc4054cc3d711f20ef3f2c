<script context="module"></script>

<script>
	import GenericSlider from '../internal/GenericSlider.svelte'
	import {} from 'svelte'
	export let value
	export let wide = void 0
	let ref
	function updateWide(wide2) {
		const inputField = ref?.element.querySelector('div.tp-sldtxtv_t')
		if (wide2) {
			inputField?.style.setProperty('display', 'none')
		} else {
			inputField?.style.removeProperty('display')
		}
	}
	$: ref && wide !== void 0 && updateWide(wide)
</script>

<GenericSlider bind:value bind:ref on:change {...$$restProps} />
