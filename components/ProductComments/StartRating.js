import ReactStars from "react-rating-stars-component";
import React from "react";

export default function StartRating({ setRating, rating }) {
	const ratingChanged = (newRating) => {
		newRating;
		setRating(newRating);
	};
	return (
		<ReactStars
			count={5}
			onChange={ratingChanged}
			value={rating}
			size={36}
			isHalf={true}
			activeColor='#ffd700'
		/>
	);
}
