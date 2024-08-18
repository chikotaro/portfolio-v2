import type { NextPage } from "next";
import { About } from "src/component/About";
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
						<div className="mx-auto mt-20 sm:max-w-[800px]">
							<Works />
						</div>
					</div>
				</Layout>
			</div>
		</div>
	);
};

export default Home;
