<script lang="ts">
	import Card from '$lib/components/media/Card.svelte';
	import { onMount } from 'svelte';

	interface Playlist {
		playlistId: string;
		playlistTitle: string;
		playlistThumbnailUrl: string;
	}

	let playlists: Playlist[] = [];

	const API_KEY = 'AIzaSyBAdvoGy_Hg_VGTyOfiOo_QVpRw7xWL6XI';
	const CHANNEL_ID = 'UCPoY5l3eAzBqeBJwT6iVhgw';
	let maxResults = 40;
	let nextPageToken = '';

	async function fetchPlaylists() {
		const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,contentDetails&maxResults=${maxResults}&pageToken=${nextPageToken}`;

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

				const sortedPlaylists = sortOrder.map((title) =>
					fetchedPlaylists.find((playlist: Playlist) => playlist.playlistTitle.includes(title))
				);
				const remainingPlaylists = fetchedPlaylists.filter(
					(playlist: Playlist) => !sortedPlaylists.includes(playlist)
				);

				playlists = sortedPlaylists.concat(remainingPlaylists);
				console.log(playlists);

				nextPageToken = data.nextPageToken || '';
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(fetchPlaylists);

	let selectedPlaylist: Playlist | null = null;

	function openPlaylist(playlist: Playlist) {
		selectedPlaylist = playlist;
	}
</script>

<svelte:head>
	<title>Media | Benson Thomas</title>
</svelte:head>
<div
	class="grid grid-cols-1 md:grid-cols-[repeat(3,1fr)] gap-x-1 gap-y-1 place-items-center mx-4 md:mx-24"
>
	{#each playlists as playlist, index}
		<!-- <div
			class="w-[var(--size)] relative overflow-hidden text-black cursor-pointer rounded-[2rem]"
			style="transform: translateZ(0);"
			role="button"
			on:click={() => openPlaylist(playlist)}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === 'Space') {
					openPlaylist(playlist);
				}
			}}
			tabindex="0"
		>
			<img
				src={playlist.playlistThumbnailUrl}
				alt={playlist.playlistTitle}
				class=" w-full h-full object-cover"
			/>
			<span
				class="absolute w-full backdrop-blur-[var(--blur] h-[30%] content-center px-6 py-0 left-0 bottom-0"
				style="background:  hsl(0 0% 100% / 0.5);"
			>
				<span>{playlist.playlistTitle}</span>
			</span>
		</div> -->
		<Card {playlist} {openPlaylist} idx={index} />
	{/each}
</div>

{#if selectedPlaylist}
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
{/if}

<style>
	/* .playlist-container {
		display: grid;
		padding: 10px;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 4px;
		grid-row-gap: 4px;
		place-items: center;
	}

	.card {
		--blur: 16px;
		--size: clamp(300px, 50vmin, 600px);
		width: var(--size);
		aspect-ratio: 4 / 3;
		position: relative;
		border-radius: 2rem;
		overflow: hidden;
		color: #000;
		transform: translateZ(0);
		cursor: pointer;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__footer {
		padding: 0 1.5rem;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: hsl(0 0% 100% / 0.5);
		backdrop-filter: blur(var(--blur));
		height: 30%;
		align-content: center;
	}

	.iframe-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	iframe {
		width: 80%;
		height: 70%;
		border: none;
	}

	button {
		margin-top: 10px;
		background-color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	} */
</style>
