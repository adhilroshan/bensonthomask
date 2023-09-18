import { json } from '@sveltejs/kit';
import fs from 'fs';
import YAML from 'yaml';

// import type { ChurchData } from '$lib/types';
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
	// const paths = import.meta.glob('./church.yml', { eager: true });
	// const paths = fs.readFileSync('../../../data/church/church.md', 'utf8');
	// return YAML.parse(paths);
	return paths;
	// const file = paths[path] as File;
	// return file.metadata;
}

export async function GET() {
	// const churchData = await getChurchData();
	const churchData = await getChurch();
	return json(churchData);
}
