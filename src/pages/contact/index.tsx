import React from "react";
import { Header } from "src/component/Header";
import { Hero } from "src/Hero";

const Contact = () => {
	return (
		<div>
			<Header />
			<Hero title="お問い合わせ" subTitle="Contact" />
			<h1>Contact Page</h1>
			{/* 他のコンテンツ */}
		</div>
	);
};

export default Contact;
