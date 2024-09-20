import React, { createContext, useState } from "react";

export const MenuContext = createContext(null);

export const MenuContextProvider = (props) => {
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);
  const [searchMenuActive, setSearchMenuActive] = useState(false);
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const [filledOutOrderDetails, setFilledOutOrderDetails] = useState()
  const [focusingHomepageObject, setFocusingHomepageObject] = useState(false)
  const [focusedObject, setFocusedObject] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const noMenus = () => {
    setSideMenuActive(false);
    setCartMenuActive(false);
    setProfileMenuActive(false);
  };
  const contextValue = {
    sideMenuActive,
    setSideMenuActive,
    noMenus,
    cart,
    setCart,
    currentUser,
    setCurrentUser,
    setCartMenuActive,
    cartMenuActive,
    profileMenuActive,
    setProfileMenuActive,
    setSearchMenuActive,
    searchMenuActive,
    focusingHomepageObject,
    setFocusingHomepageObject,
    focusedObject,
    setFocusedObject,
    filledOutOrderDetails,
    setFilledOutOrderDetails
  };
  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
};
