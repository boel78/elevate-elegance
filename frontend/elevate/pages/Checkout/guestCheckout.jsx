import React, { useContext } from 'react'
import { BlueButton } from '../../components/blueButton'
import { ArrowUp } from '@phosphor-icons/react'
import { MenuContext } from '../../src/menuContext'
import { Link, useNavigate } from 'react-router-dom'

export const GuestCheckout = () => {

    const {setFilledOutOrderDetails} = useContext(MenuContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        //VALIDERING KRÄVS
        e.preventDefault()
        const formData = new FormData(e.target)
        const orderDetails = Object.fromEntries(formData)
        if(orderDetails.address2 === ""){
            delete orderDetails.address2
        }
        setFilledOutOrderDetails(orderDetails)
        navigate("/checkout")
    }

    const inputStyle = 'rounded-lg shadow-md border border-gray-300 block w-full p-2 focus:outline-none focus:ring-2 focus:ring-darkBlue focus:border-darkBlue text-sm font-medium'
  return (
    <div className='flex justify-center items-center py-20'>
        <form className='bg-lightTan border-2 border-solid border-darkBlue shadow-lg rounded-lg p-10 flex flex-col items-center gap-5' onSubmit={handleSubmit}>
            <legend className='text-center text-xl font-medium pb-5'>Please enter the delivery details</legend>
            <fieldset className='grid grid-cols-2 items-start gap-3 w-full'>
                <p>
                    <input type='text' placeholder='First Name' name='firstname' className={inputStyle} required/>
                </p>
                <p>
                    <input type='text' placeholder='Last Name' name='lastname' className={inputStyle} required/>
                </p>
                <p>
                    <input type='text' placeholder='Address' name='address' className={inputStyle} required/>
                </p>
                <p className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Address 2"
              name="address2"
              id="address2"
              className={inputStyle}
            />
            <small className="text-sm italic flex items-center text-gray-500"><ArrowUp/>Optional</small>
          </p>
                <p>
                    <input type='text' placeholder='Zipcode' name='zipcode' className={inputStyle} required/>
                </p>
                <p>
                    <input type='text' placeholder='Town' name='town' className={inputStyle} required/>
                </p>
                <p>
                    <input type='email' placeholder='Email' name='email' className={inputStyle} required/>
                </p>
                <p>
                    <input type='text' placeholder='Phone' name='phone' className={inputStyle} required/>
                </p>
                <p className='col-span-2'>
                    <label htmlFor='cookie' className='underline'>I have read and understand the privacy and cookie policy</label>
                    <input type='checkbox' id='cookie'  required/>
                </p>

                
            </fieldset>
            <BlueButton btnText={"Place order"}/>
        </form>
    </div>
  )
}
