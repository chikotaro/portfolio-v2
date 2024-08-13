import { Header } from "src/component/Header";
import { Hero } from "src/Hero";

export {};

const About = () => {
	return (
		<div>
			<Header />
			<Hero title="自己紹介" subTitle="About" />
			<p>思いが形になる素晴らしさを体験してください。</p>
			<p>
				また、そのモノが使う人の心に響くすばらしいモノであることを想像してください。
			</p>
			<p>そういったものを一緒につくりたい。</p>
			<div>
				<h2>-自己紹介-</h2>
				<p>名前:山口 将</p>
				<p>出身地：神奈川県</p>
				<p>趣味：珈琲、プログラミング</p>
				<p>職業：エンジニア</p>
				<p>生年月日 : 1995/06/12</p>
			</div>
		</div>
	);
};

export default About;
