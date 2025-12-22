<script generics="T extends number | IntervalSliderValue">
	import GenericInput from './GenericInput.svelte'
	export let value
	export let options = void 0
	export let min = void 0
	export let max = void 0
	export let step = void 0
	export let pointerScale = void 0
	export let keyScale = void 0
	export let format = void 0
	export let ref = void 0
	let formatProxy = format
	$: formatProxy !== format && (formatProxy = format)
	let optionsInternal
	$: optionsInternal = {
		min,
		max,
		format: formatProxy,
		keyScale,
		pointerScale,
		step,
		...options,
	}
</script>

<GenericInput bind:value bind:ref on:change options={optionsInternal} {...$$restProps} />
