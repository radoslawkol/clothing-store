import React from "react";
import LogoBrown from "../../../utils/LogoBrown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import MostPopular from "./MostPopular";

export default function SearchModal({ closeSearchModalHandler }) {
	return (
		<div className='absolute top-0 bg-on-primary-key p-4 flex flex-col items-center w-full border-b'>
			<LogoBrown />
			<XMarkIcon
				className='absolute right-2 top-2 w-6 h-6 cursor-pointer hover:scale-125 duration-300 text-primary-key'
				onClick={closeSearchModalHandler}
			/>
			<div className='mt-6'>
				<SearchBar />
			</div>
			<div className='mt-4 w-1/2 flex flex-col items-center gap-4'>
				<RecentSearches />
				<MostPopular />
			</div>
		</div>
	);
}
