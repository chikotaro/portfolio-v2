import React from "react";

interface HeroProps {
	title: string;
	subTitle?: string;
	backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
	title,
	subTitle,
	backgroundImage,
}) => {
	return (
		<div className="bg-blue-200 py-5">
			<div className="container mx-auto">
				<div className="flex  items-end justify-center">
					<h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>
					{subTitle && (
						<p className="mt-1 text-xl italic sm:text-2xl">{subTitle}</p>
					)}
				</div>
			</div>
		</div>
	);
};
