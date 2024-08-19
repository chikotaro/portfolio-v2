import Link from "next/link";
import HamburgerMenu from "src/component/HamburgerMenu";
import { menuList } from "src/lib/menuList";


export const Header = () => {
	return (
		<div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between pl-2 gap-5 bg-slate-50 shadow-md sm:px-4 sm:py-5 xl:px-[200px]">
			<Link href="/" className=" text-2xl font-bold sm:text-5xl">
				Y.s Portfolio
			</Link>
			<HamburgerMenu />
			<nav className="hidden sm:block">
				<ul className="flex gap-5 text-2xl">
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
