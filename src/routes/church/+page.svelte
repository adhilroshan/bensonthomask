<script lang="ts">
	let imgUrl =
		'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';

	import { onMount } from 'svelte';

	export let apiKey = 'AIzaSyBAdvoGy_Hg_VGTyOfiOo_QVpRw7xWL6XI'; // Your YouTube Data API key
	export let playlistId = 'PLUhJyvkLp-rOWUDtYfsacytiHts2TV2mY'; // ID of the YouTube playlist
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

<div class="w-full bg-center bg-cover h-[38rem]" style="background-image: url({imgUrl});">
	<div class="flex items-center justify-center w-full h-full bg-gray-900/40">
		<div
			class="text-center w-full h-full backdrop-blur-sm flex flex-col justify-center items-center"
		>
			<h1 class="text-3xl w-2/3 font-semibold text-white lg:text-4xl font-lora">
				<!-- Build your new <span class="text-blue-400">Saas</span> Project -->
				"Thankful to the Almighty for the opportunity to be associated and have experienced worship in
				the Christian and Missionary Alliance Church, Church of God &amp; Philadelphia Full Gospel Assembly."
			</h1>
			<!-- <button
				class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
				>Start project</button
			> -->
		</div>
	</div>
</div>
<!-- PLUhJyvkLp-rOWUDtYfsacytiHts2TV2mY -->
<h1 class="font-semibold p-12 pl-28 text-bgc text-2xl">Church Fellowship &amp; Ministry</h1>
<div class="grid grid-cols-1 mt-4 md:grid-cols-3 gap-x-1 gap-y-1 place-items-center mx-4 md:mx-24">
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
<h1 class="font-semibold p-12 pl-28 text-bgc text-2xl">Church Fellowship &amp; Ministry [Reels]</h1>
<div class="grid grid-cols-1 mt-4 md:grid-cols-3 gap-x-1 gap-y-1 place-items-center mx-4 md:mx-24">
	{#each reels as item }
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
