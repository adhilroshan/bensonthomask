<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<script lang="ts">
	import { Variant } from '$lib/types';
	import Button from '../global/Button.svelte';
	import type { Event } from '$lib/types';

	export let events: Event;
	export let reverse = false;

	const { title, desc, btnText, img } = events;
	// let title = 'Mission Worship Team - 2018';
	// let desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
	// 			sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
	// 			quisque ut interdum tincidunt duis.`;
	// let btnText = 'Get Started Today';
	// let img =
	// 	'https://dev.bensonthomask.com/wp-content/uploads/2023/06/Screenshot-2023-06-01-at-6.59.31-AM.png';
</script>

{#if reverse}
	<!-- content here -->
	<section class="overflow-hidden bg-gray-50 m-12 mt-1 rounded-2xl sm:grid sm:grid-cols-2">
		<div class="p-8 md:p-12 lg:px-16 lg:py-24">
			<div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
				<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
					{title}
				</h2>

				<p class="hidden text-gray-500 md:mt-4 md:block">
					{desc}
				</p>

				<div class="mt-4 md:mt-8">
					<Button
						className="hover:text-bgc hover:bg-borderColor bg-bgc text-borderColor"
						variant={Variant.rounded}
						href="/"
					>
						{btnText}
					</Button>
					<!-- class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400" -->
				</div>
			</div>
		</div>
		<img alt="img" src={img} class="h-56 w-full object-cover sm:h-full" />
	</section>
{:else}
	<!-- else content here -->

	<section class="overflow-hidden bg-gray-50 m-12 mt-1 rounded-2xl sm:grid sm:grid-cols-2">
		<img alt="img" src={img} class="h-56 w-full object-cover sm:h-full" />

		<div class="p-8 md:p-12 lg:px-16 lg:py-24">
			<div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
				<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
					{title}
				</h2>

				<p class="hidden text-gray-500 md:mt-4 md:block">
					{desc}
				</p>

				<div class="mt-4 md:mt-8">
					<Button
						className="hover:text-bgc hover:bg-borderColor bg-bgc text-borderColor"
						variant={Variant.rounded}
						href="/"
					>
						{btnText}
					</Button>
					<!-- class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400" -->
				</div>
			</div>
		</div>
	</section>
{/if}
