import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
	{ name: "About", path: "/about" },
	{ name: "Works", path: "/works" },
	{ name: "Contact", path: "/contact" },
];

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<div className="sm:hidden">
			<div className="flex items-center justify-between bg-gray-900 p-4 text-white">
				<button className="z-50 focus:outline-none" onClick={toggleMenu}>
					<div className="relative flex h-6 w-6 items-center justify-center">
						<span
							className={`absolute block h-1 w-6 transform bg-white transition duration-500 ease-in-out ${
								isOpen ? "rotate-45" : "-translate-y-2"
							}`}
						></span>
						<span
							className={`absolute block h-1 w-6 transform bg-white transition duration-500 ease-in-out ${
								isOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`absolute block h-1 w-6 transform bg-white transition duration-500 ease-in-out ${
								isOpen ? "-rotate-45" : "translate-y-2"
							}`}
						></span>
					</div>
				</button>
			</div>
			<div
				className={`fixed inset-0 z-10 transform bg-gray-900 bg-opacity-90 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-500 ease-in-out`}
			>
				<nav className="mt-20 ">
					<ul className="flex flex-col items-center space-y-[30px]">
						{navItems.map((item) => (
							<li
								key={item.path}
								className="text-2xl text-white"
								onClick={toggleMenu}
							>
								<Link href={item.path}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default HamburgerMenu;
