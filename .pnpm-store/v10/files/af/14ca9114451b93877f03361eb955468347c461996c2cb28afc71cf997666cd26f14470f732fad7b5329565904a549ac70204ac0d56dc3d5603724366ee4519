<script context="module"></script>

<script>
	import GenericSlider from '../internal/GenericSlider.svelte'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-camerakit'
	export let value
	export let series = void 0
	export let unit = void 0
	export let wide = void 0
	let options
	$: options = {
		series,
		unit,
		view: 'cameraring',
		wide,
	}
</script>

<GenericSlider bind:value on:change {options} plugin={pluginModule} {...$$restProps} />
