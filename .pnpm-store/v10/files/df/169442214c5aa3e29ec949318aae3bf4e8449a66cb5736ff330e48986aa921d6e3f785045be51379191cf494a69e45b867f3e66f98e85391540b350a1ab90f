<script>
	import ClsPad from './ClsPad.svelte'
	import { applyTheme } from '../theme.js'
	import { updateCollapsibility } from '../utils.js'
	import { BROWSER } from 'esm-env'
	import { getContext, onDestroy, setContext, tick } from 'svelte'
	import { writable } from 'svelte/store'
	import { Pane as TpPane } from 'tweakpane'
	export let title = void 0
	export let userExpandable = true
	export let expanded = true
	export let theme = void 0
	export let scale = 1
	export let userCreatedPane = true
	export let tpPane = void 0
	const parentStore = writable()
	const existingParentStore = getContext('parentStore')
	let pluginsRegistered = []
	const registerPlugin = (plugin) => {
		if (tpPane === void 0) {
			console.warn(`tpPane is undefined, failed to register plugin "${plugin.id}"`)
		} else if (!pluginsRegistered.includes(plugin.id)) {
			tpPane?.registerPlugin(plugin)
			pluginsRegistered.push(plugin.id)
		}
	}
	setContext('registerPlugin', registerPlugin)
	setContext('userCreatedPane', userCreatedPane)
	if ($existingParentStore !== void 0) {
		console.warn('<Panes> must not be nested')
	}
	if (BROWSER) {
		$parentStore = new TpPane({ expanded, title })
		$parentStore.on('fold', () => {
			if ($parentStore.expanded !== void 0 && expanded !== $parentStore.expanded) {
				expanded = $parentStore.expanded
			}
		})
		tpPane = $parentStore
		setContext('parentStore', parentStore)
		onDestroy(() => {
			$parentStore.dispose()
		})
	} else {
		setContext('parentStore', writable(true))
	}
	function setScale(scale2) {
		if (tpPane) {
			if (scale2 === 1) {
				tpPane.element.style.removeProperty('transform-origin')
				tpPane.element.style.removeProperty('transform')
				tpPane.element.style.removeProperty('width')
			} else {
				const clampedScale = Math.max(0, scale2)
				tpPane.element.style.transformOrigin = '0 0'
				tpPane.element.style.transform = `scale(${clampedScale})`
				tpPane.element.style.width = `${100 / clampedScale}%`
			}
		}
	}
	function updateExpanded(expanded2) {
		void tick().then(() => {
			if (tpPane?.expanded !== void 0 && expanded2 !== void 0 && tpPane.expanded !== expanded2) {
				tpPane.expanded = expanded2
			}
		})
	}
	$: tpPane?.element && tpPane?.element.classList.add('svelte-tweakpane-ui')
	$: tpPane && setScale(scale)
	$: tpPane && updateCollapsibility(userExpandable, tpPane.element, 'tp-rotv_b', 'tp-rotv_m')
	$: tpPane && title !== void 0 && (tpPane.title = title.length > 0 ? title : ' ')
	$: tpPane && applyTheme(tpPane.element, theme)
	$: tpPane && updateExpanded(expanded)
</script>

{#if BROWSER}
	<slot />
{:else if expanded}
	{#if title === undefined}
		<ClsPad keysAdd={['containerVerticalPadding']} {theme} />
	{:else}
		<ClsPad
			keysAdd={[
				'containerVerticalPadding',
				'containerVerticalPadding',
				'containerVerticalPadding',
				'containerUnitSize',
			]}
			{theme}
		/>
	{/if}
	<slot />
{:else if title === undefined}
	<!-- Nothing renders -->
{:else}
	<ClsPad keysAdd={['containerVerticalPadding', 'containerUnitSize']} {theme} />
{/if}

<style>
	/* Blade labels */
	:global(div.svelte-tweakpane-ui div.tp-lblv_l) {
		overflow: hidden;
		padding-right: var(--cnt-hp);
		text-overflow: ellipsis;
	}

	/* Pane title label */
	:global(div.svelte-tweakpane-ui div.tp-rotv_t) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
