<script>
	let { data, xBandScale, yLinearScale } = $props();

	const ticks = xBandScale.domain();
</script>

{#each data as label, i}
	{#if i % 7 === 0}
		<line
			x1={xBandScale(label.year) + xBandScale.bandwidth() / 2}
			x2={xBandScale(label.year) + xBandScale.bandwidth() / 2}
			y1={yLinearScale(6)}
			y2={yLinearScale(6) - 4}
			stroke="var(--color-gray-500)"
			stroke-width={1}
		/>
		<text
			x={xBandScale(label.year)}
			y={yLinearScale(6)}
			dx={xBandScale.bandwidth() / 2}
			dy={4}
			text-anchor="middle"
			font-size="12px"
			alignment-baseline="hanging"
			fill="var(--color-gray-400)"
		>
			{label.year}
		</text>
	{/if}
{/each}
