import React from "react";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { Hero } from "src/Hero";

const Contact = () => {
	return (
		<div>
			<Header />
			<Hero title="お問い合わせ" subTitle="Contact" />
			<Layout>
				<h1>Contact Page</h1>
				{/* 他のコンテンツ */}
			</Layout>
		</div>
	);
};

export default Contact;
