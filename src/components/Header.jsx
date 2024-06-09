import React, { useState, Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";
import Button from "./Button";

const links = [
	{ href: "/account-settings", label: "Account settings" },
	{ href: "/support", label: "Support" },
	{ href: "/license", label: "License" },
	{ href: "/sign-out", label: "Sign out" },
];

function Header() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`z-1 text-black py-4 mr-10 ml-10 sticky top-2 border-2 b rounded-full ${
				scrolled ? "border-opacity-50 border-white backdrop-filter backdrop-blur" : ""
			}`}>
			<div className="container px-2 mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<img src={logo} alt="Company Logo" className="w-15 h-12 mr-1" />
				</div>
				<nav className="flex justify-between items-center space-x-10">
					<a href="/" className="hover:underline underline-offset-4">
						Home
					</a>
					<a href="/services" className="hover:underline underline-offset-4">
						Services
					</a>
					<div className="cursor-pointer dropdown hover:underline underline-offset-4" onMouseLeave={toggleDropdown}>
						<div
							className="relative group"
							onMouseOver={toggleDropdown}
							>
							<span className="flex">
								Loans
								<ChevronDownIcon
									className="ml-2 -mr-1 h-5 w-5"
									aria-hidden="true"
								/>
							</span>
							<span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
						</div>
						<Transition
							show={isDropdownOpen}
							as={React.Fragment}
							enter="transition ease-out duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition ease-in duration-75"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<div className="absolute bg-white border rounded shadow-md">
								<ul className="py-2">
									<li className="px-4 py-2 hover:bg-pink-200">Home Loans</li>
									<li className="px-4 py-2 hover:bg-pink-200">Project Loans</li>
									<li className="px-4 py-2 hover:bg-pink-200">
										Mortgage Loans
									</li>
								</ul>
							</div>
						</Transition>
					</div>
					<a href="/about" className="hover:underline underline-offset-4">
						About Us
					</a>
					<a href="/contacts" className="hover:underline underline-offset-4">
						Contact
					</a>
				</nav>
				<Button>Get in touch</Button>
			</div>
		</header>
	);
}

export default Header;
