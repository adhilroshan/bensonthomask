import { json } from '@sveltejs/kit';
import type { Story,StoryData } from '$lib/types';

const path='/src/data/story.md';

interface File{
	metadata:Story
}

async function getStory() {
	
	const paths = import.meta.glob('/src/data/story.md', { eager: true });
	const file = paths[path] as File;
	return file.metadata;

}
async function getStoryData() {
	
	let storyData: StoryData[] = []

	const paths = import.meta.glob('/src/data/story/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<StoryData, 'slug'>
			const story = { ...metadata, slug } satisfies StoryData
			storyData.push(story)
		}
	}

	storyData = storyData.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return storyData

}


export async function GET() {
	const story = await getStory();
	const storyData = await getStoryData();
	return json({
		story,
		storyData
	});
}
