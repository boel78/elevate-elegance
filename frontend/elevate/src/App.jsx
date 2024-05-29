import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { HomePage } from "../pages/Homepage/homePage";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hej</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<HomePage/>} />
          <Route path="/cart" />
        </Routes>
      </Router>
    </>
  );
}  

export default App;
