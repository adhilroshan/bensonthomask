<script lang="ts">
	import InstagramPost from './../../lib/components/gracecanopy/InstagramPost.svelte';
	import { onMount } from 'svelte';

	export let apiKey = 'AIzaSyBAdvoGy_Hg_VGTyOfiOo_QVpRw7xWL6XI'; // Your YouTube Data API key
	export let playlistId = 'PLI1cvwejI5Sth63AUaRXTlfPtt59o2Jwt'; // ID of the YouTube playlist
	type YoutubePlaylistItem = {
		id: string;
		snippet: {
			title: string;
			thumbnails: {
				default: {
					url: string;
				};
			};
			resourceId: {
				videoId: string;
			};
		};
	};
	let playlistItems: YoutubePlaylistItem[] = [];

	onMount(async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=10`
		);
		const data = await response.json();
		playlistItems = data.items;
	});

	function getYoutubeEmbedUrl(videoId: unknown) {
		return `https://www.youtube.com/embed/${videoId}`;
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-1 place-items-center mx-4 md:mx-24">
	{#each playlistItems as item (item.id)}
		<div class="m-2 w-auto h-auto md:w-[24rem] video-card aspect-video">
			<iframe
				title=""
				class="rounded-lg w-full"
				height="250"
				src={getYoutubeEmbedUrl(item.snippet.resourceId.videoId)}
				frameborder="0"
				allowfullscreen
			/>
			<!-- <h3>{item.snippet.title}</h3>
			<p>{item.snippet.description}</p> -->
		</div>
	{/each}
	<!-- <iframe src="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" width="320" height="440" />
	<iframe src="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" width="320" height="440" /> -->

	<InstagramPost postUrl="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" />
	<InstagramPost postUrl="https://www.instagram.com/p/CAjVwmQBisi/embed/" />
</div>
