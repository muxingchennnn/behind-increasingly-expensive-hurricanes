<script>
	import { MediaQuery } from "svelte/reactivity";
	let { data, xBandScale, yLinearScale } = $props();

	const xs = new MediaQuery("min-width: 480px");
</script>

{#each data as label, i}
	<text
		x={xBandScale(label.decade)}
		y={yLinearScale(0)}
		dx={xBandScale.bandwidth() / 2}
		dy={4}
		text-anchor="middle"
		font-size="12px"
		alignment-baseline="hanging"
		fill="var(--color-gray-400)"
	>
		{xs.current ? label.decade : label.decade.slice(2)}
	</text>
{/each}
