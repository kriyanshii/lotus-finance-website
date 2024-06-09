import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../index.css";
import hourglass from "../assets/hourglass.webp";


function Home() {
	return (
		<>
			<Header />
				<div className="hero ml-8 mr-8 flex items-center h-screen min-h-screen justify-center">
					<div className="text">
						{" "}
						<h1 className="font-bold">
							Quick and Easy Loans for everyone, Empowering your financial
							goals.
						</h1>
						<p className="mb-4">
							Gone are the days when loans were hard to come by–now there are
							many different
							<br /> types of loans that you can apply for, all designed
							especially for your needs. <br />
							Browse through our list and find a loan type and apply today.
						</p>
						<Button href="#contactus" className="" isPurple={true}>
							Contact us
						</Button>
					</div>
					<img
						className="flex items-center rounded-full transform translate-y-8 hover:translate-y-2 duration-500 ease-in-out"
						width={450}
						height={450}
						src={hourglass}
						alt="hourglass image"
					/>
				</div>

		</>
	);
}

export default Home;
