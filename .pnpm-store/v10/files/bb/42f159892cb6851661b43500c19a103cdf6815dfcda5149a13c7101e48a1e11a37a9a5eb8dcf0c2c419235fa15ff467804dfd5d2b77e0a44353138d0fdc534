<script context="module"></script>

<script>
	import ClsPad from './ClsPad.svelte'
	import GenericMonitor from './GenericMonitor.svelte'
	import { fillWith, rowsForMonitor } from '../utils.js'
	import { BROWSER } from 'esm-env'
	export let value
	export let graph = void 0
	export let format = void 0
	export let max = void 0
	export let min = void 0
	let options
	let formatProxy = format
	$: formatProxy !== format && (formatProxy = format)
	$: options = {
		min,
		max,
		format: formatProxy,
		readonly: true,
		view: graph ? 'graph' : void 0,
	}
</script>

<GenericMonitor {value} {options} {...$$restProps} />
{#if !BROWSER}
	{@const totalRows = rowsForMonitor($$props.bufferSize, $$props.rows, graph) - 1}
	{#if totalRows > 0}
		<ClsPad keysAdd={fillWith('containerUnitSize', totalRows)} theme={$$props.theme} />
	{/if}
{/if}
