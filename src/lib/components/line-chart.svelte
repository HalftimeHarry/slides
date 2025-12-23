<script lang="ts">
	import { onMount } from 'svelte'
	import * as d3 from 'd3'

	let {
		data = [] as { label: string; value: number }[],
		width = 800,
		height = 400,
		title = '',
		color = '#10b981'
	}: {
		data?: { label: string; value: number }[]
		width?: number
		height?: number
		title?: string
		color?: string
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
			.scalePoint()
			.domain(data.map((d) => d.label))
			.range([0, chartWidth])

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

		// Add Y axis
		svg
			.append('g')
			.call(d3.axisLeft(y).ticks(5))
			.selectAll('text')
			.attr('fill', '#9ca3af')
			.style('font-size', '14px')

		// Style axis lines
		svg.selectAll('.domain, .tick line').attr('stroke', '#4b5563')

		// Add grid lines
		svg
			.append('g')
			.attr('class', 'grid')
			.call(d3.axisLeft(y).ticks(5).tickSize(-chartWidth).tickFormat(() => ''))
			.selectAll('line')
			.attr('stroke', '#374151')
			.attr('stroke-opacity', 0.3)

		// Create line generator
		const line = d3
			.line<{ label: string; value: number }>()
			.x((d) => x(d.label) || 0)
			.y((d) => y(d.value))
			.curve(d3.curveMonotoneX)

		// Add the line path
		const path = svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', color)
			.attr('stroke-width', 3)
			.attr('d', line)

		// Animate the line
		const totalLength = path.node()?.getTotalLength() || 0
		path
			.attr('stroke-dasharray', `${totalLength} ${totalLength}`)
			.attr('stroke-dashoffset', totalLength)
			.transition()
			.duration(1500)
			.ease(d3.easeLinear)
			.attr('stroke-dashoffset', 0)

		// Add dots
		svg
			.selectAll('.dot')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'dot')
			.attr('cx', (d) => x(d.label) || 0)
			.attr('cy', (d) => y(d.value))
			.attr('r', 0)
			.attr('fill', color)
			.transition()
			.duration(500)
			.delay((d, i) => i * 150 + 1000)
			.attr('r', 6)

		// Add value labels
		svg
			.selectAll('.label')
			.data(data)
			.enter()
			.append('text')
			.attr('class', 'label')
			.attr('x', (d) => x(d.label) || 0)
			.attr('y', (d) => y(d.value) - 15)
			.attr('text-anchor', 'middle')
			.attr('fill', '#fff')
			.style('font-size', '14px')
			.style('font-weight', 'bold')
			.style('opacity', 0)
			.text((d) => d.value)
			.transition()
			.duration(500)
			.delay((d, i) => i * 150 + 1000)
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
