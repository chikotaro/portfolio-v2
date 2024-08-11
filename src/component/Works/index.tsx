import Link from "next/link";
import { ButtonLink } from "src/component/ButtonLink";
import { Title } from "src/component/Title";

const workList = [
	{
		title: "Y.sPortfolio",
		href: "/",
	},
	{
		title: "Y.sPortfolio",
		href: "/",
	},
	{
		title: "Y.sPortfolio",
		href: "/",
	},
];

export const Works = () => {
	return (
		<div className="mx-auto sm:max-w-[600px]">
			<Title title="制作実績" subTitle="Works" />
			<div className="mt-4">
				<p>-これまで作ってきた実績の紹介-</p>
				<p className="mt-2">
					html cssで静的なHPやLPを作成し
					<br />
					javascriptを使い動きをつけます。
				</p>
				<p>
					また、WordPressでHPを作成したり、
					<br />
					MicroCMSdeでヘッドレスCMSをしようすることで、
					<br />
					デザインだけでなく、SEOにも強い高速なHPを作成することができます。
				</p>
				<p>
					MicroCMSでは、Reactのフレームワークである、Next.jsを使用し、Vercelを用いてデプロイを行います。
				</p>
				<div>
					<ul className="flex flex-wrap">
						{workList.map((work) => (
							<li key={work.href}>
								<Link href={work.href}>{work.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<ButtonLink name="制作実績一覧" href="/works" />
				</div>
			</div>
		</div>
	);
};
