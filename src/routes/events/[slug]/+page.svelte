<script lang="ts">
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import { formatDate } from '$lib/utils';
	import { FastAverageColor } from 'fast-average-color';

	export let data;

	// let bgColor: string;
	// const fac = new FastAverageColor();
	// fac
	// 	.getColorAsync(data.meta.thumbnail)
	// 	.then((color) => {
	// 		bgColor = color.rgba;
	// 		console.log(bgColor);
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 	});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section>
	<div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
			<div class="relative z-10 lg:py-16">
				<div class="relative h-64 rounded-md sm:h-80 lg:h-full">
					<img
						alt={data.meta.title}
						src={data.meta.thumbnail}
						class="absolute inset-0 rounded-md h-full w-full object-cover"
					/>
				</div>
			</div>

			<div
				class="relative flex items-center bg-gray-100 rounded-b-md lg:rounded-b-none lg:rounded-e-sm"
			>
				<span
					class="hidden lg:absolute lg:inset-y-0 lg:-start-16 rounded-s-md lg:block lg:w-16 lg:bg-gray-100"
				/>

				<div class="p-8 sm:p-16 lg:p-24">
					<h2 class="text-2xl font-bold sm:text-3xl">
						{data.meta.title}
					</h2>

					<p class="mt-4 text-gray-600">
						<svelte:component this={data.content} />
					</p>

					<a
						href={data.meta.regUrl}
						class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
					>
						Register
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
