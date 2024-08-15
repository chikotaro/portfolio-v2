import Image from "next/image";
import React from "react";

interface HeroProps {
	title: string;
	subTitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subTitle }) => {
	return (
		<div className="bg-blue-100 py-5">
			<div className="mx-auto">
				<div className="flex items-end justify-center">
					<h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>
					{subTitle && (
						<p className="mt-1 text-xl italic sm:text-2xl">{subTitle}</p>
					)}
				</div>
			</div>
		</div>
	);
};
