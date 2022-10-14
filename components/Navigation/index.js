import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./MenuMobile";
import {
	MagnifyingGlassIcon,
	Bars3Icon,
	ShoppingBagIcon,
	UserCircleIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";
import MenuDesktop from "./MenuDesktop";
import menuData from "../../data/menuData";
import NavItem from "./NavItem";
import Logo from "../../utils/LogoWhite";
import SearchModal from "./searchModal";

export default function Navigation() {
	const [modalRoot, setModalRoot] = useState();
	const [isMobile, setIsMobile] = useState(false);
	const [navbarHeight, setNavbarHeight] = useState();
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [menuDesktopPositionLeft, setMenuDesktopPositionLeft] = useState();
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState({
		mobile: false,
		desktop: false,
	});

	const navbarRef = useRef();

	useEffect(() => {
		let catArr = [];
		for (let type in menuData) {
			catArr.push(type);
		}

		setCategories([...new Set(catArr)]);
	}, []);

	const showMenuHandler = (category, ref) => {
		if (isMobile) {
			setIsMenuOpen((prev) => ({ ...prev, mobile: true }));
		} else {
			setIsMenuOpen((prev) => ({ ...prev, desktop: true }));
		}

		if (!isMobile) {
			const rec = ref.current.getBoundingClientRect();
			setSelectedCategory(category);
			setMenuDesktopPositionLeft(Math.floor(rec.x + rec.width / 2));
		}
	};

	const closeSearchModalHandler = () => {
		setSearchModalOpen(false);
	};

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root"));
	}, []);

	const isMobileDevice = useMediaQuery({
		query: "(max-width: 767px)",
	});

	useEffect(() => {
		setIsMobile(isMobileDevice);
	}, [isMobileDevice]);

	useEffect(() => {
		setNavbarHeight(navbarRef.current.clientHeight);
	}, [navbarHeight]);

	return (
		<>
			<nav
				className='flex flex-col  p-2 md:pb-0 bg-primary-key'
				ref={navbarRef}
			>
				<div className='flex justify-between'>
					<div className='flex items-center gap-4 '>
						<button data-testid='menuButton'>
							<Bars3Icon
								className={`w-8 h-8 text-on-primary-key cursor-pointer hover:text-light-grey-hover ${
									isMobile ? "block" : "hidden"
								}`}
								onClick={showMenuHandler}
							/>
						</button>
						<Logo />
					</div>
					<ul className='flex items-center gap-1'>
						<button
							id='searchModalBtn'
							onClick={() => setSearchModalOpen(true)}
						>
							<MagnifyingGlassIcon className='w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</button>
						<Link href='/checkout'>
							<ShoppingBagIcon className='bagIcon w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</Link>
						<Link href='/account/favourites'>
							<HeartIcon className='w-6 h-6 text-on-primary-key  hover:text-light-grey-hover cursor-pointer' />
						</Link>
						<Link href='/account'>
							<UserCircleIcon className='w-6 h-6 text-on-primary-key hover:text-light-grey-hover cursor-pointer' />
						</Link>
					</ul>
				</div>
				<div className='hidden md:flex justify-center'>
					<ul
						className='md:flex justify-center gap-4 px-2'
						onMouseLeave={() => setIsMenuOpen({ desktop: false })}
					>
						{categories.map((cat, i) => (
							<NavItem
								category={cat}
								key={i}
								showMenuHandler={showMenuHandler}
								setIsMenuOpen={setIsMenuOpen}
							/>
						))}

						{isMenuOpen.desktop && (
							<MenuDesktop
								setIsMenuOpen={setIsMenuOpen}
								navbarHeight={navbarHeight}
								categories={categories}
								selectedCategory={selectedCategory}
								menuDesktopPositionLeft={menuDesktopPositionLeft}
							/>
						)}
					</ul>
				</div>
			</nav>

			{isMenuOpen.mobile &&
				ReactDOM.createPortal(
					<MenuMobile
						setIsMenuOpen={setIsMenuOpen}
						categories={categories}
						data-testid='MenuMobile'
					/>,
					modalRoot
				)}
			{searchModalOpen &&
				ReactDOM.createPortal(
					<SearchModal closeSearchModalHandler={closeSearchModalHandler} />,
					modalRoot
				)}
		</>
	);
}
