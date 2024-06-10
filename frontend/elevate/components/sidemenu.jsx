import React from 'react'

export const Sidemenu = () => {
  return (
    <div className='fixed right-0 top-0 w-1/4 bg-white h-5/6 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex flex-col'>
            <div className='self-end pt-3 pr-3'>
                <button className='bg-black text-white rounded-full w-7 text-xl'>X</button>
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
                    <p>Sign in</p>
                    <p>My Orders</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}
