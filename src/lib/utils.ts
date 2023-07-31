import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertSlugToTitle(slug: string) {
	if (slug === '/') {
		return 'Inicio';
	} else {
		let parts = slug.slice(1).split('-');

		for (let i = 0; i < parts.length; i++) {
			parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1);
		}

		return parts.join(' ');
	}
}
