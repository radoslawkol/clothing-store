import React, { useState } from "react";
import LogoBrown from "../../../utils/LogoBrown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import MostPopular from "./MostPopular";
import SearchingResults from "./SearchingResults.js";

export default function SearchModal({ closeSearchModalHandler }) {
	const [searchWord, setSearchWord] = useState("");
	return (
		<div className='z-50 absolute top-0 bg-on-primary-key p-4 flex flex-col items-center w-full border-b'>
			<LogoBrown />
			<XMarkIcon
				className='closeIcon absolute right-2 top-2 w-6 h-6 cursor-pointer hover:scale-125 duration-300 text-primary-key'
				onClick={closeSearchModalHandler}
			/>
			<div className='mt-6'>
				<SearchBar setSearchWord={setSearchWord} />
			</div>
			<SearchingResults
				searchWord={searchWord}
				closeSearchModalHandler={closeSearchModalHandler}
			/>
			<div className='mt-4 w-1/2 flex flex-col items-center gap-4'>
				<RecentSearches />
				<MostPopular />
			</div>
		</div>
	);
}
