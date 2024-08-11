import React from "react";

interface TitlesProps {
	title: string;
	subTitle: string;
}

export const Title: React.FC<TitlesProps> = ({ title, subTitle }) => {
	return (
		<div className="mx-auto flex items-end gap-1">
			<h1 className="text-3xl font-bold">{title}</h1>
			<span className="font-serif text-sm italic text-gray-400">
				{subTitle}
			</span>
		</div>
	);
};
