<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">

	export let isVideoSelected: boolean;
	export let videoId: unknown;

	function getYoutubeEmbedUrl(videoId: unknown) {
		return `https://www.youtube.com/embed/${videoId}`;
	}
</script>

{#if isVideoSelected}
	<div
		class="fixed w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col items-center z-40 justify-center left-0 top-0 playlist-overlay"
		on:click={() => (isVideoSelected = false)}
	>
		<iframe
			on:click|stopPropagation
			title=""
			class="w-4/5 rounded-lg aspect-video lg:h-[70%] border-[none]"
			src={getYoutubeEmbedUrl(videoId)}
			frameborder="0"
			allowfullscreen
		/>
	</div>
{/if}
