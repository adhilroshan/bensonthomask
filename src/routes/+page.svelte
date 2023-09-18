<script lang="ts">
	import Services from '$lib/components/home/Services.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Events from '$lib/components/home/Events.svelte';
	import Showcase from '$lib/components/home/Showcase.svelte';
	import Story from '$lib/components/home/Story.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import Footer from '$lib/components/home/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home | Benson Thomas</title>
</svelte:head>
<Hero heroData={data.home.heros} />
<Services />
<Events events={data.home.events} /><br /><br />
<Showcase />
<Story data={data.home} />
<Testimonials />
<Footer />
