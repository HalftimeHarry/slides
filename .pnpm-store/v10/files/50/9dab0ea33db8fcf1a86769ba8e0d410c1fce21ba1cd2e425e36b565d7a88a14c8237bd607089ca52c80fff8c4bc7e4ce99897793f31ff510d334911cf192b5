<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericMonitor from '../internal/GenericMonitor.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-waveform'
	import { BROWSER } from 'esm-env'
	export let value
	export let max = void 0
	export let min = void 0
	export let lineStyle = void 0
	let options
	$: options = {
		min,
		max,
		lineStyle,
		readonly: true,
		view: 'waveform',
	}
</script>

<GenericMonitor {value} {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerUnitSize', 2)} theme={$$props.theme} />
{/if}
