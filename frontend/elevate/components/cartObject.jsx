import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../src/menuContext';
import { ArrowDown } from '@phosphor-icons/react';

export const CartObject = ({obj}) => {

    const item = obj

    const [sizeBarOpen, setSizeBarOpen] = useState(false)
    const {setCart, cart} = useContext(MenuContext)

    const handleSizeBarToggle = () => {
        setSizeBarOpen(!sizeBarOpen);
      };
    
      const handleSetSize = (item, s) => {
        const updatedCart = cart.map((p) => {
          if (p.product.id === item.product.id) {
            return { ...p, size: s };
          }
          return p;
        });
        setCart(updatedCart);
        setSizeBarOpen(false);
      };
    
      const handleChangeQuantity = (val, item) => {
        let updatedCart = cart
       if(Number(val) === 0 ){
         updatedCart = cart.filter((product) => !(product.id === item.id))
        setCart(updatedCart)
       }
       else{
         updatedCart = cart.map((product) => {
          if (product.id === item.id) {
            console.log(item.id)
              return { ...product, quantity: val }; 
          }
          return product;
        });
        setCart(updatedCart);
        console.log(cart)

      }
      };
      

    
  return (
    <div>
            <div className='flex gap-4 w-1/3'>
                <img src={`data:image/jpeg;base64,${item.product.image}`} className="rounded-xl min-w-28" />
                <div className=''>
                  <h3 className="font-medium text-xl">{item.product.name}</h3>
                  <p className='text-sm'>{item.product.price} SEK</p>
                  <div className="flex">
                    <p className='w-full text-sm'>Size: {!sizeBarOpen && item.size}</p>
                    {item.product.size.length === 1 ? (
                      <p>One size</p>
                    ) : sizeBarOpen ? (
                      <ul>
                        {item.product.size.map((s, index) => (
                          <p className="pl-2" key={index} onClick={() => handleSetSize(item, s)}>
                            {s}
                          </p>
                        ))}
                      </ul>
                    ) : (
                      <ArrowDown
                        onClick={handleSizeBarToggle}
                        className="self-center"
                      />
                    )}
                  </div>
                  <span className="flex gap-2 text-sm">
                    <p>Quantity:</p>
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-8"
                      onChange={(e) => handleChangeQuantity(e.target.value, item)}
                    />
                  </span>
                </div>
              </div>
            </div>
  )
}
