import Link from "next/link";
import HamburgerMenu from "src/component/HamburgerMenu";

const menuList = [
	{
		titleName: "About",
		href: "/about",
	},
	{
		titleName: "Works",
		href: "/works",
	},
	{
		titleName: "Contact",
		href: "/contact",
	},
];

export const Header = () => {
	return (
		<div className="flex items-center justify-between gap-5 sm:px-4 sm:py-5">
			<Link href="/" className=" text-2xl font-bold sm:text-5xl">
				Y.sPortfolio
			</Link>
			<HamburgerMenu />
			<nav className="hidden sm:block">
				<ul className="flex gap-3 text-xl">
					{menuList.map((menu) => (
						<li key={menu.href}>
							<Link href={menu.href}>{menu.titleName}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
