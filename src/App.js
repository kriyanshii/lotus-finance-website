import React from "react";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/Contact'
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/services" element={<Services />} ></Route>
				<Route path="/contacts" element={<Contact />} ></Route>
				<Route path="/about" element={<About />} ></Route>
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
