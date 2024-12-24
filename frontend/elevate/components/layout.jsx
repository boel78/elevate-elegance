import React, { useContext, useEffect } from "react";
import { MenuContext } from "../src/menuContext";
import { Sidemenu } from "./sidemenu";
import { Cart } from "./cart";
import { Profile } from "./profile";
import { Search } from "./search";
import { HomePageProduct } from "./homePageProduct";


export const Layout = ({children}) => {
  const {
    sideMenuActive,
    cartMenuActive,
    profileMenuActive,
    searchMenuActive,
    focusingHomepageObject,
    focusedObject,
  } = useContext(MenuContext);



 

  return (
    <div className="flex-col bg-superLightTan min-h-screen max-w-full">
        {children}
        {sideMenuActive && <Sidemenu />}
      {cartMenuActive && <Cart />}
      {profileMenuActive && <Profile />}
      {searchMenuActive && <Search />}
      {focusingHomepageObject && <HomePageProduct data={focusedObject} />}
    </div>
  );
};
