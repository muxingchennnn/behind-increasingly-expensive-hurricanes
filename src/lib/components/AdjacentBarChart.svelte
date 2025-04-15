<script>
	import Bar from "$lib/components/Bar.svelte";
	import AdjacentAxisX from "$lib/components/AdjacentAxisX.svelte";
	import AdjacentAxisY from "$lib/components/AdjacentAxisY.svelte";
	import { scaleBand, scaleLinear, max } from "d3";

	let { data } = $props();

	const CHART_GAP = 0.1;

	const margin = { top: 32, right: 0, bottom: 16, left: 0 };
	let width = $state(400);
	let height = $state(400);
	let svgWidth = $derived((width - width * CHART_GAP) / 2);
	let svgHeight = $derived(height);
	let chartWidth = $derived(svgWidth - margin.left - margin.right);
	let chartHeight = $derived(svgHeight - margin.top - margin.bottom);

	let xBandScale = $derived.by(() => {
		return scaleBand()
			.domain(data.map((d) => d.decade))
			.range([24, chartWidth])
			.paddingInner(0.2)
			.paddingOuter(0.2);
	});

	let numberScale = $derived.by(() => scaleLinear().domain([0, 26.7]).range([chartHeight, 0]));

	let costScale = $derived.by(() =>
		scaleLinear()
			.domain([0, max(data.map((d) => d["costs_of_hurricanes"]))])
			.range([chartHeight, 0])
	);
</script>

<div
	class="chart-outer-wrapper mx-auto mt-20 mb-12 flex h-[30vh] w-[90vw] max-w-[600px]"
	style:gap={CHART_GAP * 100 + "%"}
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<div class="chart-inner-wrapper relative">
		<svg width={svgWidth} height={svgHeight} role="graphics-document">
			<g role="graphics-object" transform={`translate(${margin.left}, ${margin.top})`}>
				<AdjacentAxisX {data} {xBandScale} yLinearScale={numberScale} />
				<AdjacentAxisY {chartWidth} yLinearScale={numberScale} />
				<Bar
					{data}
					xProperty={"decade"}
					yProperty={"number_of_hurricanes"}
					{xBandScale}
					yLinearScale={numberScale}
					color={"var(--color-blue-400)"}
				/>
			</g>
			<h1 class="absolute -top-[32px] text-[14px] font-bold">
				Number of billion-dollar hurricanes per decade
			</h1>
		</svg>
	</div>
	<div class="chart-inner-wrapper relative">
		<svg width={svgWidth} height={svgHeight} role="graphics-document">
			<g role="graphics-object" transform={`translate(${margin.left}, ${margin.top})`}>
				<AdjacentAxisX {data} {xBandScale} yLinearScale={costScale} />
				<AdjacentAxisY {chartWidth} yLinearScale={costScale} />
				<Bar
					{data}
					xProperty={"decade"}
					yProperty={"costs_of_hurricanes"}
					{xBandScale}
					yLinearScale={costScale}
					color={"var(--color-pink-400)"}
				/>
			</g>
		</svg>
		<h1 class="absolute -top-[32px] text-[14px] font-bold">
			Number of billion-dollar hurricanes per decade
		</h1>
	</div>
</div>
