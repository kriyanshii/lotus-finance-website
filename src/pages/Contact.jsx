import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

function Contact() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col justify-center items-center bg-gray-50">
				<main className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-4xl">
					<h1 className="text-xl md:text-2xl font-semibold">Contact Us</h1>

					<section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-lg font-semibold">Get in Touch</h2>
							<p className="mt-4">
								Feel free to drop us a line, and we'll get back to you as soon
								as possible!
							</p>

							<form className="mt-6">
								<label
									htmlFor="name"
									className="block font-medium text-gray-700">
									Name
								</label>
								<input
									type="text"
									id="name"
									className="mt-1 mb-4 p-2 w-full border rounded"
									placeholder="Your name"
								/>

								<label
									htmlFor="email"
									className="block font-medium text-gray-700">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-1 mb-4 p-2 w-full border rounded"
									placeholder="Your email"
								/>

								<label
									htmlFor="message"
									className="block font-medium text-gray-700">
									Message
								</label>
								<textarea
									id="message"
									className="mt-1 mb-4 p-2 w-full border rounded"
									rows="4"
									placeholder="Your message"></textarea>

								<button
									type="submit"
									className="mt-4 py-2 px-4 border border-transparent rounded text-white bg-blue-600 hover:bg-blue-500">
									Send Message
								</button>
							</form>
						</div>

						<div>
							<h2 className="text-lg font-semibold">Contact Information</h2>
							<ul className="mt-4 space-y-4">
								<li className="flex items-center">
									<Mail className="mr-3" />
									<span>info@financeco.com</span>
								</li>
								<li className="flex items-center">
									<Phone className="mr-3" />
									<span>+1 234 567 8900</span>
								</li>
								<li className="flex items-center">
									<MapPin className="mr-3" />
									<span>123 Finance Street, Money City</span>
								</li>
							</ul>

							<div className="mt-8">
								<h3 className="text-lg font-semibold">FAQ</h3>
								<dl className="mt-4 space-y-2">
									<dt className="font-medium">What services do you offer?</dt>
									<dd>
										We offer a wide range of financial services including but
										not limited to asset management, investment advice, and
										financial planning.
									</dd>

									<dt className="font-medium">How can I open an account?</dt>
									<dd>
										You can start the process on our website or visit us at our
										branch for a guided setup with one of our representatives.
									</dd>
								</dl>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}

export default Contact;
