<script context="module"></script>

<script>
	import Text from '../control/Text.svelte'
	import GenericBinding from '../internal/GenericBinding.svelte'
	export let value
</script>

{#if typeof value === 'string'}
	<Text bind:value on:change {...$$restProps} />
{:else}
	<GenericBinding bind:value on:change {...$$restProps} />
{/if}
