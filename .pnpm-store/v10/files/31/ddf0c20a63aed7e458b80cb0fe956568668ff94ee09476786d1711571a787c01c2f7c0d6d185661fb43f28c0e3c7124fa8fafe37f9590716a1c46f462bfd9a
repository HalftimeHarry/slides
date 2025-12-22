<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import GenericBladeFolding from '../internal/GenericBladeFolding.svelte'
	import { fillWith } from '../utils'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-essentials'
	import { CubicBezier } from '@kitschpatrol/tweakpane-plugin-essentials'
	import { BROWSER } from 'esm-env'
	import copy from 'fast-copy'
	import { shallowEqual } from 'fast-equals'
	import { createEventDispatcher } from 'svelte'
	export let value
	export let label = void 0
	export let expanded = void 0
	const dispatch = createEventDispatcher()
	let options
	let cubicBezierBlade
	const buttonClass = 'tp-cbzv_b'
	function getValue() {
		return Array.isArray(value) ? value : [value.x1, value.y1, value.x2, value.y2]
	}
	function setValue() {
		if (
			!shallowEqual(getValue(), [
				cubicBezierBlade.value.x1,
				cubicBezierBlade.value.y1,
				cubicBezierBlade.value.x2,
				cubicBezierBlade.value.y2,
			])
		) {
			cubicBezierBlade.value = Array.isArray(value)
				? new CubicBezier(value[0], value[1], value[2], value[3])
				: new CubicBezier(value.x1, value.y1, value.x2, value.y2)
			dispatch('change', {
				value: copy(value),
				origin: 'external',
			})
		}
	}
	function addEvent() {
		cubicBezierBlade.on('change', (event) => {
			if (
				!shallowEqual(getValue(), [event.value.x1, event.value.y1, event.value.x2, event.value.y2])
			) {
				value = Array.isArray(value)
					? [event.value.x1, event.value.y1, event.value.x2, event.value.y2]
					: {
							x1: event.value.x1,
							y1: event.value.y1,
							x2: event.value.x2,
							y2: event.value.y2,
						}
				dispatch('change', {
					value: copy(value),
					origin: 'internal',
				})
			}
		})
	}
	$: options = {
		value: getValue(),
		label,
		view: 'cubicbezier',
	}
	$: cubicBezierBlade && addEvent()
	$: value, cubicBezierBlade && setValue()
</script>

<GenericBladeFolding
	bind:expanded
	bind:ref={cubicBezierBlade}
	{buttonClass}
	{options}
	plugin={pluginModule}
	{...$$restProps}
/>
{#if !BROWSER}
	<ClsPad keysAdd={fillWith('containerUnitSize', 1)} theme={$$props.theme} />
	{#if expanded && $$props.picker === 'inline'}
		<ClsPad keysAdd={fillWith('containerUnitSize', 6)} theme={$$props.theme} />
		<ClsPad keysAdd={fillWith('containerUnitSpacing', 2)} theme={$$props.theme} />
	{/if}
{/if}
