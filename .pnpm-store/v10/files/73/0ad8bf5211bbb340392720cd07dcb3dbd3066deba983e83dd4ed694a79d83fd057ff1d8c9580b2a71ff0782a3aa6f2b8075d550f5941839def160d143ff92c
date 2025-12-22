<script context="module"></script>

<script generics="T extends BindingObject, U extends BindingOptions, V extends BindingRef">
	import ClsPad from '../internal/ClsPad.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { enforceReadonly, getElementIndex, isRootPane } from '../utils.js'
	import { BROWSER, DEV } from 'esm-env'
	import copy from 'fast-copy'
	import { shallowEqual } from 'fast-equals'
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte'
	export let object
	export let key
	export let disabled = false
	export let label = void 0
	export let options = void 0
	export let theme = void 0
	export let ref = void 0
	export let plugin = void 0
	const registerPlugin = getContext('registerPlugin')
	const parentStore = getContext('parentStore')
	const userCreatedPane = getContext('userCreatedPane')
	let _ref
	let indexElement
	let index
	function create() {
		if (_ref) _ref.dispose()
		if (plugin !== void 0) {
			registerPlugin(plugin)
		}
		_ref = $parentStore.addBinding(object, key, {
			index,
			label,
			...options,
			disabled,
			// Why last?
		})
		ref = _ref
		_ref.on('change', onTweakpaneChange)
	}
	onMount(() => {
		index = indexElement ? getElementIndex(indexElement) : 0
	})
	onDestroy(() => {
		_ref?.dispose()
	})
	const dispatch = createEventDispatcher()
	function safeCopy(value) {
		if (value instanceof File) {
			return new File([value], value.name, {
				lastModified: value.lastModified,
				type: value.type,
			})
		}
		if (BROWSER && value instanceof HTMLImageElement) {
			const copy2 = new Image()
			copy2.src = value.src
			return copy2
		}
		return copy(value)
	}
	let lastObject = object
	let lastValue = safeCopy(object[key])
	let internalChange = false
	function onBoundValueChange(object2) {
		if (lastObject !== object2) {
			internalChange = false
		}
		if (!shallowEqual(object2[key], lastValue)) {
			lastValue = safeCopy(object2[key])
			dispatch('change', {
				value: safeCopy(object2[key]),
				origin: internalChange ? 'internal' : 'external',
			})
			if (!internalChange && _ref) {
				_ref.off('change', onTweakpaneChange)
				_ref.refresh()
				_ref.on('change', onTweakpaneChange)
			}
		}
		internalChange = false
		if (lastObject !== object2) {
			lastObject = object2
			create()
		}
	}
	function onTweakpaneChange() {
		internalChange = true
		object[key] = safeCopy(object[key])
	}
	$: DEV && enforceReadonly(_ref, ref, 'Binding', 'ref', true)
	$: options, $parentStore !== void 0 && index !== void 0 && create()
	$: _ref !== void 0 && (_ref.disabled = disabled)
	$: _ref !== void 0 && (_ref.label = label)
	$: $parentStore !== void 0 && onBoundValueChange(object)
	$: theme &&
		$parentStore !== void 0 &&
		(userCreatedPane || !isRootPane($parentStore)) &&
		console.warn(
			'Set theme on the <Pane> component, not on its children! (Check nested <Binding> components for a theme prop.)',
		)
</script>

{#if parentStore}
	{#if BROWSER}
		<div bind:this={indexElement} style="display: none;"></div>
	{:else}
		<ClsPad keysAdd={['containerVerticalPadding', 'containerUnitSize']} {theme} />
	{/if}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self
			bind:disabled
			bind:key
			bind:label
			bind:object
			bind:options
			bind:plugin
			bind:ref
			on:change
		/>
	</InternalPaneInline>
{/if}
