import React, { useEffect } from "react";
import { useState } from "react";

export default function DateBirthForm() {
	const currYear = +new Date().getFullYear();

	const [month, setMonth] = useState(+new Date().getMonth());
	const [year, setYear] = useState(currYear);
	const [day, setDay] = useState(+new Date().getDate());
	const [daysInMonth, setDaysInMonth] = useState([]);

	const monthsNames = Array.from({ length: 12 }, (e, i) => {
		return new Date(null, i + 1, null).toLocaleDateString("en", {
			month: "long",
		});
	});
	const getDaysInMonth = (year, month) => {
		return +new Date(year, month + 1, 0).getDate(); // 0 get the last day of previous month
	};

	useEffect(() => {
		const days = Array.from({ length: getDaysInMonth(year, month) }, (e, i) => {
			return i + 1;
		});
		setDaysInMonth(days);
	}, [year, month]);

	const years = Array.from({ length: 100 }, (e, i) => {
		return currYear - i;
	});

	return (
		<div className='text-primary-key'>
			<h4>Date of birth:</h4>
			<div className='flex gap-4'>
				<select
					className='border border-primary-key rounded-md cursor-pointer'
					name='years'
					id='years'
					value={years[year]}
					onChange={(e) => setYear(+e.target.value)}
				>
					{years.map((year, i) => (
						<option key={i} value={year}>
							{year}
						</option>
					))}
				</select>
				<select
					className='border border-primary-key rounded-md cursor-pointer'
					name='months'
					id='months'
					value={month}
					onChange={(e) => setMonth(+e.target.value)}
				>
					{monthsNames.map((m, i) => (
						<option key={i} value={i}>
							{m}
						</option>
					))}
				</select>
				<select
					className='border border-primary-key rounded-md cursor-pointer'
					name='days'
					id='days'
					value={day}
					onChange={(e) => setDay(+e.target.value)}
				>
					{daysInMonth.map((d, i) => (
						<option key={i} value={d}>
							{d}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
