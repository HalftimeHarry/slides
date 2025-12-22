<script context="module"></script>

<script>
	import Blade from '../core/Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-essentials'
	import { BROWSER } from 'esm-env'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	export let rows = void 0
	export let interval = void 0
	export let max = void 0
	export let min = void 0
	export let label = void 0
	let implicitMode = true
	export function begin() {
		implicitMode = false
		ref?.begin()
	}
	export function end() {
		implicitMode = false
		ref?.end()
	}
	let ref
	let requestId
	const dispatch = createEventDispatcher()
	onMount(() => {
		startInternalLoop()
	})
	onDestroy(() => {
		stopInternalLoop()
	})
	function startInternalLoop() {
		loop()
	}
	function loop() {
		ref?.end()
		ref?.begin()
		requestId = requestAnimationFrame(loop)
	}
	function stopInternalLoop() {
		requestId && cancelAnimationFrame(requestId)
	}
	function addListeners() {
		ref.on('tick', () => {
			if (ref.fps !== null) {
				dispatch('change', ref.fps)
			}
		})
	}
	let options
	$: options = {
		min,
		max,
		interval,
		label,
		rows,
		view: 'fpsgraph',
	}
	$: ref !== void 0 && addListeners()
	$: !implicitMode && stopInternalLoop()
</script>

<Blade bind:ref {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	{#if rows}
		<ClsPad keysAdd={fillWith('containerUnitSize', rows)} theme={$$props.theme} />
	{:else}
		<ClsPad keysAdd={fillWith('containerUnitSize', 2)} theme={$$props.theme} />
	{/if}
{/if}
