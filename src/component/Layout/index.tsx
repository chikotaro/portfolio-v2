import React, { FC } from "react";
import { Header } from "src/component/Header";
import { Sheet } from "src/component/Sheet";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
	<div className="relative mx-auto flex min-h-screen w-full flex-col p-4">
		<Sheet>{children}</Sheet>
		{/* <main className="flex-grow ">{children}</main> */}
		<div className="background-pattern"></div>
	</div>
);
