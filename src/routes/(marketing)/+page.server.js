/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	const res = await fetch('https://fakestoreapi.com/products');
	const products = await res.json();
	return {
		products,
		name: 'Billy Bloggs on the Server',
	};
}
