import React, { useContext } from 'react'
import { MenuContext } from '../src/menuContext'

export const Cart = () => {

    const {setCartMenuActive} = useContext(MenuContext)

    const handleMenu = () =>{
        setCartMenuActive(false)
    }

  return (
    <div className='flex flex-col fixed right-6 top-12 w-1/4 bg-white h-5/6 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex content-center'>
            <h2>Added to shopping cart</h2>
            <span onClick={handleMenu}>X</span>
        </div>
        <div>
            <img/>
            <div>
                <h3>Titel</h3>
                <p>KR</p>
                <p>Size</p>
                <p>Quantity</p>
            </div>
        </div>
        <button>Checkout</button>
        <button>View shopping cart</button>
        
    </div>
  )
}
