import React from "react";
import {
  User,
  ShoppingCart,
  MagnifyingGlass,
  List,
} from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full drop-shadow-md">
      <div className="flex h-12 items-center justify-between py-3">
        <div className="">
          <p className="text-3xl font-extralight font-inter pl-2">
            Elevate Elegance
          </p>
        </div>
        <div className="flex gap-2">
          <a>
            <MagnifyingGlass size="40" />
          </a>
          <a>
            <User size="40" />
          </a>
          <a>
            <ShoppingCart size="40" />
          </a>
          <div className="flex items-center">
          <p className="text-2xl font-extralight font-inter">Menu</p>
            <a>
              <List size="40" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
