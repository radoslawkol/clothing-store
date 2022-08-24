import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import logo from "../../images/logo.svg";
import MenuMobile from "./MenuMobile";
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	ShoppingBagIcon,
	UserCircleIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
	const [modalRoot, setModalRoot] = useState();
	const [isMenuOpen, setIsMenuOpen] = useState({
		mobile: false,
		desktop: false,
	});

	const isMobile = useMediaQuery({
		query: "(max-width: 767px)",
	});

	const showMenuHandler = () => {
		if (isMobile) {
			setIsMenuOpen((prev) => ({ ...prev, mobile: true }));
		} else {
			setIsMenuOpen((prev) => ({ ...prev, desktop: true }));
		}
	};

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root")); // in server rendering mode, the document is undefined so you have ot use it in useEffect
	}, []);
	return (
		<>
			<nav className='flex flex-col  p-2 md:pb-0 bg-primary-key '>
				<div className='flex justify-between'>
					<div className='flex items-center gap-4 '>
						<Bars3Icon
							className={`${
								isMobile ? "block" : "hidden"
							} w-8 h-8 text-on-primary-key cursor-pointer hover:text-light-grey-hover`}
							onClick={showMenuHandler}
						/>
						<Link href='/'>
							<div href='/' className='flex items-center gap-1 cursor-pointer'>
								<Image src={logo} alt='Logo' width={24} height={24} />
								<h1 className='text-on-primary-key text-xl'>ClothesShop</h1>
							</div>
						</Link>
					</div>
					<ul className='flex items-center gap-1'>
						<li>
							<MagnifyingGlassIcon className='w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</li>
						<Link href='/checkout'>
							<ShoppingBagIcon className='w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</Link>
						<Link href='/favourite'>
							<HeartIcon className='w-6 h-6 text-on-primary-key  hover:text-light-grey-hover cursor-pointer' />
						</Link>
						<Link href='/account'>
							<UserCircleIcon className='w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</Link>
					</ul>
				</div>
				<ul className='hidden md:flex justify-center gap-4'>
					<Link href='/new-product'>
						<div
							className='w-12 flex flex-col items-center mb-1 group'
							onMouseOver={showMenuHandler}
						>
							<li className='text-on-primary-key lg:text-lg pb-2 cursor-pointer hover:text-light-grey-hover'>
								New
							</li>
							<div className='invisible group-hover:visible w-full h-0.5 bg-on-primary-key duration-100'></div>
						</div>
					</Link>
					<Link href='/man'>
						<div
							className='w-12 flex flex-col items-center mb-1 group'
							onMouseOver={showMenuHandler}
						>
							<li className='text-on-primary-key lg:text-lg pb-2 cursor-pointer hover:text-light-grey-hover'>
								Man
							</li>
							<div className='invisible group-hover:visible w-full h-0.5 bg-on-primary-key duration-100'></div>
						</div>
					</Link>
					<Link href='/woman'>
						<div
							className='w-12 flex flex-col items-center mb-1 group'
							onMouseOver={showMenuHandler}
						>
							<li className='text-on-primary-key lg:text-lg pb-2 cursor-pointer hover:text-light-grey-hover'>
								Woman
							</li>
							<div className='invisible group-hover:visible w-full h-0.5 bg-on-primary-key duration-100'></div>
						</div>
					</Link>
				</ul>
			</nav>
			{isMenuOpen.mobile &&
				ReactDOM.createPortal(
					<MenuMobile setIsMenuOpen={setIsMenuOpen} />,
					modalRoot
				)}
		</>
	);
}
