<script>
	import GenericPane from './GenericPane.svelte'
	import { removeKeys } from '../utils.js'
	import { onMount } from 'svelte'
	export let expanded = void 0
	export let width = void 0
	export let tpPane = void 0
	export let theme = {
		baseBorderRadius: '0px',
		baseShadowColor: 'hsla(0, 0%, 0%, 0)',
		// BladeBorderRadius: '0px'
	}
	let containerElement
	onMount(() => {
		if (tpPane) {
			const fixedContainer = tpPane.element.parentElement
			containerElement.append(tpPane.element)
			fixedContainer?.remove()
		} else {
			console.warn('tpPane is undefined')
		}
	})
</script>

<div bind:this={containerElement} style:width={width === undefined ? null : `${width}px`}>
	<GenericPane bind:expanded bind:tpPane {theme} {...removeKeys($$restProps, 'position')}>
		<slot />
	</GenericPane>
</div>
