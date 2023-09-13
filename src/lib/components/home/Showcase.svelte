<script lang="ts">
	import { API_KEY as apiKey, CHANNEL_ID as channelId } from '$lib/auth/key';
	import { onMount } from 'svelte';
	import Button from '../global/Button.svelte';
	import { Variant } from '$lib/types';
	let latestVideos: { title: string; videoId: string }[] = [];
	// Fetch the latest video data
	async function fetchLatestVideos() {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&type=video&part=snippet&maxResults=12`
		);
		const data: any = await response.json();
		if (data.items && data.items.length > 0) {
			latestVideos = data.items.map((item: any) => ({
				title: item.snippet.title,
				videoId: item.id.videoId
			}));
		}
	}

	// Fetch the latest video when the component mounts

	onMount(fetchLatestVideos);
</script>

<h1 class="my-10 text-2xl md:text-4xl text-bgc font-bold text-center">What we have for you</h1>
<p class="w-5/6 md:w-1/2 text-sm -mt-5 text-bgc/80 mb-10 text-center mx-auto">
	Excepteur dolor id aliqua occaecat ipsum. Nostrud culpa labore velit nisi et amet velit nisi minim
	officia dolore. Consequat laborum commodo consectetur consectetur ullamco et aliqua irure duis
	sunt anim minim.
</p>
<div class="flex flex-wrap justify-center mx-4 my-10">
	{#each latestVideos as video}
		<div class="m-2 w-auto h-auto md:w-80">
			<iframe
				title=""
				class="rounded-lg w-full"
				src={`https://www.youtube.com/embed/${video.videoId}`}
				frameborder="0"
				allowfullscreen
			/>
		</div>
	{/each}
</div>
<div class="flex justify-center mb-10">
	<Button variant={Variant.rounded} href="/media">More Videos</Button>
</div>
