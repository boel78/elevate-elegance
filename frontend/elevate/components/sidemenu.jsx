import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export const Sidemenu = () => {

  return (
    <div className='fixed right-0 top-12 w-1/4 bg-white h-5/6 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex flex-col'>
            <div className='self-end pt-3 pr-3'>
                
            </div>
            <div className='pl-12'>
                <div className='pt-20 text-xl'>
                    <p>New in</p>
                    <Link to='/cataloge/Bags'><p>Handbags</p></Link>
                    <Link to='/cataloge/Jewellery'><p>Jewellery</p></Link>
                    <Link to='/cataloge/Shoes'><p>Shoes</p></Link>
                    <Link to='/cataloge/Clothing'><p>Clothing</p></Link>
                </div >
                <div className='underline pt-8 text-md'>
                    <Link to={"/Login"}><p>Sign in</p></Link>
                    <Link to={"/Orders"}><p>My Orders</p></Link>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}
