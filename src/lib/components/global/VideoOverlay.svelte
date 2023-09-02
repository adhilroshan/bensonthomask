<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
	export let isVideoSelected: boolean;
	export let selectedVideo: string;

	console.log(selectedVideo);
	function getYoutubeEmbedUrl(videoId: unknown) {
		console.log(videoId);
		return `https://www.youtube.com/embed/${videoId}`;
	}
</script>

<div
	class="fixed w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col transition-all duration-200 items-center z-40 justify-center left-0 top-0 playlist-overlay"
	on:click={() => (isVideoSelected = false)}
>
	<iframe
		on:click|stopPropagation
		title=""
		class="w-4/5 relative rounded-lg transition-all duration-200 aspect-video lg:h-[70%] border-[none]"
		src={getYoutubeEmbedUrl(selectedVideo)}
		frameborder="0"
		allowfullscreen
	/>
</div>
