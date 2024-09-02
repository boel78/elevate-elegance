import React, { createContext, useState } from 'react'

export const MenuContext = createContext(null)

export const MenuContextProvider = (props) => {
    const [sideMenuActive, setSideMenuActive] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState("Clothing")
    const [cart, setCart] = useState([])
    const contextValue = {sideMenuActive, setSideMenuActive, filteredProducts, setFilteredProducts, cart, setCart}
  return (
    <MenuContext.Provider value={contextValue}>{props.children}</MenuContext.Provider>
  )
}
