import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../src/menuContext'

export const Cart = () => {

  const {cart} = useContext(MenuContext)

  useEffect(() => {
    console.log(cart)
  },[cart])

  return (
    <div className='flex flex-col fixed right-0 top-12 w-1/4 bg-white border-l-2 border-b-2 border-black font-inter'>
        <div className='flex content-center'>
            <h2>Added to shopping cart</h2>
        </div>
        {cart.map((item) => (
          <div key={item.id}>
          <img src={item.image}/>
          <div>
              <h3>{item.name}</h3>
              <p>{item.price} SEK</p>
              <p>Size</p>
              <p>Quantity</p>
          </div>
      </div>
        ))}
        
        <button>Checkout</button>
        <button>View shopping cart</button>
        
    </div>
  )
}
