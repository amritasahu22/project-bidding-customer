import { format } from 'date-fns';

export function dateFormatter(dateString: Date): string {
	return format(new Date(dateString), 'EEEE, d LLL yyyy');
}
