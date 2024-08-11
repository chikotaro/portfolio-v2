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
		<div className="flex items-center justify-between gap-5">
			<h1 className=" text-2xl font-bold sm:text-5xl">Y.sPortfolio</h1>
			<HamburgerMenu />
			<nav className="hidden sm:block">
				<ul className="flex gap-3 text-xl">
					{menuList.map((menu) => (
						<li key={menu.href}>
							<Link href={menu.titleName}>{menu.titleName}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
