<script context="module"></script>

<script generics="T extends boolean | number | string">
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericInput from '../internal/GenericInput.svelte'
	import { fillWith } from '../utils'
	import { getGridDimensions } from '../utils.js'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-essentials'
	import { BROWSER } from 'esm-env'
	import { nanoid } from 'nanoid'
	const defaultGroupName = nanoid()
	export let groupName = void 0
	export let values
	export let value = values[0]
	export let columns = void 0
	export let rows = void 0
	export let suffix = void 0
	export let prefix = void 0
	let gridDimensions
	let options
	function cells(x, y) {
		const index = y * gridDimensions.columns + x
		if (index >= 0 && index < values.length) {
			return {
				value: values[index],
				title: `${prefix ?? ''}${values[index]}${suffix ?? ''}`,
			}
		}
		return { value: values[0], title: '' }
	}
	$: gridDimensions = getGridDimensions(values.length, columns, rows)
	$: options = {
		cells,
		groupName: groupName ?? defaultGroupName,
		size: [gridDimensions.columns, gridDimensions.rows],
		view: 'radiogrid',
	}
</script>

<GenericInput bind:value on:change {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerUnitSize', gridDimensions.rows - 1)} theme={$$props.theme} />
	<div style:height={`${2 * (gridDimensions.rows - 1)}px`}></div>
{/if}
