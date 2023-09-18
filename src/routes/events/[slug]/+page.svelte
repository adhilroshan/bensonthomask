<script lang="ts">
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import { formatDate } from '$lib/utils';
	import { FastAverageColor } from 'fast-average-color';

	export let data;

	let bgColor: string;
	const fac = new FastAverageColor();
	fac
		.getColorAsync(data.meta.thumbnail)
		.then((color) => {
			bgColor = color.rgba;
		})
		.catch((e) => {
			console.log(e);
		});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<PageHeader title={data.meta.title} bgImg={data.meta.thumbnail} {bgColor} />
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<!-- <div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div> -->

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
