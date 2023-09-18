<script lang="ts">
	import type { Events } from '$lib/types';

	export let events: Events[];
	import { formatDate } from '$lib/utils';

	console.log(events);
</script>

<section class="">
	<div class="container px-6 py-10 mx-auto">
		<div class="text-center">
			<h1 class="text-2xl font-semibold text-bgc capitalize lg:text-3xl">Upcoming Events</h1>

			<p class="max-w-lg mx-auto mt-4 text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
				laudantium quia tempore delect
			</p>
		</div>

		<div class="flex flex-wrap gap-8 mt-8">
			{#each events as event}
				<a href={`events/${event.slug}`}>
					<img
						class="relative z-10 object-cover w-full rounded-md h-96"
						src={event.thumbnail}
						alt=""
					/>

					<div
						class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
					>
						<a
							href={`events/${event.slug}`}
							class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
						>
							{event.title}
						</a>

						<p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
							{event.description}
						</p>

						<p class="mt-3 text-sm text-borderColor">{formatDate(event.date)}</p>
					</div>
				</a>
			{/each}

			<!-- <div>
				<img
					class="relative z-10 object-cover w-full rounded-md h-96"
					src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
				/>

				<div
					class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
				>
					<a
						href="#"
						class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
					>
						Est minim reprehenderit quis laboris eu velit.
					</a>

					<p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem
						nesciunt, laudantium quia tempore delect
					</p>

					<p class="mt-3 text-sm text-borderColor">20 October 2023</p>
				</div>
			</div> -->
		</div>
	</div>
</section>
