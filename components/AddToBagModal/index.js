import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function AddToBagModal() {
	// const [modalRoot, setModalRoot] = useState(
	// 	document.getElementById("modal-root")
	// );
	// useEffect(() => {
	// 	setModalRoot(document.getElementById("modal-root"));
	// }, []);

	return (
		<div>
			<CheckCircleIcon className='text-success-primary w-6 h-6' />
			<h3>The product was added to the bag.</h3>
			<div className='flex gap-4'>
				<Image
					src={`https://cdn.pixabay.com/photo/2015/09/26/13/53/girl-959115_960_720.jpg`}
				/>
				<div>
					<h4>Hoodie</h4>
					<span>size: M</span>
					<strong>$38.00</strong>
				</div>
			</div>
		</div>
	);
}
