import React, { useEffect } from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function DateBirthForm({ register }) {
	const currYear = +new Date().getFullYear();

	const [month, setMonth] = useState(+new Date().getMonth());
	const [day, setDay] = useState(+new Date().getDate());
	const [year, setYear] = useState(currYear);
	const [daysInMonth, setDaysInMonth] = useState([]);

	const getDaysInMonth = (year, month) => {
		return +new Date(year, month + 1, 0).getDate(); // 0 get the last day of previous month
	};

	const monthsNames = Array.from({ length: 12 }, (e, i) => {
		return new Date(null, i + 1, null).toLocaleDateString("en", {
			month: "long",
		});
	});

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
					{...register("birthYear")}
					className='border border-primary-key rounded-md cursor-pointer'
					name='birthYear'
					id='birthYear'
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
					{...register("birthMonth")}
					className='border border-primary-key rounded-md cursor-pointer'
					name='birthMonth'
					id='birthMonth'
					value={month}
					onChange={(e) => setMonth(+e.target.value)}
				>
					{monthsNames.map((m, i) => (
						<option key={i} value={i}>
							{m}
						</option>
					))}
				</select>
				{daysInMonth.length !== 0 && (
					<select
						{...register("birthDay")}
						className='border border-primary-key rounded-md cursor-pointer'
						name='birthDay'
						id='birthDay'
						value={day}
						onChange={(e) => setDay(+e.target.value)}
					>
						{daysInMonth.map((d, i) => (
							<option key={i} value={d}>
								{d}
							</option>
						))}
					</select>
				)}
			</div>
		</div>
	);
}
