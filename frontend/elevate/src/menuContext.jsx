import React, { createContext, useState } from 'react'

export const MenuContext = createContext(null)

export const MenuContextProvider = (props) => {
    const [sideMenuActive, setSideMenuActive] = useState(false);
    const [cartMenuActive, setCartMenuActive] = useState(false);
    const [profileMenuActive, setProfileMenuActive] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState("Clothing")
    const [currentUser, setCurrentUser] = useState(null)
    const [cart, setCart] = useState([])
    const noMenus = () => {
      setSideMenuActive(false)
      setCartMenuActive(false)
      setProfileMenuActive(false)
    }
    const contextValue = {sideMenuActive, setSideMenuActive, noMenus, filteredProducts, setFilteredProducts, cart, setCart, currentUser, setCurrentUser, setCartMenuActive, cartMenuActive, profileMenuActive, setProfileMenuActive}
  return (
    <MenuContext.Provider value={contextValue}>{props.children}</MenuContext.Provider>
  )
}
