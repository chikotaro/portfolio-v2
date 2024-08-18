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
		<div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-5 bg-slate-50 shadow-md sm:px-4 sm:py-5">
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
