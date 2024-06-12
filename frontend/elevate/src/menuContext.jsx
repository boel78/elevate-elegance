import React, { createContext, useState } from 'react'

export const MenuContext = createContext(null)

export const MenuContextProvider = (props) => {
    const [sideMenuActive, setSideMenuActive] = useState(false);
    const contextValue = {sideMenuActive, setSideMenuActive}
  return (
    <MenuContext.Provider value={contextValue}>{props.children}</MenuContext.Provider>
  )
}
