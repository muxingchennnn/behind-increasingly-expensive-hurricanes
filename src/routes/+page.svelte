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
		{@html paragraph}
	</p>
{/snippet}

<main class="mx-auto my-16 h-full w-[90vw] max-w-[1440px]" role="main">
	<h1
		class="xs:text-[24px] mx-auto mb-4 max-w-[600px] font-serif leading-[1.2em] font-[700] text-pretty md:text-[28px]"
	>
		Behind the increasingly expensive hurricanes
	</h1>
	<p class="xs:text-[14px] mx-auto mb-8 max-w-[600px] text-gray-500 md:text-[16px]">
		By Muxing Chen
	</p>
	<article>
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
	</article>
</main>

<style>
	@reference "../app.css";

	:global(a) {
		@apply text-[#326891] hover:underline hover:underline-offset-4;
	}
</style>
