<script>
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import bgImg from '$lib/assets/bg.jpg';

	let title = 'About';
	let description = 'About';
	let height = '70vh';
	let bgColor = '#E6D3B2';
</script>

<div class="h-screen">
	<PageHeader {title} {description} {height} {bgImg} {bgColor} blendBg />
</div>
