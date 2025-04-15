<script>
	let { data, xBandScale, yLinearScale, colorScale } = $props();
</script>

<g class="waterfall-chart">
	{#each data as bar, i}
		{@const isInDomain = colorScale.domain().includes(bar.item)}
		{console.log(colorScale.domain())}
		<rect
			role="graphics-symbol"
			x={xBandScale(bar.item)}
			y={yLinearScale(Math.max(bar.accu, bar.prior))}
			width={xBandScale.bandwidth()}
			height={Math.abs(yLinearScale(bar.accu) - yLinearScale(bar.prior))}
			fill={isInDomain ? colorScale(bar.item) : "var(--color-pink-300)"}
			opacity={0.8}
		/>
	{/each}
</g>
