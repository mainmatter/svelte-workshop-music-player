import { http, HttpResponse } from 'msw';

export const handlers = [
	// http://localhost:5173/api/animals
	http.get('http://localhost:5173/api/animals', () => {
		console.log('Accessing /api/animals/');
		return HttpResponse.json({
			success: true,
			api: 'mocked',
		});
	}),
	// http://localhost:5173/api/animals/1
	// http://localhost:5173/api/animals/2
	// http://localhost:5173/api/animals/3
	http.get('http://localhost:5173/api/animals/:id', ({ params }) => {
		console.log('Accessing /api/animals/:id with id of ', params.id);
		return HttpResponse.json({
			success: true,
			api: 'mocked',
		});
	}),
];
