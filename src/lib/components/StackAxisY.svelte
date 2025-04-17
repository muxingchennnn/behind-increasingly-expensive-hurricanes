<script>
	let { chartWidth, yLinearScale } = $props();

	const STROKE_WIDTH = 1;
	const ticks = yLinearScale.ticks(5);
</script>

{#each ticks as tick, i (i)}
	<line
		x1={0}
		y1={i === 0 ? yLinearScale(tick) + STROKE_WIDTH / 2 : yLinearScale(tick)}
		x2={chartWidth}
		y2={i === 0 ? yLinearScale(tick) + STROKE_WIDTH / 2 : yLinearScale(tick)}
		stroke={i === 0 ? "var(--color-gray-500)" : "var(--color-gray-300)"}
		stroke-width={STROKE_WIDTH}
	/>
	<text
		x={0}
		y={yLinearScale(tick)}
		dy={-4}
		text-anchor="begin"
		font-size="12px"
		fill="var(--color-gray-400)">{tick === ticks[ticks.length - 1] ? `${tick} million` : tick}</text
	>
{/each}
