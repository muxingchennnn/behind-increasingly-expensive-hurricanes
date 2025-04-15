<script>
	let { data, xBandScale, yLinearScale } = $props();
</script>

<g class="waterfall-chart">
	{#each data as bar, i}
		<rect
			role="graphics-symbol"
			x={xBandScale(bar.item)}
			y={yLinearScale(Math.max(bar.accu, bar.prior))}
			width={xBandScale.bandwidth()}
			height={Math.abs(yLinearScale(bar.accu) - yLinearScale(bar.prior))}
			fill={"#d9d9d9"}
			opacity={0.8}
		/>
	{/each}
</g>
