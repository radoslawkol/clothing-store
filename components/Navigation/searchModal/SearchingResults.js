import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function SearchingResults({
	searchWord,
	closeSearchModalHandler,
}) {
	const [results, setResults] = useState([]);
	const router = useRouter();
	const { user } = useSelector((store) => store);

	const getResult = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getResult/${searchWord}`
			);

			if (data.status === "success") {
				setResults(data.products);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (searchWord !== "") {
			getResult();
		}
	}, [searchWord]);

	useEffect(() => {
		router.events.on("routeChangeStart", closeSearchModalHandler);

		return () => {
			router.events.off("routeChangeStart", closeSearchModalHandler);
		};
	});

	const addToHistoryhandler = async (productId) => {
		try {
			const { data } = await axios.patch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/addToSearchHistory`,
				{ id: user._id, productId }
			);
		} catch (err) {
			console.log(err);
		}
	};

	if (results.length > 0) {
		return (
			<div className='flex gap-2 flex-wrap mt-2'>
				{results.map((result, i) => (
					<Link
						key={i}
						href={`/${result.gender}/${result.category}/${result.productCategory}/${result.slug}`}
					>
						<button
							className='text-primary-key'
							onClick={() => addToHistoryhandler(result._id)}
						>
							<Image src={result.image[0]} height={60} width={40} />
							<div className='flex flex-col'>
								<strong className='font-light'>{result.title}</strong>
								<span>{result.color}</span>
							</div>
						</button>
					</Link>
				))}
			</div>
		);
	} else if (searchWord && results.length < 1) {
		return <p className='text-info-primary-key mt-2'>No results.</p>;
	}
}
