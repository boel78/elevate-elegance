import { createContext, useState } from "react";
import "./App.css";
import "./global.css"
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { HomePage } from "../pages/Homepage/homePage";
import { MenuContextProvider } from "./menuContext";
import { Cataloge } from "../pages/Cataloge/Cataloge";
import { ProductPage } from "../pages/Product/productPage";
import { Login } from "../pages/Login/Login";
import { MyOrders } from "../pages/Orders/myOrders";
import { SavedItems } from "../pages/savedItems/savedItems";
import { Footer } from "../components/footer";
import { AccountSettings } from "../pages/AccountSettings/accountSettings";
import { RegisterPage } from "../pages/Register/registerPage";
import { GuestCheckout } from "../pages/Checkout/guestCheckout";
import { FinalCheckout } from "../pages/Checkout/finalCheckout";
import { Toaster } from "react-hot-toast";
import { Admin } from "../pages/adminPage/Admin";
import { AboutUs } from "../pages/Aboutus/AboutUs";

function App() {
  return (
    <>
        <MenuContextProvider>

          <Router>
            <Navbar />
            {<Toaster
  position="bottom-right"
  reverseOrder={false}
/> }
            <Routes>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/cart" />
              <Route path="/cataloge/:Category" element = {<Cataloge />} />
              <Route path="/cataloge/" element = {<Cataloge />} />
              <Route path="/Product/:id" element = {<ProductPage />} />
              <Route path="/Login" element = {<Login />}/>
              <Route path="/Orders" element = {<MyOrders />}/>
              <Route path="/SavedItems" element={<SavedItems />}/>
              <Route path="/Settings" element={<AccountSettings/>}/>
              <Route path="/Register" element={<RegisterPage/>}/>
              <Route path="/guestCheckout" element={<GuestCheckout/>}/>
              <Route path="/checkout" element={<FinalCheckout/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/aboutUs" element={<AboutUs/>}/>
            </Routes>
            <Footer/>
           
          </Router>

        </MenuContextProvider>
    </>
  );
}  

export default App;
