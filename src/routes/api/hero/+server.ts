import { json } from '@sveltejs/kit';
// import type { Hero } from '$lib/types/types';

const path='/src/data/hero.md';

interface File{
	metadata:{
		tagline:string;
		description:string;
		btnUrl:string;
		btnText:string;
		Headshot:string;
	}
}

async function getHero() {
	
	const paths = import.meta.glob('/src/data/hero.md', { eager: true });
	const file = paths[path] as File;
	return file.metadata;

}

export async function GET() {
	const heros = await getHero();
	return json(heros);
}
