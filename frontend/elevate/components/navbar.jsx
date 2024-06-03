import React from "react";
import {
  User,
  ShoppingCart,
  MagnifyingGlass,
  List,
} from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <nav className="bg-white border-solid border-2 border-black">
      <div className="flex h-16 items-center justify-between">
        <div className="">
          <p className="text-5xl/[56px] font-extralight font-inter">
            Elevate Elegance
          </p>
        </div>
        <div className="flex gap-2">
          <a>
            <MagnifyingGlass size="61" />
          </a>
          <a>
            <User size="61" />
          </a>
          <a>
            <ShoppingCart size="61" />
          </a>
          <div className="flex items-center">
          <p className="text-4xl font-extralight font-inter">Menu</p>
            <a>
              <List size="61" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
