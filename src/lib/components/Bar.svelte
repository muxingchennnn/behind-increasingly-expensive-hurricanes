<script>
	let { data, xProperty, yProperty, xBandScale, yLinearScale, truncation = 0 } = $props();
</script>

<g class="bar-chart">
	{#each data as bar, i}
		<rect
			role="graphics-symbol"
			x={xBandScale(bar[xProperty])}
			y={yLinearScale(bar[yProperty])}
			height={yLinearScale(0) - yLinearScale(bar[yProperty] - truncation)}
			width={xBandScale.bandwidth()}
			fill={"#d9d9d9"}
			opacity={0.8}
		/>
	{/each}
</g>
