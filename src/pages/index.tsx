import type { NextPage } from "next";
import { About } from "src/component/About";
import { Layout } from "src/component/Layout";
import { MV } from "src/component/MV";
import { Works } from "src/component/Works";

const Home: NextPage = () => {
	return (
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
	);
};

export default Home;
