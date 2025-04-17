<script>
	import "../app.css";
	import "$lib/styles/fonts.css";

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:title" content="Behind the increasingly expensive hurricanes" />
	<meta property="og:url" content="https://behind-increasingly-expensive-hurricanes.vercel.app/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta
		property="og:description"
		content="Break down the driving factors behind the increasingly expensive hurricanes."
	/>
	<meta property="og:image" content="https://i.imgur.com/gkzDTB8.png" />
</svelte:head>

{@render children()}
