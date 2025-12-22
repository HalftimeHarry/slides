<script>
	import { getValueOrFallback } from '../theme.js'
	import { DEV } from 'esm-env'
	export let theme = void 0
	export let keysAdd = []
	export let keysSubtract = []
	export let extra = void 0
	const showDebugBlocks = false
	function getRandomCssColor() {
		return '#' + Math.floor(Math.random() * 16777215).toString(16)
	}
	function getPixelValue(s) {
		return Number.parseFloat(s.replace('px', ''))
	}
	function getTotal(add, sub, extra2 = 0) {
		return (
			add.reduce((acc, key) => (acc += getPixelValue(getValueOrFallback(theme, key))), 0) -
			sub.reduce((acc, key) => (acc += getPixelValue(getValueOrFallback(theme, key))), 0) +
			extra2
		)
	}
	$: total = getTotal(keysAdd, keysSubtract, extra)
</script>

{#if total > 0}
	<div
		style:background={DEV && showDebugBlocks ? getRandomCssColor() : null}
		style:height="{total}px"
	></div>
{/if}
