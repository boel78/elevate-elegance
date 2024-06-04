import React, { useEffect } from 'react'

export const HomePageProduct = (props) => {
    const product = props.data
    console.log(product)


  return (
    <div className="w-1/5 h-auto rounded-xl border-solid border-2 border-black">
        <div>
            <img />
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button>To Product</button>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
