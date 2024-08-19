import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { Hero } from "src/Hero";

const workListA = [
	{
		title: "OHA!",
		desc: "html,css,Javascript で作ったポートフォリオサイト",
		href: "https://oha-portfolio-sho.vercel.app/",
		thumbnail: "/OHA.png",
	},
	{
		title: "AI (開発途中)",
		desc: "html,css,Javascript で作ったポートフォリオサイト",
		href: "https://ai-portfolio-sho.vercel.app/",
		thumbnail: "/AI.png",
	},
];

const workListB = [
	{
		title: "simple",
		desc: "microCMS,Next.js,Typescriptで作ったポートフォリオサイト",
		href: "https://my-next-project-q726eg5ph-shos-projects-c687e542.vercel.app",
		thumbnail: "/simple.png",
	},
	{
		title: "web-blog(開発途中)",
		desc: "microCMS,Next.js,Typescriptで作ったポートフォリオブログサイト",
		href: "https://pf-web-blog.vercel.app/",
		thumbnail: "/web-blog.png",
	},
];

const Works = () => {
	return (
		<div>
			<Header />
			<div className="mt-[56px] sm:mt-[88px]">
				<Hero title="実績紹介" subTitle="Works" />
			</div>

			<Layout>
				<p>これまで作成した制作物の一覧をご紹介します。</p>
				<div className="mt-20">
					<p className="text-xl sm:text-3xl">
						HTML,CSS,JavaScriptを使用した制作物
					</p>
					<ul className="mt-5 flex flex-col gap-5 sm:grid sm:grid-cols-2">
						{workListA.map((work) => (
							<li key={work.href}>
								<Link
									href={work.href}
									passHref
									target="_blank"
									className="flex transform flex-col gap-2 rounded-md border-2 p-5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg sm:gap-4"
								>
									<div className="mx-auto w-[300px] pb-4">
										<Image
											src={work.thumbnail}
											alt=""
											width={300}
											height={300}
										/>
									</div>
									<div className="text-4xl font-bold">{work.title}</div>
									<div>{work.desc}</div>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-20">
					<p className="text-xl sm:text-3xl">Next.jsを使用した制作物</p>
					<ul className="mt-5 flex flex-col gap-5 sm:grid sm:grid-cols-2">
						{workListB.map((work) => (
							<li key={work.href}>
								<Link
									href={work.href}
									passHref
									target="_blank"
									className="flex transform flex-col gap-2 rounded-md border-2 p-5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg sm:gap-4"
								>
									<div className="mx-auto w-[300px] pb-4">
										<Image
											src={work.thumbnail}
											alt=""
											width={300}
											height={300}
										/>
									</div>
									<div className="text-4xl font-bold">{work.title}</div>
									<div>{work.desc}</div>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* 他のコンテンツ */}
			</Layout>
			<Footer />
		</div>
	);
};

export default Works;
