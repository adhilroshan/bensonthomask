<script lang="ts">
	import InstagramPost from './../../lib/components/gracecanopy/InstagramPost.svelte';
	import { onMount } from 'svelte';
	import { API_KEY as apiKey } from '$lib/auth/key';
	import PageHeader from '$lib/components/global/PageHeader.svelte';

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
	// import bgImg from '$lib/assets/bg.jpg';
	const bgImg =
		'https://img.freepik.com/free-photo/church-iranzu-monastery_181624-24306.jpg?w=1380&t=st=1693681156~exp=1693681756~hmac=1ae11a3984298ad3beda05569cdbc44caf38900bceaf031cf7428ddc644a2440';

	let description = `In the Bible, the "canopy of grace" is a metaphor for the protection and provision of God's grace. It is mentioned in Isaiah 4:6, where it is said that God will be "a covering canopy of glory" and "an overshadowing tabernacle of grace" for His people.`;
</script>

<svelte:head>
	<title>Grace Canopy | Benson Thomas</title>
</svelte:head>

<PageHeader bgColor="#" textColor="#f1f1f1" title="Grace Canopy" {description} {bgImg} />

<div class="flex flex-wrap justify-center mx-4 lg:mx-24">
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
	<iframe
		class="aspect-square m-2 md:w-[24rem]"
		src="https://www.instagram.com/p/B-Xpa7Fh43c/embed/"
		frameborder="0"
	/>
	<iframe
		class="aspect-square m-2 md:w-[24rem]"
		src="https://www.instagram.com/p/CAjVwmQBisi/embed/"
		frameborder="0"
	/>

	<!-- <InstagramPost postUrl="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" />
	<InstagramPost postUrl="https://www.instagram.com/p/CAjVwmQBisi/embed/" /> -->
</div>
