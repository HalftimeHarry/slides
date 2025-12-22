<script>
	import Blade from '../core/Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import { BROWSER } from 'esm-env'
	export let maxHeight = void 0
	export let resetStyle = true
	const options = {
		view: 'separator',
	}
	let ref
	let sourceDiv
	$: ref?.element.replaceChildren(sourceDiv)
</script>

{#if BROWSER}
	<Blade bind:ref {options} {...$$restProps} />
{:else}
	<ClsPad
		keysAdd={['containerVerticalPadding', 'containerVerticalPadding']}
		theme={$$props.theme}
	/>
{/if}

<div bind:this={sourceDiv} class="element skip-element-index">
	<div
		class="element-container"
		style:height={BROWSER ? null : `${maxHeight}px`}
		style:max-height={maxHeight === undefined ? null : `${maxHeight}px`}
		style:overflow={BROWSER ? null : 'hidden'}
	>
		<div class:reset={resetStyle}>
			<slot />
		</div>
	</div>
</div>

<style>
	div.element {
		padding-right: var(--cnt-hp);
		padding-left: var(--cnt-hp);
	}

	div.element-container {
		overflow: hidden;
		border-radius: var(--bld-br);
	}

	div.reset {
		all: initial;
	}
</style>
