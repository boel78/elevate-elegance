import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='fixed right-0 top-12 w-1/4 bg-white h-5/6 border-l-2 border-b-2 border-black font-inter'>
        <Link to='/Login'><h3>Sign in</h3></Link>
        <Link to='/Orders'><h3>Orders</h3></Link>
        <Link to='/Settings'><h3>Account settings</h3></Link>
        <Link to='/SavedItems'><h3>Saved items</h3></Link>
    </div>
  )
}
