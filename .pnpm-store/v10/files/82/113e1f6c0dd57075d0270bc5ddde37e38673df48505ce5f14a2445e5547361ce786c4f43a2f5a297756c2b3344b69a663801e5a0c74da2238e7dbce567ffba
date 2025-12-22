<script>
	import TabGroup from './TabGroup.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { getElementIndex, isRootPane } from '../utils.js'
	import { BROWSER } from 'esm-env'
	import { getContext, onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	export let title = 'Tab Page'
	export let disabled = false
	export let selected = false
	export let theme = void 0
	const tabGroupStore = getContext('tabGroupStore')
	const tabIndexStore = getContext('tabIndexStore')
	const userCreatedPane = getContext('userCreatedPane')
	const parentStore = getContext('parentStore')
	const tabPageStore = writable()
	setContext('parentStore', tabPageStore)
	let indexElement
	let index
	onMount(() => {
		index = indexElement ? getElementIndex(indexElement) : 0
	})
	function create() {
		if (!$tabGroupStore) {
			$tabGroupStore = $parentStore.addTab({
				// Tabs MUST be created with at least one page how to handle tabs with no children?
				disabled: false,
				index: $tabIndexStore,
				// Could be cleaner to have children create the tab as needed?
				pages: [{ title }],
			})
			$tabPageStore = $tabGroupStore.pages[0]
			selected = true
		} else if (!$tabPageStore && $tabGroupStore) {
			$tabPageStore = $tabGroupStore.addPage({ index, title })
		}
		$tabGroupStore?.on('select', () => {
			$tabPageStore && (selected = $tabPageStore.selected)
		})
	}
	onDestroy(() => {
		$tabPageStore?.dispose()
	})
	$: index !== void 0 && $parentStore && $tabIndexStore !== void 0 && create()
	$: $tabPageStore && ($tabPageStore.title = title)
	$: $tabPageStore && ($tabPageStore.disabled = disabled)
	$: $tabPageStore && ($tabPageStore.selected = selected)
	$: theme &&
		$parentStore &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <TabPage> components for a theme prop.)',
		)
</script>

{#if parentStore && tabIndexStore !== undefined}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;">
			<slot />
		</div>
	{:else}
		<div class="ssr-tab-page">
			<!-- Tab bar -->
			<ClsPad keysAdd={['containerUnitSize']} {theme} />
			<slot />
		</div>
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<TabGroup>
			<svelte:self {disabled} {selected} {theme} {title}>
				<slot />
			</svelte:self>
		</TabGroup>
	</InternalPaneInline>
{/if}

<style>
	/* Measure only the first (most likely active) tab */
	div.ssr-tab-page:not(:first-child) {
		overflow: hidden;
		display: none;
	}
</style>
