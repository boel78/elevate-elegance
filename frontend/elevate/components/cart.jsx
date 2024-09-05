import React, { useContext } from 'react'

export const Cart = () => {


  return (
    <div className='flex flex-col fixed right-0 top-12 w-1/4 bg-white h-2/6 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex content-center'>
            <h2>Added to shopping cart</h2>
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
