<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { createEventDispatcher, onMount } from 'svelte';
	import Card from './Card.svelte';
	import { API_KEY as apiKey } from '$lib/auth/key';

	interface Playlist {
		playlistId: string;
		playlistTitle: string;
		playlistThumbnailUrl: string;
	}
	interface Video {
		videoId: string;
		videoTitle: string;
		videoThumbnailUrl: string;
	}
	// import * as Card from '$lib/components/ui/card';
	// export let apiKey = 'AIzaSyBAdvoGy_Hg_VGTyOfiOo_QVpRw7xWL6XI';
	type YoutubePlaylistItem = {
		id: string;
		snippet: {
			title: string;
			thumbnails: {
				default: {
					url: string;
				};
				high: {
					url: string;
				};
				maxres: {
					url: string;
				};
			};
			resourceId: {
				videoId: string;
			};
		};
	};
	let playlistItems: YoutubePlaylistItem[] = [];
	export let idx: number;

	onMount(async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlist.playlistId}&part=snippet&maxResults=10`
		);
		const data = await response.json();
		playlistItems = data.items;
	});

	export let playlist: Playlist;
	// console.log(index);
	// export let openVideo: (videoId: string) => void;
	// export let openPlaylist: (playlist: Playlist) => void;

	const dispatch = createEventDispatcher();

	function openVideo(v: string) {
		dispatch('video', {
			videoId: v
		});
	}
</script>

<div class="flex flex-col justify-center items-center overflow-hidden">
	<h1 class="text-bgc mx-auto my-2 text-xl font-semibold font-lora">{playlist.playlistTitle}</h1>
	<Splide
		options={{
			lazyLoad: 'nearby',
			padding: 10,
			// rewind: true,
			snap:true,
			drag: 'free',
			gap: '1rem',
			type: 'loop',
			focus: 'center',
			perPage: 3,
			width: '80vw',

			height: '20rem',
			// autoWidth: true,
			pagination: false,
			breakpoints: {
				1024: {
					perPage: 3
				},
				767: {
					perPage: 2
				},
				640: {
					perPage: 1
				}
			},
		}}
		aria-label={playlist.playlistTitle}
	>
		{#each playlistItems as item, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<SplideSlide class="h-60 aspect-video	 w-auto" key={i}>
				<!-- <img
					class="w-full h-full object-cover"
					src={item.snippet.thumbnails.default.url}
					alt={item.snippet.title}
				/> -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => {
						openVideo(item.snippet.resourceId.videoId);
						// console.log(item.snippet.resourceId.videoId);
					}}
				>
					<Card title={item.snippet.title} imgUrl={item.snippet.thumbnails.high.url} />
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
