<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { getElementIndex, isRootPane, updateCollapsibility } from '../utils.js'
	import { BROWSER } from 'esm-env'
	import { getContext, onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	export let title = 'Folder'
	export let disabled = false
	export let expanded = true
	export let userExpandable = true
	export let theme = void 0
	const parentStore = getContext('parentStore')
	const folderStore = writable()
	const userCreatedPane = getContext('userCreatedPane')
	let indexElement
	let index
	let folderRef = void 0
	setContext('parentStore', folderStore)
	function create() {
		$folderStore = $parentStore.addFolder({
			disabled,
			expanded,
			index,
			title,
		})
		$folderStore.on('fold', () => {
			expanded = $folderStore.expanded
		})
		folderRef = $folderStore
	}
	onMount(() => {
		index = indexElement ? getElementIndex(indexElement) : 0
	})
	onDestroy(() => {
		$folderStore?.dispose()
	})
	$: $parentStore && !folderRef && index !== void 0 && create()
	$: folderRef && updateCollapsibility(userExpandable, folderRef.element, 'tp-fldv_b', 'tp-fldv_m')
	$: folderRef && (folderRef.title = title)
	$: folderRef && (folderRef.disabled = disabled)
	$: folderRef && expanded !== void 0 && (folderRef.expanded = expanded)
	$: theme &&
		$parentStore &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <Folder> components for a theme prop.)',
		)
</script>

{#if parentStore}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;">
			<slot />
		</div>
	{:else}
		<ClsPad keysAdd={['containerUnitSize']} {theme} />
		{#if expanded}
			<ClsPad keysAdd={['containerVerticalPadding', 'containerVerticalPadding']} {theme} />
			<slot />
		{/if}
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self bind:expanded {disabled} {title} {userExpandable}>
			<slot />
		</svelte:self>
	</InternalPaneInline>
{/if}
