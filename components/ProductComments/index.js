import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import CommentReview from "./CommentReview";
import Link from "next/link";

export default function ProductComments({ product }) {
	const { user } = useSelector((store) => store);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	useEffect(() => {
		if (user) {
			setIsUserLoggedIn(true);
		} else {
			setIsUserLoggedIn(false);
		}
	}, [user]);

	return (
		<section className='p-2 my-8 md:mt-12'>
			<h2 className='text-primary-key uppercase font-bold mb-4 md:text-center md:text-lg'>
				Write a customer review
			</h2>
			<div>
				{isUserLoggedIn ? (
					<CommentForm product={product} />
				) : (
					<Link href='/login'>
						<button className='p-2 text-center bg-error-primary w-full my-2 rounded-lg text-error-on-primary'>
							Please, log in to write a review
						</button>
					</Link>
				)}
				<div className='flex flex-col gap-4 overflow-auto max-h-[400px]'>
					{product.comments.length > 0 &&
						product.comments
							.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
							.map((comment) => (
								<CommentReview comment={comment} key={comment._id} />
							))}
				</div>
			</div>
		</section>
	);
}
