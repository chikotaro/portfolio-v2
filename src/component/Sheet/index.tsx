import { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const Sheet: FC<Props> = ({ children }: Props) => (
	<div className="mx-auto mt-4 w-full sm:max-w-[740px]">{children}</div>
);
