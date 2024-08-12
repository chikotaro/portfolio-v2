import Link from "next/link";

type ButtonLinkProps = {
	name: string;
	href: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ name, href }) => {
	return (
		<div className="h-10 w-32 rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-400">
			<Link href={href} passHref>
				<p className="block h-full w-full text-center">{name}</p>
			</Link>
		</div>
	);
};
