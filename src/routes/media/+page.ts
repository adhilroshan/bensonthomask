import type { MediaPageData } from '$lib/types';

export async function load({ fetch }): Promise<{ media: MediaPageData }> {
	const response = await fetch('api/media');
	const media: MediaPageData = await response.json();
	return { media };
}
