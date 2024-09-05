import React from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'

export const Search = () => {
  return (
    <div className='flex flex-col fixed right-0 top-12 w-1/4 bg-white h-2/6 border-l-2 border-b-2 border-black font-inter'>
        <div className='flex flex-col'>
            <h3>What are you searching for?</h3>
            <input type='text' className='border-solid border-b-2 border-black'></input>
        </div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h3>Trending searches</h3>
                    <ul>
                        <li className='flex justify-center content-center'>
                            <MagnifyingGlass size='15'/>
                            <p>Bags</p>
                        </li>
                        <li className='flex justify-center content-center'>
                            <MagnifyingGlass size='15'/>
                            <p>Bags</p>
                        </li>
                        <li className='flex justify-center content-center'>
                            <MagnifyingGlass size='15'/>
                            <p>Bags</p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3>Whats new</h3>
                    <a><p>Clothing</p></a>
                    <a><p>Accesories</p></a>
                </div>
        </div>
    </div>
  )
}
