import { decodeFormState } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "src/component/ButtonLink";
import { Title } from "src/component/Title";

const workList = [
	{
		title: "OHA!",
		desc: "html,css,Javascript で作ったポートフォリオサイト",
		href: "https://oha-portfolio-sho.vercel.app/",
		thumbnail: "/OHA.png",
	},
	{
		title: "simple",
		desc: "microCMS,Next.js,Typescriptで作ったポートフォリオサイト",
		href: "/my-next-project-q726eg5ph-shos-projects-c687e542.vercel.app",
		thumbnail: "/simple.png",
	},
];

export const Works = () => {
	return (
		<div className="mx-auto sm:max-w-[800px]">
			<Title title="制作実績" subTitle="Works" />
			<div className="mt-6 sm:text-2xl">
				<p>
					今回のポートフォリオサイトはレスポンシブに対応しており、使用技術はReactのFWのNext.jsとTypescriptでつくりました。高速なページ遷移を感じられると思います。
					cssでは、Tailwindcssを用いて、シンプルでありながら、素早くコーディングできるようにしています。
				</p>
				<p className="mt-8 font-bold">-これまでの実績の紹介-</p>
				<div className="flex flex-col gap-2 leading-8 sm:leading-[40px]">
					<p className="mt-2">
						html,cssで静的なHPやLPを作成し
						<br />
						Javascriptを使い動きをつけます。
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
								className="transform rounded-md border-2 py-2 px-4 transition-transform duration-300  hover:-translate-y-2 hover:shadow-lg "
							>
								<Link href={work.href} passHref target="_blank">
									<div className="flex flex-col gap-3">
										<div className="text-3xl font-bold">{work.title}</div>
										<div>{work.desc}</div>
										<div className="mx-auto w-[300px] pb-4">
											<Image
												src={work.thumbnail}
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
			</div>
			<div className="mt-4">
				<ButtonLink name="read more" href="/works" />
			</div>
		</div>
	);
};
