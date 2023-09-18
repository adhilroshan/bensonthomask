<!-- <iframe
	src="https://www.youtube.com/embed/zftKyphUW5g"
	class="w-full h-full absolute p-10 rounded-lg"
/> -->
<script>
	import { API_KEY, CHANNEL_ID } from '$lib/auth/key';
	let isLive = false;
	let videoId = '';

	async function checkLiveStatus() {
		const apiKey = API_KEY;
		const channelId = CHANNEL_ID;

		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
		);

		const data = await response.json();

		if (data.items.length > 0) {
			isLive = true;
			videoId = data.items[0].id.videoId;
		}
	}

	checkLiveStatus();
</script>

<svelte:head>
	<title>Live | Benson Thomas</title>
</svelte:head>
<main>
	<div class="flex flex-col justify-center items-center w-screen h-[80vh] relative rounded-lg">
		{#if isLive}
			<iframe
				class="w-full h-full absolute p-10 rounded-lg"
				src={`https://www.youtube.com/embed/${videoId}`}
				frameborder="0"
				allowfullscreen
			/>
		{:else}
			<!-- Display the video of the previous live stream -->
			<p
				class="z-10 absolute top-2 text-lg font-semibold text-center text-bgc capitalize lg:text-xl"
			>
				No live stream is currently happening. Here's the previous live stream:
			</p>
			<iframe
				class="w-full h-full absolute top-5 p-10 rounded-lg"
				src={`https://www.youtube.com/embed/${videoId}`}
				frameborder="0"
				allowfullscreen
			/>
		{/if}
	</div>
</main>
