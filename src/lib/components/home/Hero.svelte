<script lang="ts">
	import type { Hero } from '$lib/types';
	import { Variant } from '$lib/types';

	export let heroData: Hero;
	const Headshot = heroData.img;
	const tagline = heroData.title;
	const description = heroData.description;
	import Button from '../global/Button.svelte';
	var CTA = {
		url: heroData.btnUrl,
		text: heroData.btnText
	};
	import img from '$lib/assets/benson3.png';
	// import Bg from '$lib/assets/bg.jpg';
	// let tagline: string = 'Benson Thomas K';
	// let tagline: string = 'I WILL SING TO THE LORD FOR HE IS GOOD HIS MERCIES ENDURETH FOREVER';
	// let tagline: string = 'Bensonthomask: The sound of hope.';
	// let description: string;
	//  = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
	//       atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
	//       veniam tempora deserunt? Molestiae eius quidem quam repellat.`;
	// description = '"I will sing to the lord for he is good his mercies endureth forever"';
</script>

<section
	class="relative m-6 md:mx-12 mt-1 rounded-2xl bg-bgc min-h-fit shadow-lg shadow-borderColor"
>
	<!-- <img src={Bg} class="h-[70vh] opacity-5 grayscale w-full -z-0 object-cover absolute" alt="" /> -->
	<div class="mx-auto max-w-screen-xl">
		<div
			class=" flex md:flex-row flex-col h-full justify-between px-10 xl:px-10 md:px-20 gap-8 items-center"
		>
			<div class="lg:order-last md:pb-20">
				<!-- <div
					class="relative place-self-center drop-shadow-2xl h-80 w-72 overflow-hidden rounded-full sm:h-90 bg-accent"
				>
					<img alt="Party" src={Headshot} class="absolute inset-0 h-full w-full object-cover" />
				</div> -->
				<div class=" relative max-w-xs mx-auto">
					<div
						class="grid items-end overflow-hidden drop-shadow-xl"
						style="aspect-ratio: 1/1.5; border-radius: 0 0 ;"
					>
						<div
							style="inset: auto 0 0; "
							class=" border-4 border-borderColor aspect-square rounded-tl-[80px] rounded-br-[80px] absolute mx-auto w-full object-cover"
						/>
						<div
							style="inset: auto 0 0; "
							class="border-b-4 border-r-4 border-borderColor z-30 aspect-square rounded-tl-[80px] rounded-br-[80px] absolute mx-auto w-full object-cover"
						/>
						{#if Headshot}
							 <!-- content here -->
							 <img alt="Headshot" src={Headshot} class="relative z-20 rounded-br-[80px]" />
							 {:else}
							 <img alt="Headshot" src={img} class="relative z-20 rounded-br-[80px]" />
							 <!-- else content here -->
						{/if}
					</div>
				</div>
			</div>

			<div class="z-10 justify-center pb-12 lg:pb-0">
				<h2 class="text-2xl md:text-4xl text-text font-bold sm:text-4xl">Hi I'm</h2>
				<h2 class="text-2xl md:text-4xl text-text font-bold sm:text-4xl">{tagline}</h2>

				{#if description}
					<p class="mt-4 text-gray md:text-lg text-ellipsis md:w-96 font-lora">
						{description}
					</p>
				{/if}

				{#if CTA}
					<!-- <a href={CTA.url} class="mt-8"
												class="mt-8 inline-block rounded-none py-auto rounded-tl-md rounded-br-md border-2 border-borderColor bg-bgc  px-6 md:px-8 text-sm font-medium text-borderColor transition hover:bg-accent/90 focus:outline-none focus:ring focus:ring-yellow-400"

						>
						{CTA.text}
					</a> -->
					<Button href={CTA.url} className="mt-8  " variant={Variant.outline}>{CTA.text}</Button>
				{/if}
			</div>
		</div>
	</div>
</section>
