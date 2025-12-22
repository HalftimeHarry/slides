<script>
	import Blade from './Blade.svelte'
	import ClsPad from '../internal/ClsPad.svelte'
	import { BROWSER } from 'esm-env'
	const options = {
		view: 'separator',
	}
</script>

{#if BROWSER}
	<Blade {options} {...$$restProps} />
{:else}
	<ClsPad extra={2} keysAdd={['containerVerticalPadding']} theme={$$props.theme} />
{/if}
