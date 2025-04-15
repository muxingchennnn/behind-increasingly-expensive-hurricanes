<script>
	let { data, xBandScale, yLinearScale } = $props();
</script>

{#each data as label, i}
	<text
		x={xBandScale(label.decade)}
		y={yLinearScale(0)}
		dx={xBandScale.bandwidth() / 2}
		dy={4}
		text-anchor="middle"
		font-size="12px"
		alignment-baseline="hanging"
		fill="var(--color-gray-400)"
	>
		{label.decade}
	</text>
{/each}
