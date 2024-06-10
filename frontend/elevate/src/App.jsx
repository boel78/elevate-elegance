import { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { HomePage } from "../pages/Homepage/homePage";

function App() {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const appContext = createContext();
  return (
    <>
      <appContext.Provider value={(sideMenuActive, setSideMenuActive)}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/cart" />
          </Routes>
        </Router>
      </appContext.Provider>
    </>
  );
}  

export default App;
