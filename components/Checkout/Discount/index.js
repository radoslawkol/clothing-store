import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Discount() {
	const [code, setCode] = useState("");
	const [isCodeUsed, setIsCodeUsed] = useState(false);
	const toastId = useRef();
	const codeRef = useRef();

	const discountHandler = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/discounts?code=${code}`
			);
			console.log(data);

			if (data.status === "success") {
				setCode(data.code);
				setIsCodeUsed(true);
				if (!toast.isActive(toastId.current)) {
					toast.success("Discount code successfully added.", {
						toastId: "wrong-discount-code",
					});
				}
			}
		} catch (err) {
			codeRef.current.value = "";
			if (!toast.isActive(toastId.current)) {
				toast.error(err.response.data.message, {
					toastId: "wrong-discount-code",
				});
			}
		}
	};

	return (
		<div className='text-primary-key mt-6 '>
			<p className='uppercase'>I have discount code</p>
			<div className='flex items-center gap-2'>
				<input
					disabled={isCodeUsed}
					ref={codeRef}
					onChange={(e) => setCode(e.target.value)}
					type='text'
					placeholder='Discount code'
					className='border-b focus:outline-none my-4 focus:border-primary-key p-1 rounded-sm'
				/>
				<div onClick={discountHandler}>
					<ButtonOutlineBrown>Add</ButtonOutlineBrown>
				</div>
			</div>
		</div>
	);
}
