import React from "react";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Login() {
	const [activeForm, setActiveForm] = useState("signIn");

	const activeFormHandler = (formType) => {
		setActiveForm(formType);
	};

	return (
		<div className='contentWithoutMenuHeight bg-secondary relative'>
			<div className=' bg-on-primary-key rounded-md  w-96 py-2 drop-shadow-lg relative  left-1/2 -translate-x-1/2 top-[10%]'>
				<div className='grid grid-cols-2 gap-4 justify-evenly divide-x-2  divide-primary-key text-primary-key text-xl '>
					<button
						className={`uppercase tracking-wide ${
							activeForm === "signUp" && "font-semibold"
						}`}
						onClick={() => activeFormHandler("signUp")}
					>
						Sign up
					</button>
					<button
						className={`uppercase tracking-wide ${
							activeForm === "signIn" && "font-semibold"
						}`}
						onClick={() => activeFormHandler("signIn")}
					>
						Sign in
					</button>
				</div>
				<div className='h-[2px] w-80 bg-primary-key m-auto mt-1'></div>
				{activeForm === "signIn" ? <LoginForm /> : <RegisterForm />}
			</div>
		</div>
	);
}
