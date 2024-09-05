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
                    <p>Handbags</p>
                    <p>Jewelry</p>
                    <p>Shoes</p>
                    <p>Clothing</p>
                </div >
                <div className='underline pt-8 text-md'>
                    <Link to={"/Login"}><p>Sign in</p></Link>
                    <p>My Orders</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}
