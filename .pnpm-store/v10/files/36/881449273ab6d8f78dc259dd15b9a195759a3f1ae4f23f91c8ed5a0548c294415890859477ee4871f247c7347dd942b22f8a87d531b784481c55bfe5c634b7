<script context="module"></script>

<script>
	import Blade from '../core/Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import { fillWith } from '../utils'
	import { getGridDimensions } from '../utils.js'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-essentials'
	import { BROWSER } from 'esm-env'
	import { createEventDispatcher } from 'svelte'
	export let columns = void 0
	export let rows = void 0
	export let buttons = []
	export let label = void 0
	const dispatch = createEventDispatcher()
	let options
	let gridBlade
	let gridDimensions
	function cells(x, y) {
		const index = y * gridDimensions.columns + x
		if (index >= 0 && index < buttons.length) {
			return {
				title: `${buttons[index]}`,
			}
		}
		return { title: '' }
	}
	$: gridDimensions = getGridDimensions(buttons.length, columns, rows)
	$: options = {
		cells,
		label,
		size: [gridDimensions.columns, gridDimensions.rows],
		view: 'buttongrid',
	}
	$: gridBlade?.on('click', (event) => {
		dispatch('click', {
			cell: { x: event.index[0], y: event.index[1] },
			index: event.index[1] * gridDimensions.columns + event.index[0],
			label: event.cell.title,
		})
	})
</script>

<Blade bind:ref={gridBlade} {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerUnitSize', gridDimensions.rows)} theme={$$props.theme} />
	<ClsPad keysAdd={fillWith('containerVerticalPadding', 2)} theme={$$props.theme} />
{/if}
