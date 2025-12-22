<script>
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { getElementIndex, isRootPane } from '../utils.js'
	import { BROWSER } from 'esm-env'
	import { getContext, onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	export let disabled = false
	export let selectedIndex = 0
	export let theme = void 0
	const parentStore = getContext('parentStore')
	const tabGroupStore = writable()
	setContext('tabGroupStore', tabGroupStore)
	const tabIndexStore = writable()
	setContext('tabIndexStore', tabIndexStore)
	const userCreatedPane = getContext('userCreatedPane')
	let indexElement
	onMount(() => {
		$tabIndexStore = userCreatedPane ? getElementIndex(indexElement) : 0
	})
	onDestroy(() => {
		$tabGroupStore?.dispose()
	})
	function setUpListeners(t) {
		t?.on('select', (event) => {
			selectedIndex = event.index
		})
	}
	function setSelectedIndex(index) {
		const tabPageApi = $tabGroupStore?.pages.at(index)
		if (tabPageApi && !tabPageApi.selected) tabPageApi.selected = true
	}
	$: setUpListeners($tabGroupStore)
	$: setSelectedIndex(selectedIndex)
	$: $tabGroupStore && ($tabGroupStore.disabled = disabled)
	$: theme &&
		$parentStore &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <TabGroup> components for a theme prop.)',
		)
</script>

{#if parentStore}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;">
			<slot />
		</div>
	{:else}
		<ClsPad keysAdd={['containerVerticalPadding', 'containerVerticalPadding']} {theme} />
		<div>
			<slot />
		</div>
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self bind:selectedIndex {disabled}>
			<slot />
		</svelte:self>
	</InternalPaneInline>
{/if}
