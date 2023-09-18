import { json } from '@sveltejs/kit';

import type { Hero, Event, Story, StoryData } from '$lib/types';

// interface StoryFile {
// 	metadata: Story;
// }
// interface HeroFile {
// 	metadata: Hero;
// }
// interface EventFile {
// 	metadata: {
// 		title: string;
// 		desc: string;
// 		btnText: string;
// 		img: string;
// 	};
// }

async function getHero() {
	const paths = import.meta.glob('/src/data/home/hero.json', { eager: true });
	const file = paths['/src/data/home/hero.json'] as Hero;

	return file;
}
// async function getHero() {
// 	const path = '/src/data/home/hero.md';

// 	const paths = import.meta.glob('/src/data/home/hero.md', { eager: true });
// 	const file = paths[path] as HeroFile;
// 	return file.metadata;

// }

async function getEvents() {
	const paths = import.meta.glob('/src/data/home/event.json', { eager: true });
	const file = paths['/src/data/home/event.json'] as Event;

	return file;
}

// async function getEvents() {
// 	const path = '/src/data/home/event.md';

// 	const paths = import.meta.glob('/src/data/home/event.md', { eager: true });
// 	const file = paths[path] as EventFile;
// 	return file.metadata;
// }

async function getStory() {
	const paths = import.meta.glob('/src/data/home/story.json', { eager: true });
	const file = paths['/src/data/home/story.json'] as Story;

	return file;
}

// async function getStory() {
// 	const path='/src/data/home/story.md';

// 	const paths = import.meta.glob('/src/data/home/story.md', { eager: true });
// 	const file = paths[path] as StoryFile;
// 	return file.metadata;

// }

async function getStoryData() {
	let storyData: StoryData[] = [];

	const paths = import.meta.glob('/src/data/home/story/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<StoryData, 'slug'>;
			const story = { ...metadata, slug } satisfies StoryData;
			storyData.push(story);
		}
	}

	storyData = storyData.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return storyData;
}

export async function GET() {
	const heros = await getHero();
	const events = await getEvents();
	const story = await getStory();
	const storyData = await getStoryData();
	return json({
		heros,
		events,
		story,
		storyData
	});
}
