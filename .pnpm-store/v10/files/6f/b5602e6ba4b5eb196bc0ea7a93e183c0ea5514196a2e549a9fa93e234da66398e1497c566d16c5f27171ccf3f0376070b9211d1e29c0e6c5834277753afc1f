<script context="module"></script>

<script
	generics="T extends any, U extends GenericInputOptions = GenericInputOptions, V extends GenericInputRef = GenericInputRef"
>
	import GenericBinding from './GenericBinding.svelte'
	export let options = void 0
	export let ref = void 0
	export let value
	let optionsInternal
	$: optionsInternal = {
		...options,
		readonly: false,
	}
</script>

<GenericBinding bind:value bind:ref on:change options={optionsInternal} {...$$restProps} />
