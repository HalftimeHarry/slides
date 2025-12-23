import { mount } from 'svelte'
import Slides from './slides.svelte'
import '@styles/tailwind.css'

const app = mount(Slides, {
	target: document.getElementById('app')!,
})

export default app
