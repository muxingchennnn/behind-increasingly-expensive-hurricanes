<script>
	let { chartWidth, yLinearScale } = $props();
	const STROKE_WIDTH = 1;
</script>

<line
	x1={0}
	y1={yLinearScale(0) + STROKE_WIDTH / 2}
	x2={chartWidth}
	y2={yLinearScale(0) + STROKE_WIDTH / 2}
	stroke={"var(--color-gray-500)"}
	stroke-width={STROKE_WIDTH}
/>
