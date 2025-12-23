import { writable } from 'svelte/store'

export const navigation = writable<{
	hash: string | null
	currentSlide: number | null
	indices: any
	availableRoutes: any
}>({
	// slide number from the URL
	hash: null,
	// current slide
	currentSlide: null,
	// horizontal, vertical slide number and fragment
	indices: null,
	// available navigation
	availableRoutes: null,
})
