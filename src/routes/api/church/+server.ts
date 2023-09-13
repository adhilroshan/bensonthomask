import { json } from '@sveltejs/kit';
import type { ChurchData } from '$lib/types';

const path='/src/data/church.md';

interface File{
	metadata:ChurchData;
}

async function getChurchData() {
	
	const paths = import.meta.glob('/src/data/church.md', { eager: true });
	const file = paths[path] as File;
	return file.metadata;

}

export async function GET() {
	const churchData = await getChurchData();
	return json(churchData);
}
