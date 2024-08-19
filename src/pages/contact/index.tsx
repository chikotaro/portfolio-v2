import React from "react";
import { Header } from "src/component/Header";
import { Layout } from "src/component/Layout";
import { Hero } from "src/Hero";
import { useForm, SubmitHandler } from "react-hook-form";
import { Footer } from "src/component/Footer";

interface IFormInput {
	name: string;
	email: string;
	content: string;
}

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};

	return (
		<div>
			<Header />
			<div className="mt-[56px] sm:mt-[88px]">
				<Hero title="お問い合わせ" subTitle="Contact" />
			</div>
			<Layout>
				<h1 className="text-xl font-bold">お問い合わせフォーム</h1>

				<form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							名前
						</label>
						<input
							id="name"
							{...register("name", { required: "名前は必須です" })}
							className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						{errors.name ? (
							<span className="text-red-600">{errors.name.message}</span>
						) : null}
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							メールアドレス
						</label>
						<input
							id="email"
							type="email"
							{...register("email", { required: "メールアドレスは必須です" })}
							className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						{errors.email ? (
							<span className="text-red-600">{errors.email.message}</span>
						) : null}
					</div>
					<div>
						<label
							htmlFor="content"
							className="block text-sm font-medium text-gray-700"
						>
							お問い合わせ内容
						</label>
						<textarea
							id="content"
							{...register("content", {
								required: "お問い合わせ内容は必須です",
							})}
							className="mt-1 block h-[250px] w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						{errors.content ? (
							<span className="text-red-600">{errors.content.message}</span>
						) : null}
					</div>
					<button
						type="submit"
						className="w-1/2 rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700"
					>
						送信する
					</button>
				</form>

				{/* 他のコンテンツ */}
			</Layout>
			<Footer />
		</div>
	);
};

export default Contact;
