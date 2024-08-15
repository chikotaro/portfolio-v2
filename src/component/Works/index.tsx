import { decodeFormState } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "src/component/ButtonLink";
import { Title } from "src/component/Title";

const workList = [
	{
		title: "oha",
		desc: "html,css,Javascript で作ったポートフォリオサイト",
		href: "https://oha-portfolio-sho.vercel.app/",
		thumbnail: "OHA.png",
	},
	{
		title: "simple",
		desc: "microCMS,Next.js,Typescriptで作ったポートフォリオサイト",
		href: "/my-next-project-q726eg5ph-shos-projects-c687e542.vercel.app",
		thumbnail: "simple.png",
	},
];

export const Works = () => {
	return (
		<div className="mx-auto sm:max-w-[600px]">
			<Title title="制作実績" subTitle="Works" />
			<div className="mt-6 sm:text-2xl">
				<p className="font-bold">-これまで作ってきた実績の紹介-</p>
				<div className="flex flex-col gap-2 leading-8 sm:leading-[40px]">
					<p className="mt-2">
						html cssで静的なHPやLPを作成し
						<br />
						javascriptを使い動きをつけます。
					</p>
					<p>
						また、WordPressでHPを作成したり、
						<br />
						MicroCMSでヘッドレスCMSをしようすることで、
						<br />
						デザインだけでなく、SEOにも強い高速なHPを作成することができます。
					</p>
					<p>
						MicroCMSでは、Reactのフレームワークである、Next.jsを使用し、Vercelを用いてデプロイを行います。
					</p>
				</div>
				<div className="mt-8">
					<p className="font-bold">- 実績紹介例 -</p>
					<ul className="mt-4 flex flex-col gap-4">
						{workList.map((work) => (
							<li
								key={work.href}
								className="rounded-md bg-slate-300 py-2 px-4 "
							>
								<Link href={work.href} target="_blank">
									<div className="flex flex-col gap-3">
										<div className="text-3xl font-bold">{work.title}</div>
										<div>{work.desc}</div>
										<div className="w-[300px] mx-auto pb-4">
											<Image
												src={`/${work.thumbnail}`}
												alt=""
												width={300}
												height={300}
												objectFit="cover"
											/>
										</div>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<ButtonLink name="制作実績一覧" href="/works" />
				</div>
			</div>
		</div>
	);
};
