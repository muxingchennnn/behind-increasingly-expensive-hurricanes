<script>
	let { chartWidth, yLinearScale } = $props();

	const ticks = yLinearScale.ticks(5);
</script>

{#each ticks as tick, i (i)}
	<line
		x1={0}
		y1={yLinearScale(tick)}
		x2={chartWidth}
		y2={yLinearScale(tick)}
		stroke={i === 0 ? "var(--color-gray-500)" : "var(--color-gray-300)"}
		stroke-width={1}
	/>
	<text
		x={0}
		y={yLinearScale(tick)}
		dy={-4}
		text-anchor="begin"
		font-size="12px"
		fill="var(--color-gray-400)"
		>{tick === 500 ? `$${tick} billion` : tick > 50 ? `$${tick}` : tick}</text
	>
{/each}

<!-- <line
	x1={0}
	y1={yLinearScale(0)}
	x2={chartWidth}
	y2={yLinearScale(0)}
	stroke={"var(--color-gray-500)"}
	stroke-width={2}
/> -->
