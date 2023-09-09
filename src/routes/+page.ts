import type { Hero } from '$lib/types/types'

export async function load({ fetch }) {
	const response = await fetch('api/hero')
	const hero: Hero= await response.json()
	return { hero }
}
