import React from "react";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { Hero } from "src/Hero";

const Works = () => {
	return (
		<div>
			<Header />
			<Hero title="実績紹介" subTitle="Works" />
			<Layout>
				<h1>Works Page</h1>
				{/* 他のコンテンツ */}
			</Layout>
		</div>
	);
};

export default Works;
