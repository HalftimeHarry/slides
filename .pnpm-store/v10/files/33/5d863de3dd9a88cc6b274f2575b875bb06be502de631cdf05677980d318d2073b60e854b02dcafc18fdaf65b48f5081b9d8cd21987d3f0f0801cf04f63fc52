<script context="module"></script>

<script
	generics="T extends any, U extends GenericMonitorOptions, V extends GenericMonitorRef = GenericMonitorRef"
>
	import GenericBinding from './GenericBinding.svelte'
	export let value
	export let ref = void 0
	export let options = void 0
	export let rows = void 0
	export let bufferSize = void 0
	export let interval = void 0
	let optionsInternal
	$: optionsInternal = {
		bufferSize,
		interval: interval ?? 0,
		// Zero confirmed as never updating (not same interface as setInterval())
		rows,
		...options,
		readonly: true,
	}
</script>

<GenericBinding {value} bind:ref options={optionsInternal} {...$$restProps} />
