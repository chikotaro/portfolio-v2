import Image from "next/image";
import { ButtonLink } from "src/component/ButtonLink";
import { Title } from "src/component/Title";

export const About = () => {
	return (
		<div className="mx-auto sm:max-w-[600px]">
			<Title title="制作者について" subTitle="About" />
			<div className="mt-6 font-serif flex flex-col gap-2 sm:text-2xl">
				<p>あなたの思いがHPの形になる素晴らしさを体験してください。</p>
				<p>
					また、そのサイトが使う人の心に響くすばらしいモノであることを想像してください。
				</p>
				<p>そういったものを一緒につくりたい。</p>
			</div>
			<Image src="/inspiration.png" width={800} height={800} alt="inspiration" />
			<div className="mt-4">
				<ButtonLink name="read more" href="/about" />
			</div>
		</div>
	);
};
