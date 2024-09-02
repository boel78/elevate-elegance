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
const {sideMenuActive, setSideMenuActive, cart} = useContext(MenuContext)

const handleMenu = () => {
  setSideMenuActive(!sideMenuActive) 
}

  return (
    <nav className="bg-white fixed w-full drop-shadow-md">
      <div className="flex h-12 items-center justify-between py-3">
        <div className="">
          <Link to={""}>
            <p className="text-3xl font-extralight font-inter pl-2">
              Elevate Elegance
            </p>
          </Link>
        </div>
        <div className="flex gap-2">
          <a>
            <MagnifyingGlass size="40" />
          </a>
          <a>
            <User size="40" />
          </a>
          <a className="flex">
            <ShoppingCart size="40" />
            {cart.length > 0 && 
            <div className='flex justify-center bg-red-600 rounded-full h-5 w-5 '>
              <p className='text-yellow-100'>{cart.length}</p>
            </div>}
          </a>
          <div className="flex items-center" onClick={() =>handleMenu()}>
            <a>
              <List size="40" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
