<script context="module">
	const localStorePrefix = 'svelte-tweakpane-ui-draggable-position-'
	const localStoreDefaultId = '1'
	const localStoreIds = []
	let zIndexGlobal = 1e3
</script>

<script>
	import GenericPane from './GenericPane.svelte'
	import { clamp, getSwatchButton, pickerIsOpen, removeKeys } from '../utils.js'
	import { onDestroy, onMount } from 'svelte'
	import { persisted } from 'svelte-persisted-store'
	const titlebarWindowShadeSingleClick = true
	const titlebarWindowShadeDoubleClick = false
	const pointerCancelOnWindowBlur = true
	const dragMovementDistanceThreshold = 3
	let initialDragEvent
	export let storePositionLocally = true
	export let localStoreId = localStoreDefaultId
	export let tpPane = void 0
	let positionStore
	if (storePositionLocally) {
		positionStore = persisted(`${localStorePrefix}${localStoreId}`, {
			x: 0,
			y: 0,
			expanded: true,
			width: 350,
		})
	}
	export let expanded = $positionStore?.expanded ?? true
	export let collapseChildrenToFit = false
	export let x = $positionStore?.x ?? 0
	export let y = $positionStore?.y ?? 0
	export let width = $positionStore?.width ?? 256
	export let resizable = true
	export let userExpandable = true
	export let minWidth = 200
	export let maxWidth = 600
	export let title = 'Tweakpane'
	export let scale = 1
	export let padding = '0'
	let containerElement
	let dragBarElement
	let widthHandleElement
	let containerHeight
	let containerHeightScaled
	let containerWidth
	let documentWidth
	let documentHeight
	let zIndexLocal = zIndexGlobal
	function addStorageId() {
		if (localStoreId !== void 0) {
			if (localStoreIds.includes(localStoreId)) {
				console.warn(
					'Multiple instances of <Pane> with `mode="draggable"` and `storePositionLocally=true` detected. You must explicitly set unique localStoreId property on each component to avoid collisions.',
				)
			}
			localStoreIds.push(localStoreId)
		}
	}
	function removeStorageId() {
		if (localStoreId) {
			localStoreIds.splice(localStoreIds.indexOf(localStoreId), 1)
			localStorage.removeItem(`${localStorePrefix}${localStoreId}`)
		}
	}
	function updateLocalStoreId(id) {
		if (
			id !== void 0 &&
			positionStore !== void 0 &&
			expanded !== void 0 &&
			width !== void 0 &&
			x !== void 0 &&
			y !== void 0
		) {
			positionStore = persisted(`${localStorePrefix}${localStoreId}`, {
				x,
				y,
				expanded,
				width,
			})
		}
	}
	function setDocumentSize() {
		if (x !== void 0 && y !== void 0 && width !== void 0) {
			const documentWidthPrevious = documentWidth
			const documentHeightPrevious = documentHeight
			documentWidth = document.documentElement.clientWidth
			documentHeight = document.documentElement.clientHeight
			const dx = documentWidth - documentWidthPrevious
			const dy = documentHeight - documentHeightPrevious
			const centerPercentX = (x + width / 2) / documentWidth
			const centerPercentY = (y + containerHeightScaled / 2) / documentHeight
			if (!Number.isNaN(dx) && centerPercentX >= 0.5) {
				x += dx
			}
			if (!Number.isNaN(dy) && centerPercentY >= 0.5) {
				y += dy
			}
		}
	}
	const clickBlocker = (event) => {
		event.stopPropagation()
	}
	let startWidth = 0
	let startOffsetX = 0
	let startOffsetY = 0
	let moveDistance = 0
	const doubleClickListener = (event) => {
		event.stopPropagation()
		if (event.target) {
			if (width !== void 0 && event.target === widthHandleElement) {
				width = width < maxAvailablePanelWidth ? maxAvailablePanelWidth : minWidth
			} else if (
				// Consider pointer movement threshold check...
				// e.g. if (moveDistance < dragMovementDistanceThreshold && userExpandable)...
				titlebarWindowShadeDoubleClick &&
				event.target === dragBarElement &&
				tpPane
			) {
				tpPane.expanded = !tpPane.expanded
			}
		}
	}
	const dragStartListener = (event) => {
		if (x !== void 0 && y !== void 0 && event.button === 0 && event.target instanceof HTMLElement) {
			moveDistance = 0
			initialDragEvent = event
			removeDragStartListeners()
			addDragMoveAndEndListeners()
			if (event.target === dragBarElement) {
				dragBarElement.style.cursor = 'grabbing'
			}
			containerElement.style.transition = 'width 0s ease'
			event.target.setPointerCapture(event.pointerId)
			startWidth = width ?? 0
			startOffsetX = x - event.pageX
			startOffsetY = y - event.pageY
		}
	}
	const dragMoveListener = (event) => {
		if (
			event.target instanceof HTMLElement &&
			width !== void 0 &&
			minWidth !== void 0 &&
			x !== void 0 &&
			y !== void 0
		) {
			if (event.target === dragBarElement) {
				moveDistance += Math.hypot(event.movementX, event.movementY)
				x = event.pageX + startOffsetX
				y = event.pageY + startOffsetY
			} else if (event.target === widthHandleElement) {
				width = clamp(event.pageX + startOffsetX + startWidth - x, minWidth, maxAvailablePanelWidth)
			}
		}
	}
	const blurListener = () => {
		if (pointerCancelOnWindowBlur && initialDragEvent?.target instanceof HTMLElement) {
			const { target } = initialDragEvent
			const bounds = target.getBoundingClientRect()
			const pointerCancelEvent = new PointerEvent('pointercancel', {
				bubbles: true,
				clientX: bounds.left + bounds.width / 2,
				clientY: bounds.top + bounds.height / 2,
				composed: true,
				pointerId: initialDragEvent.pointerId,
				pointerType: initialDragEvent.pointerType,
			})
			target.dispatchEvent(pointerCancelEvent)
		}
	}
	const dragEndListener = (event) => {
		event.stopImmediatePropagation()
		if (event.target instanceof HTMLElement) {
			if (event.target.hasPointerCapture(event.pointerId)) {
				event.target.releasePointerCapture(event.pointerId)
			}
			if (event.target === dragBarElement) {
				dragBarElement.style.removeProperty('cursor')
			}
			containerElement.style.removeProperty('transition')
			if (
				event.type === 'pointerup' &&
				titlebarWindowShadeSingleClick &&
				event.target === dragBarElement &&
				moveDistance < dragMovementDistanceThreshold &&
				userExpandable &&
				tpPane
			) {
				tpPane.expanded = !tpPane.expanded
			}
			initialDragEvent = void 0
			removeDragMoveAndEndListeners()
			addDragStartListeners()
		}
	}
	const addDragStartListeners = () => {
		dragBarElement.addEventListener('pointerdown', dragStartListener)
		widthHandleElement?.addEventListener('pointerdown', dragStartListener)
	}
	const removeDragStartListeners = () => {
		dragBarElement.removeEventListener('pointerdown', dragStartListener)
		widthHandleElement?.removeEventListener('pointerdown', dragStartListener)
	}
	const addDragMoveAndEndListeners = () => {
		window.addEventListener('blur', blurListener)
		dragBarElement.addEventListener('pointermove', dragMoveListener)
		dragBarElement.addEventListener('pointerup', dragEndListener)
		dragBarElement.addEventListener('pointercancel', dragEndListener)
		widthHandleElement?.addEventListener('pointermove', dragMoveListener)
		widthHandleElement?.addEventListener('pointerup', dragEndListener)
		widthHandleElement?.addEventListener('pointercancel', dragEndListener)
	}
	const removeDragMoveAndEndListeners = () => {
		window.removeEventListener('blur', blurListener)
		dragBarElement.removeEventListener('pointermove', dragMoveListener)
		dragBarElement.removeEventListener('pointerup', dragEndListener)
		dragBarElement.removeEventListener('pointercancel', dragEndListener)
		widthHandleElement?.removeEventListener('pointermove', dragMoveListener)
		widthHandleElement?.removeEventListener('pointerup', dragEndListener)
		widthHandleElement?.removeEventListener('pointercancel', dragEndListener)
	}
	const touchScrollBlocker = (event) => {
		event.preventDefault()
	}
	onMount(() => {
		setDocumentSize()
		if (tpPane) {
			containerElement.append(tpPane.element)
		} else {
			console.warn('no tpPane in draggable')
		}
		containerElement.addEventListener('touchmove', touchScrollBlocker, { passive: false })
		const dragBarElementCheck = containerElement.querySelector('.tp-rotv_t')
		if (dragBarElementCheck) {
			dragBarElement = dragBarElementCheck
			dragBarElement.addEventListener('click', clickBlocker)
			dragBarElement.addEventListener('dblclick', doubleClickListener)
			widthHandleElement = dragBarElement.parentElement?.appendChild(document.createElement('div'))
			if (widthHandleElement) {
				widthHandleElement.className = 'tp-custom-width-handle'
				widthHandleElement.textContent = '\u2194'
				widthHandleElement.addEventListener('click', clickBlocker)
				widthHandleElement.addEventListener('dblclick', doubleClickListener)
			}
			addDragStartListeners()
		}
	})
	onDestroy(() => {
		removeDragStartListeners()
		removeDragMoveAndEndListeners()
		dragBarElement.removeEventListener('click', clickBlocker)
		dragBarElement.removeEventListener('dblclick', doubleClickListener)
		widthHandleElement?.removeEventListener('click', clickBlocker)
		widthHandleElement?.removeEventListener('dblclick', doubleClickListener)
		containerElement?.removeEventListener('touchmove', touchScrollBlocker)
		if (localStoreId !== void 0) {
			localStoreIds.splice(localStoreIds.indexOf(localStoreId), 1)
		}
	})
	function updateResizability(isResizable) {
		if (widthHandleElement) {
			widthHandleElement.style.display = isResizable ? 'block' : 'none'
		}
	}
	$: tpPane && resizable && updateResizability(resizable)
	function recursiveCollapse(children, maxToCollapse = Number.MAX_SAFE_INTEGER) {
		if (maxToCollapse > 0) {
			for (const child of children) {
				if ('expanded' in child) {
					if (child.expanded) {
						maxToCollapse--
						child.expanded = false
					}
					if ('children' in child) {
						recursiveCollapse(child.children, maxToCollapse)
					}
				} else {
					const swatchButton = getSwatchButton(child)
					if (swatchButton && pickerIsOpen(child)) {
						maxToCollapse--
						swatchButton.click()
					}
				}
			}
		}
	}
	$: if (
		containerHeightScaled !== void 0 &&
		documentWidth !== void 0 &&
		documentHeight !== void 0 &&
		x !== void 0 &&
		y !== void 0 &&
		width !== void 0 &&
		minWidth !== void 0 &&
		maxWidth !== void 0
	) {
		if (collapseChildrenToFit && containerHeightScaled > documentHeight && tpPane) {
			recursiveCollapse(tpPane.children)
		}
		x = clamp(x, 0, Math.max(0, documentWidth - containerWidth))
		y = clamp(y, 0, Math.max(0, documentHeight - containerHeightScaled))
		if (documentWidth < containerWidth) {
			width = Math.max(minWidth, Math.min(maxWidth, documentWidth))
		}
	}
	$: maxAvailablePanelWidth = Math.min(maxWidth ?? 600, documentWidth - (x ?? 0))
	$: localStoreId, storePositionLocally && addStorageId()
	$: localStoreId, !storePositionLocally && removeStorageId()
	$: localStoreId !== `${localStorePrefix}${localStoreId}` && updateLocalStoreId(localStoreId)
	$: storePositionLocally &&
		localStoreId !== void 0 &&
		x !== void 0 &&
		y !== void 0 &&
		width !== void 0 &&
		expanded !== void 0 &&
		positionStore?.set({ x, y, expanded, width })
	$: {
		if (containerElement) {
			if (scale === void 0 || scale === 1) {
				containerHeightScaled = containerHeight
			} else {
				const style = window.getComputedStyle(containerElement)
				const vPadding =
					Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom)
				containerHeightScaled = (containerHeight - vPadding) * scale + vPadding
			}
		}
	}
