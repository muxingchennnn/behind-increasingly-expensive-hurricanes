<script>
	let { data, xBandScale, yLinearScale } = $props();
</script>

{#each data as label, i}
	<text
		x={xBandScale(label.item)}
		y={yLinearScale(label.cost > 0 ? label.accu : label.prior)}
		dx={xBandScale.bandwidth() / 2}
		dy={-6}
		text-anchor="middle"
		font-size="14px"
	>
		{label.item}
	</text>
{/each}
