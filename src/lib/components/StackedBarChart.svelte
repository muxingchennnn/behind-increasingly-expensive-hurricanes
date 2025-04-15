<script>
	import { scaleBand, scaleLinear, max } from "d3";
	import Bar from "$lib/components/Bar.svelte";
	import StackAxisX from "$lib/components/StackAxisX.svelte";
	import StackAxisY from "$lib/components/StackAxisY.svelte";

	let { data } = $props();
	// console.log(data);
	const CHART_GAP = 0.02;

	const margin = { top: 32, right: 0, bottom: 24, left: 0 };
	let width = $state(400);
	let height = $state(400);
	let svgWidth = $derived(width);
	let svgHeight = $derived((height - height * CHART_GAP) / 2);
	let chartWidth = $derived(svgWidth - margin.left - margin.right);
	let chartHeight = $derived(svgHeight - margin.top - margin.bottom);

	// $inspect(chartHeight);

	let xBandScale = $derived.by(() => {
		return scaleBand()
			.domain(data.map((d) => d.year))
			.range([24, chartWidth])
			.paddingInner(0.2)
			.paddingOuter(0);
	});

	let gulfPopulationScale = $derived.by(() =>
		scaleLinear()
			.domain([6, max(data.map((d) => d["gulf_population"]))])
			.range([chartHeight, 0])
	);

	let southeastPopulationScale = $derived.by(() =>
		scaleLinear()
			.domain([6, max(data.map((d) => d["southeast_population"]))])
			.range([chartHeight, 0])
	);
</script>

<div
	class="chart-outer-wrapper mx-auto mt-20 mb-12 flex h-[50vh] w-[90vw] max-w-[600px] flex-col"
	style:gap={CHART_GAP * 100 + "%"}
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<div class="chart-inner-wrapper relative">
		<svg width={svgWidth} height={svgHeight} role="graphics-document">
			<g role="graphics-object" transform={`translate(${margin.left}, ${margin.top})`}>
				<StackAxisX {data} {xBandScale} yLinearScale={gulfPopulationScale} />
				<StackAxisY {chartWidth} yLinearScale={gulfPopulationScale} />
				<Bar
					{data}
					xProperty={"year"}
					yProperty={"gulf_population"}
					{xBandScale}
					yLinearScale={gulfPopulationScale}
					color={"var(--color-gray-300)"}
					truncation={6}
				/>
			</g>
		</svg>
		<h1 class="absolute -top-[32px] max-w-[500px] text-[14px] font-bold text-pretty">
			Population growth in the Gulf region (top) and Southeastern shoreline (bottom), 1990 - 2022
		</h1>
	</div>
	<div class="chart-inner-wrapper relative">
		<svg width={svgWidth} height={svgHeight} role="graphics-document">
			<g role="graphics-object" transform={`translate(${margin.left}, ${margin.top})`}>
				<StackAxisX {data} {xBandScale} yLinearScale={southeastPopulationScale} />
				<StackAxisY {chartWidth} yLinearScale={southeastPopulationScale} />
				<Bar
					{data}
					xProperty={"year"}
					yProperty={"southeast_population"}
					{xBandScale}
					yLinearScale={southeastPopulationScale}
					color={"var(--color-gray-300)"}
					truncation={6}
				/>
			</g>
		</svg>
	</div>
</div>
