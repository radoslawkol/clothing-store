import React, { useEffect, useState } from "react";
import fullStar from "../../images/fullStar.png";
import emptyStar from "../../images/emptyStar.png";
import halfStar from "../../images/halfStar.png";
import Image from "next/image";

export default function ReviewStars({ rating }) {
	const stars = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;

		return (
			<span key={index}>
				{rating >= index + 1 ? (
					<Image src={fullStar} width={22} height={22} />
				) : rating >= number ? (
					<Image src={halfStar} width={22} height={22} />
				) : (
					<Image src={emptyStar} width={22} height={22} />
				)}
			</span>
		);
	});

	return <div>{stars}</div>;
}
