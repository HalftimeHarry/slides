<script context="module"></script>

<script>
	import Blade from '../core/Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-profiler'
	import { BROWSER } from 'esm-env'
	import { createEventDispatcher, onDestroy } from 'svelte'
	function _measure(name, functionToMeasure) {
		profilerBlade?.measure(name, functionToMeasure)
	}
	async function _measureAsync(name, functionToMeasure) {
		await profilerBlade?.measureAsync(name, functionToMeasure)
	}
	export let label = void 0
	export let bufferSize = void 0
	export let calcMode = void 0
	export let deltaUnit = void 0
	export let fractionDigits = void 0
	export let measureHandler = void 0
	export const measure = _measure
	export const measureAsync = _measureAsync
	export let interval = void 0
	export let targetDelta = void 0
	let profilerBlade
	let options
	let observer = void 0
	const dispatch = createEventDispatcher()
	onDestroy(() => {
		stopObservingMeasuredValue()
	})
	function startObservingMeasuredValue() {
		stopObservingMeasuredValue()
		const targetNode = profilerBlade.controller.view.valueElement
		if (!targetNode?.innerHTML) return
		observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === 'characterData' || mutation.type === 'childList') {
					const fpsText = mutation.target.textContent
					if (fpsText !== null) {
						const delta = Number.parseFloat(fpsText)
						!Number.isNaN(delta) && dispatch('change', delta)
					}
				}
			}
		})
		observer.observe(targetNode, { characterData: true, childList: true, subtree: true })
	}
	function stopObservingMeasuredValue() {
		if (observer) {
			observer.disconnect()
			observer = void 0
		}
	}
	$: profilerBlade && startObservingMeasuredValue()
	$: options = {
		bufferSize,
		calcMode,
		deltaUnit,
		fractionDigits,
		interval,
		label,
		measureHandler,
		targetDelta,
		view: 'profiler',
	}
</script>

<Blade bind:ref={profilerBlade} {options} plugin={pluginModule} {...$$restProps} />
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerUnitSize', 2)} theme={$$props.theme} />
	<!-- TODO Magic number for label... -->
	<ClsPad extra={14.287} keysAdd={fillWith('containerVerticalPadding', 1)} theme={$$props.theme} />
{/if}
