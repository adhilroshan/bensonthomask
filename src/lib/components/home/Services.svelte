<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->
<script>
	import Fa from 'svelte-fa';
	import { faArchway } from '@fortawesome/free-solid-svg-icons';
	import Button from '../global/Button.svelte';
	import { Variant } from '$lib/types';

	var items = [
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		},
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		},
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		},
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		},
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		},
		{
			endpoint: '/church',
			title: 'Church',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			logo: faArchway
		}
	];

	var title = 'Magna culpa enim occaecat officia in esse.';
	var btnText = 'Get Started Today';
	var desc =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio.';
</script>

<section class="flex items-center min-h-screen justify-center">
	<div class="max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
		<div
			class="grid grid-cols-1 gap-y-8 place-items-center lg:grid-cols-2 lg:items-center lg:gap-x-16"
		>
			<div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
				<h2 class="text-3xl text-white font-bold sm:text-4xl">{title}</h2>

				<p class="mt-4 text-gray-600">
					{desc}
				</p>

				<!-- className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400" -->
				<Button href="#1" className="mt-8" variant={Variant.rounded}>
					{btnText}
				</Button>
			</div>

			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
				{#each items as item}
					<a
						class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
						href={item.endpoint}
					>
						<span class="inline-block rounded-lg bg-gray-50 p-3">
							<Fa icon={item.logo} />
						</span>

						<h2 class="mt-2 font-bold text-white">{item.title}</h2>

						<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
							{item.description}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
