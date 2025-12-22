<script context="module"></script>

<script>
	import ClsPad from './ClsPad.svelte'
	import GenericMonitor from './GenericMonitor.svelte'
	import { fillWith, rowsForMonitor } from '../utils'
	import { BROWSER } from 'esm-env'
	export let value
	export let multiline = void 0
	let options
	$: options = {
		multiline,
		readonly: true,
	}
</script>

<GenericMonitor {value} {options} {...$$restProps} />
{#if !BROWSER}
	{@const totalRows = rowsForMonitor($$props.bufferSize, $$props.rows, multiline) - 1}
	{#if totalRows > 0}
		<ClsPad keysAdd={fillWith('containerUnitSize', totalRows)} theme={$$props.theme} />
	{/if}
{/if}
