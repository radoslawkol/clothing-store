import React from "react";
import { fullStar } from "../../images/fullStar.png";
import { emptyStar } from "../../images/emptyStar.png";
import { halfStar } from "../../images/halfStar.png";
import { logo } from "../../images/logo.svg";
import Image from "next/image";

export default function ReviewStars({ rating }) {
	const ratingStars = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;
		return (
			<span key={index}>
				{rating >= index + 1 ? (
					<Image src={fullStar} width={32} height={32} />
				) : rating >= number ? (
					<Image src={halfStar} width={32} height={32} />
				) : (
					<Image src={emptyStar} width={32} height={32} />
				)}
			</span>
		);
	});
	return (
		<div>
			<img src={logo} width={24} height={24} alt='stars' />
		</div>
	);
}
