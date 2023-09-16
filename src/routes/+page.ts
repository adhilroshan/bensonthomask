
export async function load({ fetch }) {
	const response = await fetch('api/home')
	const home = await response.json()
	return { home }
}
