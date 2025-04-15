<script>
	let { chartWidth, yLinearScale } = $props();
</script>

<line
	x1={0}
	y1={yLinearScale(0)}
	x2={chartWidth}
	y2={yLinearScale(0)}
	stroke={"var(--color-gray-500)"}
	stroke-width={2}
/>
