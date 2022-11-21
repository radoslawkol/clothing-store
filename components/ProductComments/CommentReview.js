import React from "react";
import ReviewStars from "./ReviewStars";

export default function CommentReview({ comment }) {
	const date = new Date(comment.createdAt);
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	return (
		<article className='text-primary-key bg-secondary p-2 rounded-md'>
			<h4 className='font-bold'>
				{comment.user.firstName} {comment.user.lastName}
			</h4>
			<span className='text-sm'>
				{day}-{month}-{year}
			</span>
			<ReviewStars rating={comment.rating} />
			<p>{comment.comment}</p>
		</article>
	);
}
