<script>
	import { waterFallData } from "$lib/data/waterfall";
	import { scaleOrdinal, scaleBand, scaleLinear, max } from "d3";
	import { selectedYear } from "$lib/utils/globlStates.svelte";
	import { parseWaterfallData } from "$lib/utils/parseWaterfallData";
	import { fly, fade } from "svelte/transition";
	import WaterfallBar from "$lib/components/WaterfallBar.svelte";
	import WaterfallLabelX from "$lib/components/WaterfallLabelX.svelte";
	import WaterfallLabelY from "$lib/components/WaterfallLabelY.svelte";

	const margin = { top: 32, right: 0, bottom: 16, left: 0 };
	let width = $state(400);
	let height = $state(400);
	let chartWidth = $derived(width - margin.left - margin.right);
	let chartHeight = $derived(height - margin.top - margin.bottom);

	const yearOptions = Array.from(new Set(waterFallData.map((d) => d.year)));
	let selectedData = $derived.by(() => waterFallData.filter((d) => d.year === selectedYear.value));
	let parsedData = $derived.by(() => parseWaterfallData(selectedData));

	const colorScale = $derived.by(() => {
		return scaleOrdinal()
			.domain(["Total", "Others"])
			.range(["var(--color-pink-400)", "var(--color-gray-300)"]);
	});

	let xBandScale = $derived.by(() => {
		return scaleBand()
			.domain(parsedData.map((d) => d.item))
			.range([0, chartWidth])
			.paddingInner(0.2);
	});

	let costScale = $derived.by(() => {
		return scaleLinear()
			.domain([0, max(parsedData.map((d) => d.cost))])
			.range([chartHeight, 0]);
	});
</script>

<div
	class="chart-wrapper relative mx-auto mt-20 mb-12 h-[30vh] w-[90vw] max-w-[600px]"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<svg {width} {height} role="graphics-document">
		<g role="graphics-object" transform={`translate(${margin.left}, ${margin.top})`}>
			<WaterfallLabelY {chartWidth} yLinearScale={costScale} />
			<WaterfallBar data={parsedData} {xBandScale} yLinearScale={costScale} {colorScale} />
			<WaterfallLabelX data={parsedData} {xBandScale} yLinearScale={costScale} />
		</g>
	</svg>
	<h1 class="absolute -top-[32px] text-[14px] font-bold" style:left="{margin.left}px">
		Cost breakdown of the
		<select bind:value={selectedYear.value}>
			{#each yearOptions as year}
				<option value={year}>
					{year}
				</option>
			{/each}
		</select>
		hurricane season
	</h1>
</div>

<style>
</style>
