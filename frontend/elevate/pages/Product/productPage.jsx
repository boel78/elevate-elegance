import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { MenuContext } from '../../src/menuContext';
import { HomePageProduct } from '../../components/homePageProduct';
import { Sidemenu } from '../../components/sidemenu';

export const ProductPage = () => {

    const { id } = useParams();

    const [product, setProduct] = useState()

    const {cart, setCart, sideMenuActive} = useContext(MenuContext)
    
    useEffect(() =>{
        const product = PRODUCTS.find((product) => product.id === parseInt(id));
        setProduct(product)
        console.log(product)
    }, [id])

    const addToCart = () => {
        setCart([...cart, product])
    }

    if (!product) {
        return <p>Laddar produkt...</p>;
      }

  return (
    <>
        <div className='flex pt-20 justify-between'>
            <div className='flex-col'>
                <h2>breadcrumb</h2>
                <img src={product.image}/>
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Size</p>
                <p>SizeGuide</p>
                <button onClick={addToCart} className='bg-slate-500'>Add to cart</button>
                <p>Description and fitting</p>
                <p>Material</p>
                <p>Care advice</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <p>You may also like</p>
            <div className='flex justify-center'>
                {PRODUCTS.map((element) => (
                    <HomePageProduct key={element.id} data={element}/>
                ))}
            </div>
        </div>
        {sideMenuActive && <Sidemenu/>}
    </>
  )
}
