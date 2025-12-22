<script>
	import GenericPane from './GenericPane.svelte'
	import { removeKeys } from '../utils.js'
	export let expanded = void 0
	export let x = void 0
	export let y = void 0
	export let width = void 0
	export let title = 'Tweakpane'
	export let tpPane = void 0
	let paneContainer
	$: tpPane?.element.parentElement && (paneContainer = tpPane.element.parentElement)
	$: paneContainer !== void 0 &&
		x !== void 0 &&
		(paneContainer.style.setProperty('right', 'unset'),
		paneContainer.style.setProperty('left', `${x}px`))
	$: paneContainer !== void 0 && y !== void 0 && paneContainer.style.setProperty('top', `${y}px`)
	$: paneContainer !== void 0 &&
		width !== void 0 &&
		paneContainer.style.setProperty('width', `${width}px`)
</script>

<div style="display: none;">
	<GenericPane bind:expanded bind:tpPane {title} {...removeKeys($$restProps, 'position')}>
		<slot />
	</GenericPane>
</div>
