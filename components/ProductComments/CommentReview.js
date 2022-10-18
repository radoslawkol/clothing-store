import React from "react";
import ReviewStars from "./ReviewStars";

export default function CommentReview({ comment }) {
	return (
		<article className='text-primary-key bg-secondary p-2 rounded-md'>
			<h4 className='font-bold'>John Smith</h4>
			<span className='text-sm'>02.03.2022</span>
			<ReviewStars />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
				molestiae aspernatur nobis quibusdam repellendus ducimus eaque ea
				tenetur cum ab!
			</p>
		</article>
	);
}
