import { json } from '@sveltejs/kit';
import type { ChurchData } from '$lib/types';
// const path = '/src/data/church/church.md';

// interface File {
// 	metadata: ChurchData;
// }

// async function getChurchData() {
// 	const paths = import.meta.glob('/src/data/church/church.md', { eager: true });
// 	const file = paths[path] as File;
// 	return file.metadata;
// }
async function getChurch() {
	const paths = import.meta.glob('/src/data/church/church.json', { eager: true });
	const file = paths['/src/data/church/church.json'] as ChurchData;
	return file;
}

export async function GET() {
	// const churchData = await getChurchData();
	const churchData = await getChurch();
	return json(churchData);
}
