<script context="module"></script>

<script generics="U extends BladeOptions, V extends BladeRef">
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { enforceReadonly, getElementIndex, isRootPane } from '../utils.js'
	import { BROWSER, DEV } from 'esm-env'
	import { getContext, onDestroy, onMount } from 'svelte'
	export let options
	export let disabled = false
	export let theme = void 0
	export let ref = void 0
	export let plugin = void 0
	const registerPlugin = getContext('registerPlugin')
	const parentStore = getContext('parentStore')
	const userCreatedPane = getContext('userCreatedPane')
	let indexElement
	let index
	let _ref
	function create() {
		if (_ref) _ref.dispose()
		if (plugin !== void 0) {
			registerPlugin(plugin)
		}
		_ref = $parentStore.addBlade({
			index,
			...options,
			disabled,
			// Why last?
		})
		ref = _ref
	}
	onMount(() => {
		index = indexElement ? getElementIndex(indexElement) : 0
	})
	onDestroy(() => {
		_ref?.dispose()
	})
	$: DEV && enforceReadonly(_ref, ref, 'Blade', 'ref', true)
	$: options && $parentStore && index !== void 0 && create()
	$: _ref && (_ref.disabled = disabled)
	$: theme &&
		$parentStore &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <Blade> components for a theme prop.)',
		)
</script>

{#if parentStore}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;"></div>
	{:else}
		<ClsPad keysAdd={['containerVerticalPadding']} {theme} />
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self bind:disabled bind:options bind:plugin bind:ref />
	</InternalPaneInline>
{/if}
