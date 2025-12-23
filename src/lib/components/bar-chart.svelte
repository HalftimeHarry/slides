<script lang="ts">
	import { onMount } from 'svelte'
	import * as d3 from 'd3'

	let { 
		data = [] as { label: string; value: number; color?: string }[],
		width = 800,
		height = 400,
		title = ''
	}: {
		data?: { label: string; value: number; color?: string }[]
		width?: number
		height?: number
		title?: string
	} = $props()

	let chartContainer: HTMLDivElement

	onMount(() => {
		if (!data.length) return

		// Clear any existing chart
		d3.select(chartContainer).selectAll('*').remove()

		const margin = { top: 40, right: 30, bottom: 60, left: 60 }
		const chartWidth = width - margin.left - margin.right
		const chartHeight = height - margin.top - margin.bottom

		// Create SVG
		const svg = d3
			.select(chartContainer)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`)

		// Create scales
		const x = d3
			.scaleBand()
			.domain(data.map((d) => d.label))
			.range([0, chartWidth])
			.padding(0.2)

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.value) || 0])
			.nice()
			.range([chartHeight, 0])

		// Add X axis
		svg
			.append('g')
			.attr('transform', `translate(0,${chartHeight})`)
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('fill', '#9ca3af')
			.style('font-size', '14px')
			.attr('transform', 'rotate(-45)')
			.style('text-anchor', 'end')

		// Add Y axis
		svg
			.append('g')
			.call(d3.axisLeft(y).ticks(5))
			.selectAll('text')
			.attr('fill', '#9ca3af')
			.style('font-size', '14px')

		// Style axis lines
		svg.selectAll('.domain, .tick line').attr('stroke', '#4b5563')

		// Add bars with animation
		svg
			.selectAll('.bar')
			.data(data)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr('x', (d) => x(d.label) || 0)
			.attr('width', x.bandwidth())
			.attr('y', chartHeight)
			.attr('height', 0)
			.attr('fill', (d) => d.color || '#3b82f6')
			.attr('rx', 4)
			.transition()
			.duration(800)
			.delay((d, i) => i * 100)
			.attr('y', (d) => y(d.value))
			.attr('height', (d) => chartHeight - y(d.value))

		// Add value labels on top of bars
		svg
			.selectAll('.label')
			.data(data)
			.enter()
			.append('text')
			.attr('class', 'label')
			.attr('x', (d) => (x(d.label) || 0) + x.bandwidth() / 2)
			.attr('y', chartHeight)
			.attr('text-anchor', 'middle')
			.attr('fill', '#fff')
			.style('font-size', '16px')
			.style('font-weight', 'bold')
			.style('opacity', 0)
			.text((d) => d.value)
			.transition()
			.duration(800)
			.delay((d, i) => i * 100)
			.attr('y', (d) => y(d.value) - 10)
			.style('opacity', 1)

		// Add title if provided
		if (title) {
			svg
				.append('text')
				.attr('x', chartWidth / 2)
				.attr('y', -10)
				.attr('text-anchor', 'middle')
				.attr('fill', '#fff')
				.style('font-size', '20px')
				.style('font-weight', 'bold')
				.text(title)
		}
	})
</script>

<div bind:this={chartContainer} class="chart-container"></div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
