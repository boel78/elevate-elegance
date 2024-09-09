import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../src/menuContext'
import { TanButton } from './button'

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
    <div className='flex flex-col fixed right-0 top-12 w-1/3 bg-white border-l-2 border-b-2 border-black font-inter max-h-[400px] overflow-y-scroll gap-4'>
        <div className='flex content-center self-center'>
            <h2 className='font-medium text-2xl'>Added to shopping cart</h2>
        </div>
        <div className='flex-col flex gap-2'>
          {cart.map((item) => (
            <div key={item.product.id + item.size} className='flex gap-12'>
            <img src={item.product.image} className='w-36 rounded-xl'/>
            <div>
                <h3 className='font-medium text-xl'>{item.product.name}</h3>
                <p>{item.product.price} SEK</p>
                <p>{item.size}</p>
                <p>{item.quantity}</p>
            </div>
        </div>
          ))}
        </div>

        {/*renderItems()*/}
        
        <div className='w-1/2 self-center flex flex-col gap-4'>
          <TanButton btnText={"Checkout"}/>
          <TanButton btnText={"View shopping cart"} />
        </div>
        
    </div>
  )
}
