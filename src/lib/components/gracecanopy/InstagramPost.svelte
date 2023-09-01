<script lang="ts">
	import { onMount } from 'svelte';

	export let postUrl: string; // URL of the Instagram post
	// let embedCode: string | null = null;

	// onMount(async () => {
	// 	const response = await fetch(`https://api.instagram.com/oembed?url=${postUrl}`);
	// 	const data = await response.json();
	// 	embedCode = data.html;
	// });
</script>

<div class="mx-4 md:mx-24 relative h-80 w-full md:h-96 md:w-96">
	<!-- {@html embedCode} -->
	<iframe class="absolute w-full h-full" src={postUrl} frameborder="0" />
</div>

<style>
	/* Add your styles for the Instagram post container here */
</style>
