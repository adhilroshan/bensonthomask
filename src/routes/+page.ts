import type { Home } from '$lib/types'

export async function load({ fetch }): Promise<{ home: Home }> {
	const response = await fetch('api/home')
	const home = await response.json() as Home
	return { home } 
}
