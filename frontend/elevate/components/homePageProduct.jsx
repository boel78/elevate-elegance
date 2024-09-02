import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HomePageProduct = (props) => {
    const [img, setImg] = useState()
    
    useEffect(() => {
      console.log(props)
      setImg(props.data.image)
    }, [])

  return (
    <div className="w-1/5 h-auto rounded-xl border-solid border-2 border-black">
        <div>
            <img />
            <div>
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <p>{props.data.price} SEK</p>
                <img src={img}/>
                <button className='text-white bg-blue-950'>To Product</button>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
