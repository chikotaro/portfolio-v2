import React,{FC} from "react";
import { Header } from "src/component/Header";


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
	<div className="relative flex min-h-screen w-full flex-col p-4">
		<Header />
		<main className="flex-grow">{children}</main>
		<div className="background-pattern"></div>
	</div>
);

