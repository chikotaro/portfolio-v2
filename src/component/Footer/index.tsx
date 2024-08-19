import Link from "next/link";
import { menuList } from "src/lib/menuList";

export const Footer = () => {
	return (
		<footer className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-20 bg-white p-4 text-center">
			<div>
				<p>&copy; 2024 Y.s Portfolio</p>
			</div>
			<nav>
				<ul className="flex items-center justify-center gap-3 text-xl">
					{menuList.map((menu) => (
						<li key={menu.href}>
							<Link href={menu.href}>{menu.titleName}</Link>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};
