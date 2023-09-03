<script lang="ts">
	import Carousel from '../../lib/components/media/Carousel.svelte';
	import VideoOverlay from '$lib/components/global/VideoOverlay.svelte';
	import { onMount } from 'svelte';
	import { API_KEY, CHANNEL_ID } from '$lib/auth/key';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import { blur, fade } from 'svelte/transition';

	interface Playlist {
		playlistId: string;
		playlistTitle: string;
		playlistThumbnailUrl: string;
	}

	let playlists: Playlist[] = [];
	let excludedPlaylists: Playlist[];
	let nextbtn: boolean = false;
	let maxResults = 40;
	// let nextPageToken = '';

	async function fetchPlaylists() {
		const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,contentDetails&maxResults=${maxResults}`;
		// const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,contentDetails&maxResults=${maxResults}&pageToken=${nextPageToken}`;

		try {
			const response = await fetch(apiUrl);
			const data = await response.json();

			if (data.items && data.items.length > 0) {
				// Extract the playlists from the response
				const fetchedPlaylists = data.items.map((item: any) => ({
					playlistId: item.id,
					playlistTitle: item.snippet.title,
					playlistThumbnailUrl: item.snippet.thumbnails.medium.url
				}));

				// Sort the playlists based on your specified order
				const sortOrder = [
					'Music Video',
					'ENGLISH CHRISTIAN WORSHIP - CHOIR',
					'MINISTRY || TESTIMONY || SPEECH',
					'ENGLISH CHRISTIAN HYMNS',
					'MALAYALAM CHRISTIAN WORSHIP - CHOIR'
				];

				const excludeItems: string[] = [
					'Kerala Trip 2023',
					'Worship Session | 2021',
					'Worship Session | 2018',
					'Worship Sessions | 2019',
					'Christian Mission & Evangelism | Benson Thomas',
					'JERUSALEM the Capital of ISRAEL',
					'Pratyasha Ganangal | Songs of Hope | Praise & Worship | Benson Thomas',
					'WEEKDAY PRAYER MEETING WORSHIP',
					'SONGS OF WORSHIP [MALAYALAM]'
				];
				const sortedPlaylists = sortOrder.map((title) =>
					fetchedPlaylists.find((playlist: Playlist) => playlist.playlistTitle.includes(title))
				);
				excludedPlaylists = excludeItems.map((title) =>
					fetchedPlaylists.find((playlist: Playlist) => playlist.playlistTitle.includes(title))
				);
				const remainingPlaylists = fetchedPlaylists.filter((playlist: Playlist) => {
					return (
						!sortedPlaylists.includes(playlist) && !excludeItems.includes(playlist.playlistTitle)
					);
				});

				console.log('\nRemaining Playlist\n', remainingPlaylists, '\n');
				playlists = sortedPlaylists.concat(remainingPlaylists);
				console.log(playlists);
				console.log(excludedPlaylists);
				nextbtn = true;
				// nextPageToken = data.nextPageToken || '';
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(fetchPlaylists);
	function loadExcludedPlaylist() {
		playlists = excludedPlaylists;
		nextbtn = false;
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Optional: Add smooth scrolling effect
		});
	}
	function getYoutubeEmbedUrl(videoId: unknown) {
		console.log(videoId);
		return `https://www.youtube.com/embed/${videoId}`;
	}
	// let selectedPlaylist: Playlist | null = null;
	let selectedVideo: string;
	let isVideoSelected: boolean = false;

	function openVideo(e: { detail: { videoId: string } }) {
		selectedVideo = e.detail.videoId;
		isVideoSelected = true;
		console.log(selectedVideo);
		console.log(isVideoSelected);

		// console.log(e.detail);
	}
	// function openVideo(videoId: string) {
	// 	selectedVideo = videoId;
	// }
</script>

<svelte:head>
	<title>Media | Benson Thomas</title>
</svelte:head>

<PageHeader
	title="Media"
	centerTitle
	bgColor="#dec3a3"
	bgImg="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
/>

<!-- <div
	class="grid grid-cols-1 lg:lg:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] gap-x-1 gap-y-1 place-items-center mx-4 md:mx-24"
> -->
{#each playlists as playlist, idx}
	<Carousel {playlist} on:video={openVideo} {idx} />
{/each}
<!-- </div> -->
{#if nextbtn}
	<!-- content here -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="rounded-md bg-accent px-5 py-2.5 text-sm font-medium w-min text-text shadow hover:scale-105 active:scale-95 transition-all duration-150 block mx-auto my-0"
		on:click={loadExcludedPlaylist}
	>
		Next
	</div>
{/if}

{#if isVideoSelected}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="fixed w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col transition-all duration-200 items-center z-40 justify-center left-0 top-0"
		role="dialog"
		transition:blur
		on:click={() => (isVideoSelected = false)}
	>
		<button
			class="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white"
			on:click={() => (isVideoSelected = false)}
		>
			Close
		</button>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<iframe
			transition:fade
			on:click|stopPropagation
			title=""
			class="w-4/5 relative rounded-lg transition-all duration-200 aspect-video lg:h-[70%] border-[none]"
			src={getYoutubeEmbedUrl(selectedVideo)}
			frameborder="0"
			allowfullscreen
		/>
	</div>
{/if}
<!-- {#if selectedPlaylist}
	<div
		class="fixed w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col items-center z-40 justify-center left-0 top-0"
	>
		<iframe
			title=""
			class="w-4/5 rounded-lg aspect-video lg:h-[70%] border-[none]"
			src={`https://www.youtube.com/embed?listType=playlist&list=${selectedPlaylist.playlistId}`}
			frameborder="0"
			allowfullscreen
		/>
		<button
			class="bg-white cursor-pointer mt-2.5 px-5 py-2.5 rounded-[5px] border-none"
			on:click={() => (selectedPlaylist = null)}>Close</button
		>
	</div>
{/if} -->
