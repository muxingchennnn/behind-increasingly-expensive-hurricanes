<script>
	import { content } from "$lib/data/content";
	import StackedBarChart from "$lib/components/StackedBarChart.svelte";
	import AdjacentBarChart from "$lib/components/AdjacentBarChart.svelte";
	import WaterfallChart from "$lib/components/WaterfallChart.svelte";
	let { data } = $props();
	const { decadeData, populationData } = data;
</script>

{#snippet text({ subtitle, paragraph })}
	{#if subtitle}
		<h2
			class="xs:text-[16px] mx-auto mb-1 max-w-[600px] font-serif leading-[1.2em] font-[700] text-pretty md:text-[18px]"
		>
			{subtitle}
		</h2>
	{/if}
	<p class="xs:text-[16px] mx-auto mb-8 max-w-[600px] md:text-[18px]">
		{paragraph}
	</p>
{/snippet}

<main class="mx-auto h-full w-[90vw] max-w-[1440px]">
	<div class="h-16"></div>
	<h1
		class="xs:text-[24px] mx-auto mb-4 max-w-[600px] font-serif leading-[1.2em] font-[700] text-pretty md:text-[28px]"
	>
		Behind the increasingly expansive hurricanes
	</h1>
	<p class="mx-auto mb-8 max-w-[600px] text-gray-500">By Muxing Chen</p>
	{#each content as section, i}
		{#if i === 1}
			<AdjacentBarChart data={decadeData} />
		{/if}
		{@render text(section)}
		{#if i === 1}
			<WaterfallChart />
		{/if}
		{#if i === 2}
			<StackedBarChart data={populationData} />
		{/if}
	{/each}
	<div class="h-16"></div>
</main>
