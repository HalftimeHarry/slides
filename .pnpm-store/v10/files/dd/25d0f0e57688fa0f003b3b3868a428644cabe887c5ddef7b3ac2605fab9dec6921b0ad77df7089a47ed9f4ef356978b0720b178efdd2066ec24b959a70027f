<script context="module"></script>

<script>
	import ClsPad from './ClsPad.svelte'
	import GenericMonitor from './GenericMonitor.svelte'
	import { fillWith, rowsForMonitor } from '../utils'
	import { BROWSER } from 'esm-env'
	export let value
</script>

<GenericMonitor {value} {...$$restProps} />
{#if !BROWSER}
	{@const totalRows = rowsForMonitor($$props.bufferSize, $$props.rows) - 1}
	{#if totalRows > 0}
		<ClsPad keysAdd={fillWith('containerUnitSize', totalRows)} theme={$$props.theme} />
	{/if}
{/if}
