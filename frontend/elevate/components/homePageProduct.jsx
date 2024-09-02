import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { MenuContext } from '../src/menuContext';

export const HomePageProduct = (props) => {
    const [img, setImg] = useState()
    const {cart, setCart} = useContext(MenuContext)
    
    useEffect(() => {
      setImg(props.data.image)
    }, [])

    const addToCart = () => {
      const product = props
      
      setCart([...cart, product])
      console.log(cart)
    }

  return (
    <div className="w-1/5 h-auto rounded-xl border-solid border-2 border-black">
        <div>
            <img />
            <div>
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <p>{props.data.price} SEK</p>
                <img src={img}/>
                <Link to={`/product/${props.data.id}`}>              
                  <button className='text-white bg-blue-950'>To Product</button>
                </Link>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
