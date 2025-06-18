import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://app.nocodb.com/p/uncovered-inventory-add');
}
