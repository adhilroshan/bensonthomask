<script lang="ts">
	interface Playlist {
		playlistId: string;
		playlistTitle: string;
		playlistThumbnailUrl: string;
	}
	import * as Card from '$lib/components/ui/card';

	export let playlist: Playlist;
	export let idx: number;
	let index = idx.toString();
	// console.log(index);
	export let openPlaylist: (playlist: Playlist) => void;
</script>

<div
	class="m-3 flex flex-col group hover:cursor-pointer items-center justify-center w-full max-w-sm mx-auto {index ===
	'0'
		? ''
		: ''}"
	id={index}
	on:click={() => {
		openPlaylist(playlist);
		// console.log(playlist.playlistId);
	}}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === 'Space') {
			openPlaylist(playlist);
		}
	}}
	role="button"
	tabindex="0"
>
	<div
		class="w-full relative h-64 bg-gray-300 bg-center bg-cover aspect-video rounded-lg shadow-md"
		style="background-image: url({playlist.playlistThumbnailUrl});"
	>
		<div
			class="w-full z-20 absolute bottom-0 overflow-hidden rounded-b-lg flex items-center justify-center bg-borderColor/60 group-hover:bg-borderColor backdrop-blur-lg shadow-lg dark:bg-gray-800"
		>
			<h3
				class="py-2 font-lora tracking-wide w-5/6 h-1/3 min-h-fit text-center text-[#F0E5D1] dark:text-white"
			>
				{playlist.playlistTitle}
			</h3>

			<!-- <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
				<span class="font-bold text-gray-800 dark:text-gray-200" />
				<button
					class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
					>Watch it now</button
				>
			</div> -->
		</div>
		<div
			class="hidden duration-300 transition-all group-hover:flex absolute top-0 left-0 w-full h-full rounded-lg backdrop-blur-sm bg-borderColor/50"
		/>
		<svg
			class="hidden duration-300 transition-all z-10 group-hover:flex absolute left-0 right-0 mx-auto my-auto h-full drop-shadow-md"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="64px"
			height="64px"
			viewBox="0 0 32 32"
			enable-background="new 0 0 32 32"
			xml:space="preserve"
		>
			<g>
				<path
					fill="#E6D3B2"
					d="M16,0C7.178,0,0,7.178,0,16s7.178,16,16,16s16-7.178,16-16S24.822,0,16,0z M16,31C7.729,31,1,24.271,1,16
		S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z"
				/>
				<path
					fill="#E6D3B2"
					d="M19.609,14.802L14.316,10.8c-0.263-0.197-0.567-0.302-0.88-0.302C12.631,10.498,12,11.158,12,12v8
		c0,0.842,0.635,1.502,1.445,1.502c0.313,0,0.619-0.104,0.885-0.304l5.258-3.998c0.382-0.287,0.611-0.742,0.611-1.218
		C20.198,15.512,19.983,15.081,19.609,14.802z M18.985,16.401l-5.258,3.998C13.434,20.622,13,20.453,13,20v-8
		c0-0.326,0.225-0.502,0.437-0.502c0.096,0,0.19,0.034,0.279,0.101l5.293,4.002c0.165,0.123,0.19,0.292,0.19,0.382
		C19.198,16.147,19.122,16.3,18.985,16.401z"
				/>
			</g>
		</svg>
	</div>
</div>
