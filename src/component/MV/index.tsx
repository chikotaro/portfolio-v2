import Image from "next/image";

export const MV = () => {
	return (
		<div>
			<div className="relative h-[600px] w-full sm:h-screen">
				<div className="absolute inset-0 top-[50px] sm:top-0">
					<h2 className="absolute left-1/2 w-fit -translate-x-1/2 transform whitespace-nowrap bg-white text-3xl sm:top-[80px] sm:text-6xl">
						「自由な想像を形に」
					</h2>
					<div className="relative mx-auto flex h-auto w-full max-w-[800px] items-center justify-center">
						<Image
							src="/Performance-Review-color-800px.png"
							// layout="fill"
							// objectFit="cover"
							width={800}
							height={800}
							alt="Background Image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
