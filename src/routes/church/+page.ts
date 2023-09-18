import type { ChurchData } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/church');
	const church = (await response.json()) as ChurchData;
	return { church };
}
