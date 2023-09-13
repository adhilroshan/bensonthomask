<script lang="ts">
	import Button from '../ui/button/button.svelte';

	import { Variant } from '$lib/types';

	export let bg: string = 'accent';
	export let href: string;
	export let className: string = '';
	// export let btnText: string;

	export let variant: Variant;
</script>

<!-- {:else if  otherCondition} -->

{#if variant == Variant.rounded}
	<Button
		{href}
		class="rounded-md bg-{bg} px-5 py-2.5 text-sm font-medium text-text shadow hover:scale-105 active:scale-95 transition-all duration-150 {className}"
	>
		<!-- {btnText} -->
		<slot />
	</Button>
{:else if variant == Variant.partiallyRounded}
	<Button
		{href}
		class="rounded-md bg-{bg} px-5 py-2.5 text-sm font-medium text-text shadow hover:scale-105 active:scale-95 transition-all duration-150 {className}"
	>
		<slot />
		<!-- {btnText} -->
	</Button>
{:else if variant == Variant.outline}
	<Button
		{href}
		class="inline-block rounded-none py-auto rounded-tl-lg rounded-br-lg border-2 border-borderColor bg-bgc  px-6 md:px-8 text-sm font-medium text-borderColor  hover:bg-borderColor hover:text-bgc focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 active:scale-95 transition-all duration-150 {className}"
	>
		<slot />
		<!-- {btnText} -->
	</Button>
{/if}
