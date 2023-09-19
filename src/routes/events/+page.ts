import type { Events } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/events');
	const res = await response.json();
	const events: Events[] = res.events;
	console.log('events: ' + events);

	return { events };
}
