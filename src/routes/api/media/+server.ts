import { json } from '@sveltejs/kit';
import type { MediaPageData } from '$lib/types';

async function getAbout() {
	const paths = import.meta.glob('/src/data/media/media.json', { eager: true });
	const file = paths['/src/data/media/media.json'] as MediaPageData;
	return file;
}

export async function GET() {
	const mediaPageData = await getAbout();
	return json(mediaPageData);
}
