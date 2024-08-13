import React from "react";
import { Header } from "src/component/Header";
import { Hero } from "src/Hero";

const Works = () => {
	return (
		<div>
			<Header />
			<Hero title="実績紹介" subTitle="Works" />
			<h1>Works Page</h1>
			{/* 他のコンテンツ */}
		</div>
	);
};

export default Works;
