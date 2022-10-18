import React from "react";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import CommentReview from "./CommentReview";

export default function ProductComments({ comments }) {
	const { user } = useSelector((store) => store);

	const commentForm = user ? (
		<CommentForm />
	) : (
		<p className='p-2 text-center bg-error-primary'>
			Please, log in to write a review
		</p>
	);

	return (
		<section className='p-2 my-8 md:mt-12'>
			<h2 className='text-primary-key uppercase font-bold mb-4 md:text-center md:text-lg'>
				Write a customer review
			</h2>
			<div>
				{commentForm}
				<div className='flex flex-col gap-4 '>
					<CommentReview />
					<CommentReview />
					<CommentReview />
					{/* {comments?.map((comment) => (
					<CommentReview comment={comment} key={comment._id} />
				))} */}
				</div>
			</div>
		</section>
	);
}
