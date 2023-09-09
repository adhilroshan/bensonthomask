<script>
	// import type { AboutMeData } from '$lib/types/types';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	export let data;

	const title = data.about.title;
	const description = data.about.description;
	const bgColor = data.about.bgColor;
	const bgImg = data.about.bgImg;
	// import bgImg from '$lib/assets/bg.jpg';
	// let title = 'About Me';
	// let description = `Hi, I'm Benson Thomas, a Christian YouTuber with over 200,000 subscribers. I create videos about my faith, life, and family. I'm passionate about sharing my faith in a relatable and down-to-earth way. I also love to make people laugh and inspire them through my videos.`;
	// // let height = '60vh';
	// let bgColor = '#E6D3B2';
</script>

<svelte:head>
	<title>About | Benson Thomas</title>
</svelte:head>
<div class="h-screen">
	<PageHeader {title} {description} {bgImg} {bgColor} blendBg />
</div>
