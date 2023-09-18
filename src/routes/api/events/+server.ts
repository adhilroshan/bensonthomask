import { json } from '@sveltejs/kit';
// import type {  } from '$lib/types';

import type { Events } from '$lib/types';

async function getEvents() {
	let events: Events[] = [];

	const paths = import.meta.glob('/src/data/events/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Events, 'slug'>;
			const event = { ...metadata, slug } satisfies Events;
			event.published && events.push(event);
		}
	}

	events = events.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return events;
}

export async function GET() {
	const events = await getEvents();
	return json({
		events
	});
}
