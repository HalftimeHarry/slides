<script context="module"></script>

<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { getElementIndex, isRootPane } from '../utils.js'
	import { BROWSER } from 'esm-env'
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte'
	export let title = 'Button'
	export let label = void 0
	export let disabled = false
	export let theme = void 0
	const parentStore = getContext('parentStore')
	const userCreatedPane = getContext('userCreatedPane')
	const dispatch = createEventDispatcher()
	let indexElement
	let button
	let index
	function create() {
		if (button) button.dispose()
		button = $parentStore.addButton({
			disabled,
			index,
			label,
			title,
		})
		button.on('click', () => {
			dispatch('click')
		})
	}
	onMount(() => {
		index = indexElement ? getElementIndex(indexElement) : 0
	})
	onDestroy(() => {
		button?.dispose()
	})
	$: index !== void 0 && $parentStore && !button && create()
	$: button && (button.title = title)
	$: button && (button.label = label)
	$: button && (button.disabled = disabled)
	$: theme &&
		$parentStore &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <Button> components for a theme prop.)',
		)
</script>

{#if parentStore}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;"></div>
	{:else}
		<ClsPad keysAdd={['containerUnitSize', 'containerVerticalPadding']} {theme} />
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self on:click {disabled} {label} {title} />
	</InternalPaneInline>
{/if}
