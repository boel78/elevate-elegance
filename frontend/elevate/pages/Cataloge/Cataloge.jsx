import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { MenuContext } from '../../src/menuContext'
import Axios from 'axios'
import { HomePageProduct } from '../../components/homePageProduct'
import { Sidemenu } from '../../components/sidemenu'

export const Cataloge = () => {
    const {filteredProducts, sideMenuActive, setSideMenuActive} = useContext(MenuContext)
    const [products, setProducts] = useState([{}])

    useEffect(() => {
        Axios.get("http://localhost:8080/api/product").then((res) => {
            setProducts(res.data)
        })
    }, [])

  return (
    <>
    <Navbar />
    <div className='bg-lightTan flex flex-col gap-20'>
    <div className='flex justify-end'>
        <div className='flex pt-20'>
            <p>Category</p>
            <p>Filters</p>
            <p>Sort by</p>
        </div>
    </div>
    <div>
        {products.map((element) => (
            <HomePageProduct key={element._id} data={element}/>
        )
        )}
    </div>
    </div>
    <Footer />
    {sideMenuActive && <Sidemenu/>}
    </>
  )
}
