import type { AboutMeData } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/about')
	const about: AboutMeData= await response.json()
	return { about }
}
