<script context="module"></script>

<script>
	import GenericSlider from '../internal/GenericSlider.svelte'
	import * as pluginModule from '@kitschpatrol/tweakpane-plugin-inputs'
	export let value
	export let wide = void 0
	let options
	$: options = {
		view: 'stepper',
	}
	let ref
	function updateWide(wide2) {
		const inputField = ref?.element.querySelector('div.tp-stepv_t')
		const buttonContainer = ref?.element.querySelector('div.tp-stepv_s')
		const buttons = buttonContainer?.querySelectorAll('button')
		if (wide2) {
			inputField?.style.setProperty('display', 'none')
			buttonContainer?.style.setProperty('flex', '1')
			for (const button of buttons ?? []) {
				button.style.setProperty('flex', '1')
			}
		} else {
			inputField?.style.removeProperty('display')
		}
	}
	$: ref && wide !== void 0 && updateWide(wide)
</script>

<GenericSlider bind:value bind:ref on:change {options} plugin={pluginModule} {...$$restProps} />
