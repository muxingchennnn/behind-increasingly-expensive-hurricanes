<script>
	let { data, xBandScale, yLinearScale } = $props();
</script>

{#each data as label, i}
	{console.log(label)}
	<text
		x={xBandScale(label.item)}
		y={yLinearScale(label.cost > 0 ? label.accu : label.prior)}
		dx={xBandScale.bandwidth() / 2}
		dy={-6}
		text-anchor="middle"
		font-size="12px"
	>
		{label?.item}
	</text>
	<text
		x={xBandScale(label.item)}
		y={yLinearScale(
			i > 0 ? label.accu + (label.prior - label.accu) / 2 : Math.abs(label.prior - label.accu) / 2
		)}
		dx={xBandScale.bandwidth() / 2}
		dy={0}
		text-anchor="middle"
		alignment-baseline="middle"
		font-size="12px"
	>
		${Math.abs(label?.cost)}B
	</text>
{/each}
