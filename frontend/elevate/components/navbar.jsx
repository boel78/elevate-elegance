import React, { useContext } from "react";
import { MenuContext } from "../src/menuContext";
import { Link } from "react-router-dom";
import {
  User,
  ShoppingCart,
  MagnifyingGlass,
  List,
} from "@phosphor-icons/react";

export const Navbar = () => {
  const {
    sideMenuActive,
    setSideMenuActive,
    cart,
    setCartMenuActive,
    cartMenuActive,
    profileMenuActive,
    setProfileMenuActive,
    currentUser,
    searchMenuActive,
    setSearchMenuActive,
  } = useContext(MenuContext);

  const handleMenu = () => {
    setCartMenuActive(false);
    setProfileMenuActive(false);
    setSearchMenuActive(false);
    setSideMenuActive(!sideMenuActive);
  };

  const handleCartMenu = () => {
    console.log(cartMenuActive);
    setSideMenuActive(false);
    setProfileMenuActive(false);
    setSearchMenuActive(false);
    setCartMenuActive(!cartMenuActive);
  };

  const handleProfileMenu = () => {
    setCartMenuActive(false);
    setSideMenuActive(false);
    setSearchMenuActive(false);
    setProfileMenuActive(!profileMenuActive);
    console.log(currentUser);
  };
  const handleSearchMenu = () => {
    setCartMenuActive(false);
    setSideMenuActive(false);
    setProfileMenuActive(false);
    setSearchMenuActive(!searchMenuActive);
  };

  return (
    <nav className="bg-white fixed w-full drop-shadow-md">
      <div className="flex h-12 items-center justify-between py-3">
        <div className="">
          <Link to={"/"}>
            <p className="text-3xl font-extralight font-inter pl-2">
              Elevate Elegance
            </p>
          </Link>
        </div>
        <div className="flex gap-2">
          <a onClick={handleSearchMenu}>
            <MagnifyingGlass size="40" />
          </a>
          <a onClick={handleProfileMenu}>
            <User size="40" />
          </a>
          <a className="flex" onClick={handleCartMenu}>
            <ShoppingCart size="40" />
            {cart.length > 0 && (
              <div className="flex justify-center bg-red-600 rounded-full h-5 w-5 ">
                <p className="text-yellow-100">{cart.length}</p>
              </div>
            )}
          </a>
          <div className="flex items-center" onClick={() => handleMenu()}>
            <a>
              <List size="40" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
