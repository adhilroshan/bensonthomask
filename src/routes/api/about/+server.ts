import { json } from '@sveltejs/kit';
import type { AboutMeData } from '$lib/types';

// const path='/src/data/about/about.md';

// interface File{
// 	metadata:AboutMeData;
// }

// async function getAboutMeData() {

// 	const paths = import.meta.glob('/src/data/about/about.md', { eager: true });
// 	const file = paths[path] as File;
// 	return file.metadata;

// }
async function getAbout() {
	const paths = import.meta.glob('/src/data/about/about.json', { eager: true });
	const file = paths['/src/data/about/about.json'] as AboutMeData;
	return file;
}

export async function GET() {
	const aboutMeData = await getAbout();
	return json(aboutMeData);
}
