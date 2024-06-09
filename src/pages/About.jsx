import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import piggybank from "../assets/piggyback.webp";
import "../index.css";

function About() {
	return (
		<>
			<div className="about h-screen min-h-screen text-white">
				<Header />
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
		</>
	);
}

export default About;
