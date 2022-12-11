import React from "react";
import ButtonPrimary from "../../utils/ButtonPrimary";
import ButtonOutlineBrown from "../../utils/ButtonOutlineBrown";
import { useState } from "react";
import { useEffect } from "react";
import StartRating from "./StartRating";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommentForm({ product }) {
	const { user } = useSelector((store) => store);
	const maxCharacters = 300;
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(5);
	const [leftCharacters, setLeftCharacters] = useState(maxCharacters);

	const addCommentHandler = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`,
				{
					productId: product?._id,
					userId: user._id,
					rating,
					comment,
				}
			);
			if (data.status === "success") {
				toast.success("Your opinion has been added.");
				setComment("");
			}
		} catch (err) {
			console.log(err);
			toast.error(err.response.data.message);
		}
	};

	const cancelBtnHandler = () => {
		setComment("");
	};

	useEffect(() => {
		setLeftCharacters(maxCharacters - comment.split("").length);
	}, [comment]);
	return (
		<div className='bg-primary rounded-lg px-4 py-6 my-4'>
			<div className='flex mb-4 justify-center'>
				<StartRating setRating={setRating} rating={rating} />
			</div>
			<textarea
				name='comment'
				id='comment'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder='Share your opinion about a product...'
				maxLength={maxCharacters}
				className='border p-2 rounded-lg  focus:outline-primary-key w-full resize-none h-[160px]'
			></textarea>
			<div className='flex justify-end'>
				<span className='text-sm'>Left {leftCharacters} characters</span>
			</div>
			<div className='flex justify-end gap-2 mt-4'>
				<div className='flex' onClick={cancelBtnHandler}>
					<ButtonOutlineBrown>Cancel</ButtonOutlineBrown>
				</div>
				<div onClick={addCommentHandler}>
					<ButtonPrimary>Confirm</ButtonPrimary>
				</div>
			</div>
		</div>
	);
}
