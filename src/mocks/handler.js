import { http, HttpResponse } from 'msw';

export const handlers = [
	// http://localhost:5173/api/animals
	http.get('https://fakestoreapi.com/products', () => {
		return HttpResponse.json([
			{
				id: 1,
				title: 'A fantastic ice cream',
				price: 109.95,
				description:
					'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
				category: "men's clothing",
				image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
				rating: {
					rate: 3.9,
					count: 120,
				},
			},
		]);
	}),
];
