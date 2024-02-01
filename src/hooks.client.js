import { PUBLIC_MOCKING } from '$env/static/public';
import { worker } from './mocks/browser';

if (PUBLIC_MOCKING === 'true') {
	worker.start();
}
