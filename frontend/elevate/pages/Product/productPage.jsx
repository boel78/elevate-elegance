import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';

export const ProductPage = () => {

    const { id } = useParams();

    const [product, setProduct] = useState()
    
    useEffect(() =>{
        const product = PRODUCTS.find((product) => product.id === parseInt(id));
        setProduct(product)
        console.log(product)
    }, [id])

    if (!product) {
        return <p>Laddar produkt...</p>;
      }

  return (
    <>
        <div className='flex pt-20'>
            <div className='flex-col'>
                <h2>breadcrumb</h2>
                <img src={product.image}/>
            </div>
            <div>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Size</p>
                <p>SizeGuide</p>
                <button>Add to cart</button>
            </div>
        </div>
    </>
  )
}
