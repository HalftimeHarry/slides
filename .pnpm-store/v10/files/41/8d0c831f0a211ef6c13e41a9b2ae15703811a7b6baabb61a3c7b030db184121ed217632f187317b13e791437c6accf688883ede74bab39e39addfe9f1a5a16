<script generics="W extends number | string | boolean | unknown">
	import InternalMonitorBoolean from '../internal/InternalMonitorBoolean.svelte'
	import InternalMonitorNumber from '../internal/InternalMonitorNumber.svelte'
	import InternalMonitorString from '../internal/InternalMonitorString.svelte'
	export let value
</script>

{#if typeof value === 'number'}
	<InternalMonitorNumber {value} {...$$restProps} />
{:else if typeof value === 'boolean'}
	<InternalMonitorBoolean {value} {...$$restProps} />
{:else if typeof value === 'string'}
	<InternalMonitorString {value} {...$$restProps} />
{/if}
