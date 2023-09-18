import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// console.log(params.slug);
	try {
		const event = await import(`../../../data/events/${params.slug}.md`);
		console.log(event.metadata.thumbnail);

		return {
			content: event.default,
			meta: event.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
