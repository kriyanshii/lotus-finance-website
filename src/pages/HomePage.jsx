import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Accordion from "../components/Accordian"
import Services from "./Services.jsx"
import "../index.css";
import hourglass from "../assets/hourglass.webp";
import piggybank from "../assets/piggyback.webp";

function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<div className="hero pb-8 m-8 flex items-center justify-center">
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
			</div>
			<div className="about text-white">
				<div className="about-us flex mx-8 flex-col sm:w-1/2">
					<h1 className="font-bold my-8 text-5xl">About</h1>
					<div className="text pt-4 text-xl">
						<p className="pt-4">
							We are providing all kind of loans like Home loans,Mortgage
							loan,Car loan,personal loan, business loan, overdraft loan ,cash
							credit loan,life insurance,Mediclaim since 16 years.
						</p>
						<p className="pt-4">
							We have tied up with Kotak Mahindra bank,ICICI bank, Axis
							Bank,Idfc bank, Hdfc bank,Bajaj Allianz insurance,Tata Aig
							insurance.we have served more 2000 customers for different
							products
						</p>
					</div>
				</div>
				<div className="img flex flex-col justify-end items-end">
					<img
						className="flex items-center hover:animate-spin-slow"
						width={350}
						height={350}
						src={piggybank}
						alt=""
					/>
				</div>
			</div>
			<div className="choose">
				<Accordion />
			</div>
			<Services />
		</>
	);
}

export default Home;
