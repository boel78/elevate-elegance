import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuContext } from '../src/menuContext'

export const Sidemenu = () => {

    const {currentUser, setCurrentUser} = useContext(MenuContext)
    const navigate = useNavigate()

   

    const handleLogout = () => {
        setCurrentUser(null)
        navigate("/")
    }

  return (
    <div className='fixed right-0 top-12 w-2/3 sm:w-1/4 bg-white h-1/2 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex flex-col'>
            <div className='self-end pt-3 pr-3'>
                
            </div>
            <div className='pl-12'>
                <div className='pt-14 text-xl'>
                    <Link to={"/cataloge"}><p>New in</p></Link>
                    <Link to='/cataloge/Bags'><p>Handbags</p></Link>
                    <Link to='/cataloge/Jewellery'><p>Jewellery</p></Link>
                    <Link to='/cataloge/Shoes'><p>Shoes</p></Link>
                    <Link to='/cataloge/Clothing'><p>Clothing</p></Link>
                </div >
                <div className='underline pt-8 text-md'>
                    {currentUser == null ? 
                    <Link to={"/Login"}><p>Sign in</p></Link>
                :
                    <p onClick={handleLogout} className='cursor-pointer'>Sign out</p>}
                    <Link to={"/Orders"}><p>My Orders</p></Link>
                    <Link to={"/#footer"} onClick={() => {
                window.scroll(0, 20000);
              }}><p>Contact Us</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
