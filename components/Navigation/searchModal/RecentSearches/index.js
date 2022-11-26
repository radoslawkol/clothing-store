import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RecentSearches() {
	const [recentSearches, setRecentSearches] = useState([]);
	const { user } = useSelector((store) => store);

	const getRecentSearches = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getSearchHistory?id=${user._id}`
			);

			console.log(data);

			if (data.status === "success") {
				setRecentSearches(data.searchHistory);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getRecentSearches();
	}, []);

	if (recentSearches.length > 0) {
		return (
			<div className='text-center'>
				<h3 className='text-primary-key font-light mb-2'>Recent Searches</h3>
				<ul className='flex gap-3 text-sm flex-wrap gap-y-1'>
					{recentSearches
						.slice(0)
						.reverse()
						.map((result, i) => (
							<Link
								key={i}
								href={`/${result.gender}/${result.category}/${result.productCategory}/${result.slug}`}
							>
								<button className='text-on-secondary hover:text-primary-key  cursor-pointer'>
									{result.color}-{result.title}
								</button>
							</Link>
						))}
				</ul>
			</div>
		);
	}
}
