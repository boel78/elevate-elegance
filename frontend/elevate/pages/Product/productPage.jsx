import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { MenuContext } from '../../src/menuContext';
import { HomePageProduct } from '../../components/homePageProduct';
import { Sidemenu } from '../../components/sidemenu';
import { Layout } from '../../components/layout';
import { ArrowDown, Heart } from '@phosphor-icons/react';

export const ProductPage = () => {

    const { id } = useParams();

    const [product, setProduct] = useState()

    const {cart, setCart, sideMenuActive, noMenus, setFocusingHomepageObject, focusingHomepageObject, setFocusedObject} = useContext(MenuContext)

    useEffect(() => {
        noMenus()
    },[])
    
    useEffect(() =>{
        const product = PRODUCTS.find((product) => product.id === parseInt(id));
        setProduct(product)
    }, [id])

    const addToCart = () => {
        setCart([...cart, product])
    }

    if (!product) {
        return <p>Laddar produkt...</p>;
      }

      const handleFocusObject = (element) => {
        setFocusingHomepageObject(!focusingHomepageObject);
        setFocusedObject(element);
      };

      

  return (
    <Layout>
         <div className='flex flex-col gap-12 '>
           <h3 className='pt-16 '>breadcrumb</h3>
          <div className='flex justify-around gap-80 border-solid border-2 border-black'>
              <div>
                  <img src={product.image} className='rounded-lg'/>
              </div>
              <div className='flex'>
                <div className='flex flex-col border-2 border-solid border-red-400 gap-16'>
                    <div>
                      <h2 className='text-2xl font-medium'>{product.name}</h2>
                      <p>{product.price} SEK</p>
                    </div>
                    <div>
                      <p>Size</p>
                      <p>SizeGuide</p>
                      <button onClick={addToCart} className='text-black font-bold bg-lightTan py-4 px-6 rounded-xl hover:bg-darkBlue hover:text-white'>Add to cart</button>
                    </div>
                    <ul>
                      <li className='flex items-center'><p>Description and fitting</p><ArrowDown /></li>
                      <li className='flex items-center'><p>Material</p><ArrowDown /></li>
                      <li className='flex items-center'><p>Care Advice</p><ArrowDown /></li>
                    </ul>
                </div>
                <Heart size='45'/>
              </div>
          </div>
          <div className='flex flex-col items-center mt-44'>
              <p>You may also like</p>
              <div className='flex justify-center'>
                  {PRODUCTS.map(
              (element) =>
                element.isTopSeller && (
                  <img
                    src={element.image}
                    key={element.id}
                    className="rounded-lg max-w-64"
                    onClick={() => handleFocusObject(element)}
                  />
            ))}
              </div>
          </div>
         </div>
    </Layout>
  )
}
