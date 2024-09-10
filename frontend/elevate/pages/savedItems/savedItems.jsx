import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../src/menuContext'
import { SAVEDITEMS } from '../../savedItems'
import { PRODUCTS } from '../../products'
import { Layout } from '../../components/layout'

export const SavedItems = () => {

    const { currentUser, noMenus } = useContext(MenuContext)
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
        const savedItems = SAVEDITEMS.filter((likedProduct) => currentUser.id === likedProduct.u_id)
        console.log(savedItems)
        const savedProductIds = savedItems.flatMap((item) => item.p_id)
       const likedProductsByUser = PRODUCTS.filter((product) => savedProductIds.includes(product.id))
        setLikedProducts(likedProductsByUser)
    },[currentUser])

    useEffect(() => {
        noMenus()
    },[])
  return (
    <Layout>
        <div className='pt-20'>
            {likedProducts.map((likedProduct) => (
                <div key={likedProduct.id}>
                    <img src={likedProduct.image}></img>
                </div>
            ))}
        </div>
    </Layout>
  )
}
