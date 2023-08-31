<script lang="ts">
	interface CTA {
		url: string;
		text: string;
	}
	import { Button } from '$lib/components/ui/button';
	import Bg from '$lib/assets/bg.jpg';
	export let title: string;
	export let description: string = '';
	export let CTA: CTA = {
		url: '',
		text: ''
	};
	export let bgImg: string = '';
	export let textColor: string = '#1F1F1F';
	export let bgColor: string = '';
	export let bgShadow: string = '#4E473B';
	export let height: string = '80vh';
	export let blendBg: boolean = false;
</script>

<section
	style="background-color: {bgColor};"
	class="relative m-12 mt-1 rounded-2xl max-h-screen h-[{height}] shadow-lg shadow-[{bgShadow}]"
>
	{#if blendBg}
		<!-- content here -->
		<img src={bgImg} class="h-full opacity-5 grayscale w-full -z-0 object-cover absolute" alt="" />
	{:else}
		<img src={bgImg} class="h-full opacity-75 w-full -z-0 object-cover absolute" alt="" />
		<!-- else content here -->
	{/if}
	<div class="mx-auto max-w-screen-xl">
		<div class=" flex md:flex-row flex-col h-full justify-between px-10 gap-8 items-center">
			<div class="lg:order-last">
				<!-- <div
					class="relative place-self-center drop-shadow-2xl h-80 w-72 overflow-hidden rounded-full sm:h-90 bg-accent"
				>
					<img alt="Party" src={Headshot} class="absolute inset-0 h-full w-full object-cover" />
				</div> -->
				<div class=" relative h-full mx-auto">
					<!-- <div
						class="grid items-end overflow-hidden"
						style="aspect-ratio: 1/1.5; border-radius: 0 0 ;"
					> -->
					<!-- <div
							style="inset: auto 0 0; "
							class="border-4 border-borderColor aspect-square rounded-t-full absolute mix-blend-multiply mx-auto w-full object-cover"
						/> -->
					<!-- <div
							style="inset: auto 0 0; "
							class="border-b-4 border-r-4 border-borderColor z-30 aspect-square rounded-t-full absolute mix-blend-multiply mx-auto w-full object-cover"
						/> -->
					<img alt="Party" src={Bg} class="absolute h-full w-full object-cover" />
					<!-- </div> -->
				</div>
			</div>
			<div class="z-10 lg:pt-24">
				<h2 class="text-3xl text-[{textColor}] font-bold sm:text-4xl">{title}</h2>

				{#if description}
					<p class="mt-4 text-gray italic text-ellipsis w-96">
						{description}
					</p>
				{/if}

				{#if CTA.text}
					<!-- <a href={CTA.url} class="mt-8">
						{CTA.text}
					</a> -->
					<Button
						href={CTA.url}
						class="mt-8 inline-block rounded-none py-auto rounded-tl-md rounded-br-md border-2 border-borderColor bg-bgc  px-6 md:px-8 text-sm font-medium text-borderColor transition hover:bg-accent/90 focus:outline-none focus:ring focus:ring-yellow-400"
						variant="outline">{CTA.text}</Button
					>
				{/if}
			</div>
		</div>
	</div>
</section>
