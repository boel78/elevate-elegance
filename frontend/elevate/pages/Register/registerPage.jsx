import React, { useState } from "react";
import { BlueButton } from "../../components/blueButton";
import { USERS } from "../../users";
import axios from "axios";
import { toast } from "react-hot-toast";

export const RegisterPage = () => {

    const [formError, setFormError] = useState({})

    const handleSubmit = async (e) => {
        const errors = {}
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData)

        if(newUser.password !== newUser.cnfpassword){
            errors.password = "Password doesnt match"
        }
        /*if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser.email)){
            errors.email = "Check your email input"
        }
        else {USERS.map((user) => {
            if(user.email === newUser.email){
                errors.email = "Email already exists"
            }
        })}*/

        
        
        if(Object.keys(errors).length > 0){
            setFormError(errors)
            console.log(formError)
            return
        }
        delete newUser.cnfpassword
        newUser.likedProducts = []
        newUser.addresses = []
        newUser.zipCode = ""
        //ERSÄTTA MED POST LOGIK SENARE
        console.log(newUser)
        try{
          const {data} = await axios.post('http://localhost:8080/api/customer', newUser)
          if(data.error){
            toast.error(data.error)
          }
          else {
            toast.success("Registration successful!");
          }
        } catch(error){
          toast.error(error.response?.data);
        }
        
        setFormError({})
    }

  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <form className="bg-lightTan border-2 border-solid border-darkBlue shadow-lg rounded-lg p-10 flex flex-col items-center gap-5" onSubmit={handleSubmit}> 
          <fieldset className="flex flex-col items-start gap-3 w-2/3">
            <legend className="text-center text-xl font-medium pb-5">Register</legend>
            <p>
              <label htmlFor="email">Email: </label>
              <input type="text" id="email" name="email" required className="focus:outline-darkBlue"/>
              {formError.email && <p className="text-red-700">{formError.email}</p>}
            </p>

            <p>
              <label htmlFor="psw">Password: </label>
              <input type="password" id="psw" name="password" required className="focus:outline-darkBlue"/>
            </p>

            <div>
              <label htmlFor="cnfmPsw">Confirm password: </label>
              <input type="password" id="cnfmPsw" name="cnfpassword" required className="focus:outline-darkBlue"/>
              {formError.password && <p className="text-red-700">{formError.password}</p>}
            </div>

            <p>
              <label htmlFor="gender">Gender: </label>
              <input type="text" id="gender" name="gender" className="focus:outline-darkBlue"/>
            </p>

            <p>
              <label htmlFor="firstName">First name: </label>
              <input type="text" id="firstName" name="firstName" required className="focus:outline-darkBlue"/>
            </p>

            <p>
              <label htmlFor="lastName">Last name: </label>
              <input type="text" id="lastName" name="lastName" required className="focus:outline-darkBlue"/>
            </p>

            <p>
              <label htmlFor="dateOfBirth">Date of birth: </label>
              <input type="date" id="dateOfBirth" name="dateofbirth" required className="focus:outline-darkBlue"/>
            </p>

            

            <p>
              <label htmlFor="phone">Phone number: </label>
              <input type="text" id="phone" name="phone" required className="focus:outline-darkBlue"/>
            </p>

          </fieldset>
          <BlueButton btnText={"Register"} className='self-center'/>

        </form>
      </div>
    </div>
  );
};
