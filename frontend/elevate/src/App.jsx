import { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { HomePage } from "../pages/Homepage/homePage";
import { MenuContextProvider } from "./menuContext";
import { Cataloge } from "../pages/Cataloge/Cataloge";
import { ProductPage } from "../pages/Product/productPage";
import { Login } from "../pages/Login/Login";
import { MyOrders } from "../pages/Orders/myOrders";

function App() {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);
  const appContext = createContext();
  return (
    <>
        <MenuContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/cart" />
              <Route path="/cataloge/:Category" element = {<Cataloge />} />
              <Route path="/cataloge/" element = {<Cataloge />} />
              <Route path="/Product/:id" element = {<ProductPage />} />
              <Route path="/Login" element = {<Login />}/>
              <Route path="/Orders" element = {<MyOrders />}/>
            </Routes>
          </Router>
        </MenuContextProvider>
    </>
  );
}  

export default App;
