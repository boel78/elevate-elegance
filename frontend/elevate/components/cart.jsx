import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../src/menuContext'

export const Cart = () => {

  const {cart} = useContext(MenuContext)
  

  useEffect(() => {
    console.log(cart)
  },[cart])

  /*const renderItems = () => {
    const items = []
    for(const [key, value] of cart){
      console.log(key + value)
      items.push(
      <div key={key.id}>
          <img src={key.image}/>
          <div>
              <h3>{key.name}</h3>
              <p>{key.price} SEK</p>
              <p>Size</p>
              <p>Quantity: {value}</p>
          </div>
      </div>)

    }
    return items
  }*/

  return (
    <div className='flex flex-col fixed right-0 top-12 w-1/4 bg-white border-l-2 border-b-2 border-black font-inter'>
        <div className='flex content-center'>
            <h2>Added to shopping cart</h2>
        </div>
        {cart.map((item) => (
          <div key={item.product.id}>
          <img src={item.product.image}/>
          <div>
              <h3>{item.product.name}</h3>
              <p>{item.product.price} SEK</p>
              <p>Size</p>
              <p>Quantity</p>
          </div>
      </div>
        ))}

        {/*renderItems()*/}
        
        <button>Checkout</button>
        <button>View shopping cart</button>
        
    </div>
  )
}
