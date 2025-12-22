<script context="module"></script>

<script>
	import Text from '../control/Text.svelte'
	import Binding from '../core/Binding.svelte'
	import Folder from '../core/Folder.svelte'
	import InternalPaneInline from '../internal/InternalPaneInline.svelte'
	import { isColorObject } from '@tweakpane/core'
	import { Point2d } from '@tweakpane/core/dist/input-binding/point-2d/model/point-2d.js'
	import { Point3d } from '@tweakpane/core/dist/input-binding/point-3d/model/point-3d.js'
	import { Point4d } from '@tweakpane/core/dist/input-binding/point-4d/model/point-4d.js'
	import copy from 'fast-copy'
	import { createEventDispatcher, getContext } from 'svelte'
	export let theme = void 0
	export let prettyLabels = true
	export let object
	const dispatch = createEventDispatcher()
	const parentStore = getContext('parentStore')
	function isPointObject(testObject) {
		return (
			Point2d.isObject(testObject) || Point3d.isObject(testObject) || Point4d.isObject(testObject)
		)
	}
	function prettify(value, active = true) {
		if (!active) return value
		return value
			.replaceAll(/([\da-z])([A-Z])/g, '$1 $2')
			.replaceAll(/[_-]+/g, ' ')
			.toLowerCase()
			.replaceAll(/\b[a-z]/g, (letter) => letter.toUpperCase())
	}
	function changeEventAggregator(event) {
		dispatch('change', {
			value: copy(object),
			origin: event.detail.origin,
		})
	}
</script>

{#if parentStore}
	{#each Object.keys(object) as key (key)}
		{#if object[key].constructor === Object && !isColorObject(object[key]) && !isPointObject(object[key])}
			<Folder title={prettify(key, prettyLabels)}>
				<svelte:self
					bind:object={object[key]}
					bind:prettyLabels
					on:change={changeEventAggregator}
				/>
			</Folder>
		{:else if typeof object[key] === 'string'}
			<Text
				bind:value={object[key]}
				on:change={changeEventAggregator}
				label={prettify(key, prettyLabels)}
			/>
		{:else}
			<Binding
				bind:object
				on:change={changeEventAggregator}
				{key}
				label={prettify(key, prettyLabels)}
			/>
		{/if}
	{/each}
{:else}
	<InternalPaneInline {theme} userCreatedPane={false}>
		<svelte:self bind:object bind:prettyLabels on:change={changeEventAggregator} />
	</InternalPaneInline>
{/if}
