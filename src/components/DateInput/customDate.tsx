import { parseISO, format } from 'date-fns';
import { useState } from 'react';
//@ts-ignore
import DatePicker from 'react-datepicker';

export default function CustomDate() {
	//{ dateString }: { dateString: Date }
	// const date = format(new Date(), 'LLLL d, yyyy');
	// console.log('Date::', date);

	// return 	<time dateTime={dateparse}>{n}</time>;
	const [startDate, setStartDate] = useState(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date: any) => setStartDate(date)}
		/>
	);
}
