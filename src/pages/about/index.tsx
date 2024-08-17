import Image from "next/image";
import { ButtonLink } from "src/component/ButtonLink";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { Hero } from "src/Hero";

const About = () => {
	return (
		<div>
			<Header />
			<Hero title="制作者について" subTitle="About" />
			<Layout>
				<div className="mx-auto w-fit">
					<Image
						src="/profile-image.jpg"
						alt="my-image"
						objectFit="contain"
						width={600}
						height={600}
						className="h-[350px] w-[350px] sm:h-[600px] sm:w-[600px]"
					/>
				</div>
				<div className="mt-4">
					<div className="flex flex-col gap-3 sm:text-2xl">
						<p>思いが形になる素晴らしさを体験してください。</p>
						<p>
							また、そのモノが使う人の心に響くすばらしいモノであることを想像してください。
						</p>
						<p>そういったものを一緒につくりたい。</p>
						<p>
							そうは言っても、私が誰であるかを知る必要があります。
							<br />
							まずは自己紹介をさせてください。
						</p>
					</div>
					<div
						className="relative mx-auto mt-16 h-[350px] w-[350px] bg-cover bg-center backdrop-blur-lg sm:h-[600px] sm:w-[600px]"
						style={{ backgroundImage: `url('/sakura.png')` }}
					>
						<div className="absolute inset-0 bg-black opacity-50"></div>{" "}
						{/* 透明な黒いオーバーレイ */}
						<div className="relative z-10 mx-auto p-10 text-xl font-bold leading-10 text-white sm:p-20 sm:text-4xl sm:leading-loose">
							<h2 className="text-center text-3xl font-bold sm:text-5xl">
								-自己紹介-
							</h2>
							<p className="mt-4">名前 : 山口 将</p>
							<p>出身地：神奈川県 小田原市</p>
							<p>生年月日 : 1995/06/12</p>
						</div>
					</div>
					<div
						className="relative mx-auto mt-4 h-[350px] w-[350px] bg-cover bg-center backdrop-blur-lg sm:h-[600px] sm:w-[600px]"
						style={{ backgroundImage: `url('/coffee-programing.png')` }}
					>
						<div className="absolute inset-0 bg-black opacity-60"></div>{" "}
						<div className="relative z-10 mx-auto p-10 text-xl font-bold leading-10 text-white sm:p-20 sm:text-4xl sm:leading-loose">
							<p>趣味：珈琲、サッカー、プログラミング</p>
							<p>職業：エンジニア</p>
						</div>
					</div>

					<div className="leading-8 sm:leading-10">
						<div className="mt-[280px] rounded-xl border-2 p-4 sm:text-2xl">
							<h3 className="text-2xl font-bold sm:text-3xl">初めての海外</h3>
							<p className="mt-4">
								高校卒業後にスペインへ留学しに行きました。
								<br />
								はじめの1年はホームステイであのサグラダファミリアが徒歩5分以内の好立地なところでした。
								スペインでは、主に語学の勉強とサッカーをしていました。
								スペインの生活や文化は日本と大きく違い、とても面白い経験をすることができました。
								自由で和気あいあいとしたスペイン文化は今でも忘れられません。
								コーヒーの文化もあり、初めはみんなが飲むから自分も飲む。そういうルーティン的に飲んでいましたが、
								次第に、カフェ巡りをし始め、美味しいコーヒー屋を求めるようになりました。
							</p>
						</div>

						<div className="relative">
							<div className="absolute left-1/2 -top-[140px] h-[220px] w-[2px] -translate-x-1/2 -translate-y-[50%] transform bg-gray-300"></div>
							<div className="mt-[280px] rounded-xl border-2 p-4 sm:text-2xl">
								<h3 className="text-2xl font-bold sm:text-3xl">
									帰国後は東京で
								</h3>
								<p className="mt-4">
									2020年東京オリンピックが開催される予定であったので、ボランティアをしたいと思い、スペイン在住時に応募をしていました。
									しかし、応募数が多く、エラーが出たらしく、スペインからではうまく登録ができず、ただ帰国するということになってしまいました。
									しかし、帰国後は東京のスペシャルティコーヒー専門店でバリスタとして知識や技術を磨き、個人ではコーヒーの焙煎を始めるようになりました。
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="absolute left-1/2 -top-[140px] h-[220px] w-[2px] -translate-x-1/2 -translate-y-[50%] transform bg-gray-300"></div>
							<div className="mt-[280px] rounded-xl border-2 p-4 sm:text-2xl">
								<h3 className="text-2xl font-bold sm:text-3xl">福岡へ移住</h3>
								<p className="mt-4">
									コロナの緊急事態宣言後、1ヶ月間の自宅待機時に色々なことに挑戦したい思い、福岡に移住しました。
									福岡に移住してからは、コーヒーの焙煎を始め、コーヒーの美味しさを追求し、焙煎の技術を磨いています。
									就職した先が建築業、美容業、飲食業を行っている会社でした。飲食では、パンの製造をしました。
									その際に、自家焙煎したコーヒー前を実際に店頭でドリンク提供させていただきました。
									建築業では、新築戸建の検査をメインに行いました。
									そんな中、業務をしている時にもっと効率のよい方法であったり、繰り返し業務の自動化を考えるようになり、プログラミングを学び始めました。
									仕事の休憩時間を利用して、ノーコードで在庫管理アプリを作りました。
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="absolute left-1/2 -top-[140px] h-[220px] w-[2px] -translate-x-1/2 -translate-y-[50%] transform bg-gray-300"></div>
							<div className="mt-[280px] rounded-xl border-2 p-4 sm:text-2xl">
								<h3 className="text-2xl font-bold sm:text-3xl">
									プログラミング
								</h3>
								<p className="mt-4">
									効率化を考えるようになり、プログラミングを学び始めましたが、自分で何かを作ることが好きであったこともあり、web制作を学びました。
									そこからweb制作だけでなく、効率化をするシステム開発の勉強をしています。
									web開発では、WordPressを用いたCMSでHP作成を行います。
									また、ヘッドレスCMSであるmicroCMSを使用し、よりSEOに強く、高速なHPを作ることも可能です。
								</p>
							</div>
						</div>
					</div>

					<div className="mt-10">
						<ButtonLink href="/works" name="worksへ"></ButtonLink>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default About;
