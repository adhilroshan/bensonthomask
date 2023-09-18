<script lang="ts">
	import { onMount } from 'svelte';
	import { API_KEY as apiKey } from '$lib/auth/key';

	export let data;
	const text= data.church.text
	const imgUrl = data.church.imgUrl;
	const playlistId = data.church.playlistId; // ID of the YouTube playlist
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
	let reels = [
		'https://www.facebook.com/reel/1540221803185787',
		'https://www.facebook.com/reel/1201671043674926',
		'https://www.facebook.com/reel/163908496359124',
		'https://www.facebook.com/benson.thomas.9/videos/1392526778231644',
		'https://www.facebook.com/benson.thomas.9/videos/552959363519904'
		//  'https://www.facebook.com/reel/',
	];
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

<svelte:head>
	<title>Church | Benson Thomas</title>
</svelte:head>
<div
	class="m-12 mx-auto mt-1 rounded-2xl max-h-screen max-w-screen-xl shadow-lg w-full bg-center bg-cover h-[38rem]"
	style="background-image: url({imgUrl});"
>
	<div class="flex items-center justify-center w-full h-full bg-gray-900/40">
		<div
			class="text-center w-full h-full backdrop-blur-sm flex flex-col justify-center items-center"
		>
			<h1 class="text-3xl w-2/3 font-semibold text-white lg:text-4xl font-lora">
				<!-- Build your new <span class="text-blue-400">Saas</span> Project -->
				{text}
			</h1>
			<!-- <button
				class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
				>Start project</button
			> -->
		</div>
	</div>
</div>
<!-- PLUhJyvkLp-rOWUDtYfsacytiHts2TV2mY -->
<h1 class="font-semibold p-12 md:pl-28 text-bgc text-xl md:text-2xl">
	Church Fellowship &amp; Ministry
</h1>
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
</div>
<h1 class="font-semibold p-12 md:pl-28 text-bgc text-xl md:text-2xl">
	Church Fellowship &amp; Ministry [Reels]
</h1>
<div class="flex flex-wrap justify-center mx-4 lg:mx-24">
	{#each reels as item}
		<div class="m-2 w-auto h-auto md:w-[24rem] video-card aspect-video">
			<iframe
				title=""
				class="rounded-lg w-full"
				height="250"
				src={item}
				frameborder="0"
				allowfullscreen
			/>
			<!-- <h3>{item.snippet.title}</h3>
			<p>{item.snippet.description}</p> -->
		</div>
	{/each}
	<!-- <iframe src="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" width="320" height="440" />
	<iframe src="https://www.instagram.com/p/B-Xpa7Fh43c/embed/" width="320" height="440" /> -->
</div>
