import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuContext } from '../src/menuContext'

export const Profile = () => {

  const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(MenuContext)

    const logout = () =>{
        setCurrentUser(null)
        alert("You logged out")
        navigate("/")
    }

  return (
    <div className='fixed right-0 top-12 w-1/4 bg-white h-5/6 border-l-2 border-b-2 border-black font-inter'>
        { currentUser == null && <Link to='/Login'><h3>Sign in</h3></Link>}
        <Link to='/Orders'><h3>Orders</h3></Link>
        <Link to='/Settings'><h3>Account settings</h3></Link>
        <Link to='/SavedItems'><h3>Saved items</h3></Link>
        { currentUser != null && <button onClick={logout}><h3>Logout</h3></button>}
    </div>
  )
}
