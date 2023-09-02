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
	export let textColor: string = '#111';
	export let bgColor: string = '';
	export let bgShadow: string = '#4E473B';
	// export let height: string = '80vh';
	export let blendBg: boolean = false;
	export let centerTitle: boolean = false;
</script>

<section
	style="background-color: {bgColor};"
	class="relative xl:mx-auto mx-5 mt-1 rounded-2xl m-20 max-h-screen max-w-screen-xl h-96 shadow-lg shadow-[{bgShadow}]"
>
	{#if bgImg}
		<img
			src={bgImg}
			class="{blendBg
				? 'opacity-5 grayscale'
				: 'opacity-75'} h-full w-full -z-0 object-cover absolute rounded-2xl"
			alt=""
		/>
	{/if}
	<div class=" mx-auto w-full h-full">
		<div
			class=" flex flex-wrap h-full {centerTitle
				? 'justify-center'
				: 'justify-between gap-8'} px-10 items-center"
		>
			<div class="z-10">
				<h2 style="color: {textColor};" class="text-3xl text-center font-bold sm:text-4xl">
					{title}
				</h2>

				{#if description}
					<p
						style="color: {textColor};"
						class="mt-4 opacity-90 italic text-ellipsis mx-auto md:w-2/3 text-center"
					>
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