</script>

<svelte:window on:resize={setDocumentSize} />

<div
	bind:clientHeight={containerHeight}
	bind:clientWidth={containerWidth}
	bind:this={containerElement}
	on:focus|capture={() => {
		zIndexLocal = ++zIndexGlobal
	}}
	on:pointerdown|capture={() => {
		zIndexLocal = ++zIndexGlobal
	}}
	class="draggable-container"
	class:not-collapsable={!userExpandable}
	class:not-resizable={!resizable}
	style:left="{x}px"
	style:padding
	style:top="{y}px"
	style:width="{width}px"
	style:z-index={zIndexLocal}
>
	<GenericPane bind:expanded bind:tpPane {scale} {title} {...removeKeys($$restProps, 'position')}>
		<slot />
	</GenericPane>
</div>

<style>
	div.draggable-container {
		position: fixed;
		z-index: auto;
		padding: 20px;
		/* 0.2s matches Tweakpane's internal animation duration */
		transition: width 0.2s ease;
	}

	/* stylelint-disable-next-line selector-class-pattern */
	div.draggable-container :global(div.tp-rotv_t) {
		cursor: grab;
		overflow: hidden;
		/* Ensure draggable hit zone does not collapse if title is missing */
		/* Fixes #1 */
		height: 100%;
	}

	div.draggable-container.not-collapsable :global(div.tp-rotv_t) {
		/* TODO remove the magic numbers */
		/* Expand the drag bar to fill the missing window shade icon space */
		margin-left: -28px;
		padding-left: 28px;
	}

	div.draggable-container.not-resizable :global(div.tp-rotv_t) {
		/* TODO remove the magic numbers */
		/* Expand the drag bar to fill the missing width drag icon space */
		margin-right: -28px;
		padding-right: 28px;
	}

	div.draggable-container :global(div.tp-lblv_l) {
		white-space: nowrap;
	}

	div.draggable-container :global(div.tp-rotv_m) {
		right: unset;
		left: 0;
		/* inflate the icon into a better hit zone */
		margin: auto calc((var(--cnt-usz) + (var(--cnt-hp)) - 6px) / 2);
	}

	div.draggable-container :global(div.tp-custom-width-handle) {
		cursor: col-resize;
		position: absolute;
		top: 0;
		right: 0;
		aspect-ratio: 1;
		height: 100%;
		font-size: 1.5em;
		color: var(--tp-container-fg);
		opacity: 0.5;
	}
</style>
