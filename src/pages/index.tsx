import type { NextPage } from "next";
import Image from "next/image";
import { About } from "src/component/About";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { MV } from "src/component/MV";
import { Works } from "src/component/Works";

const Home: NextPage = () => {
	return (
		<div className="mt-10">
			<Header />
			<div>
				<Layout>
					<div className="w-full">
						<MV />
						<div className="mx-auto mt-4 sm:max-w-[800px]">
							<About />
						</div>
						<div className="mx-auto mt-[150px] sm:max-w-[800px]">
							<Works />
						</div>
					</div>
				</Layout>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
