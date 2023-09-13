import type { Hero } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/hero')
	const hero: Hero= await response.json()
	const res = await fetch('api/story')
	const story = await res.json()
	console.log(story);
	return { hero,story }
}
