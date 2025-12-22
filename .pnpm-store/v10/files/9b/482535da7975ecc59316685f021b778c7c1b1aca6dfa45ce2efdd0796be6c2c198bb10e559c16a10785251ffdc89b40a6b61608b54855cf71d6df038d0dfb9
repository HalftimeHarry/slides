<script context="module"></script>

<script generics="T extends any">
	import Blade from '../core/Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import {} from '../utils'
	import { BROWSER } from 'esm-env'
	import copy from 'fast-copy'
	import { shallowEqual } from 'fast-equals'
	import { createEventDispatcher } from 'svelte'
	export let value
	export let options
	export let label = void 0
	const dispatch = createEventDispatcher()
	let listBlade
	let bladeOptions
	function addEvent() {
		listBlade.on('change', (event) => {
			if (!shallowEqual(event.value, value)) {
				value = event.value
				dispatch('change', {
					value: copy(value),
					origin: 'internal',
				})
			}
		})
	}
	function getInitialValue() {
		if (value === void 0) {
			const internalOptions = getInternalOptions(options)
			if (Array.isArray(internalOptions)) {
				value = internalOptions[0].value
				return value
			}
			value = internalOptions[Object.keys(internalOptions)[0]]
			return value
		}
		return value
	}
	function isArrayStyleListOptions(object) {
		return (
			Array.isArray(object) &&
			object.every(
				(item) => typeof item === 'object' && item !== null && 'text' in item && 'value' in item,
			)
		)
	}
	function isObjectStyleListOptions(object) {
		return typeof object === 'object' && object !== null && !Array.isArray(object)
	}
	function getInternalOptions(options2) {
		return isArrayStyleListOptions(options2)
			? options2
			: isObjectStyleListOptions(options2)
				? options2
				: options2.map((value2) => ({
						value: value2,
						text: typeof value2 === 'object' ? JSON.stringify(value2) : String(value2),
					}))
	}
	function setValue() {
		if (!shallowEqual(listBlade.value, value)) {
			listBlade.value = value
			dispatch('change', {
				value: copy(value),
				origin: 'external',
			})
		}
	}
	$: bladeOptions = {
		value: getInitialValue(),
		label,
		options: getInternalOptions(options),
		view: 'list',
	}
	$: listBlade && addEvent()
	$: value, listBlade && setValue()
</script>

<Blade bind:ref={listBlade} options={bladeOptions} {...$$restProps} />
{#if !BROWSER}
	<ClsPad keysAdd={['containerUnitSize']} theme={$$props.theme} />
{/if}
