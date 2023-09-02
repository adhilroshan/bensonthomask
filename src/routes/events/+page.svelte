<script>
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import Events from '$lib/components/home/Events.svelte';

	let bgImg =
		'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80';
</script>

<svelte:head>
	<title>Events | Benson Thomas</title>
</svelte:head>

<PageHeader title="Events" bgColor="#111" textColor="#f1f1f1" centerTitle {bgImg} />
