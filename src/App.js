import React from "react";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs'

const App = () => {
	return (
		<>
    <BrowserRouter>
      <Routes>
		<Route path="/" element={HomePage} />
		<Route path="/contact" element={ContactUs}/>
      </Routes>
    </BrowserRouter>
		</>
	);
};

export default App;
