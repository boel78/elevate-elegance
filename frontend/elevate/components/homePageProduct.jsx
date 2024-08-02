import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HomePageProduct = (props) => {
    const [img, setImg] = useState("")
    const product = props.data
    console.log(product)

    let imgLink = "https://drive.usercontent.google.com/download?id=" + product.imageLink
  
    useEffect(() => {
      setImg(imgLink)
    }, [])

  return (
    <div className="w-1/5 h-auto rounded-xl border-solid border-2 border-black">
        <div>
            <img />
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={img}/>
                <button>To Product</button>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
