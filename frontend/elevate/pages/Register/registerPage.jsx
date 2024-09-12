import React, { useState } from "react";
import { BlueButton } from "../../components/blueButton";
import { USERS } from "../../users";

export const RegisterPage = () => {

    const [formError, setFormError] = useState({})

    const handleSubmit = (e) => {
        const errors = {}
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData)

        if(newUser.password !== newUser.cnfpassword){
            errors.password = "Password doesnt match"
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser.email)){
            errors.email = "Check your email input"
        }
        else {USERS.map((user) => {
            if(user.email === newUser.email){
                errors.email = "Email already exists"
            }
        })}

        
        
        if(Object.keys(errors).length > 0){
            setFormError(errors)
            console.log(formError)
            return
        }
        delete newUser.cnfpassword
        newUser.likedProducts = []
        //ERSÄTTA MED POST LOGIK SENARE
        console.log(newUser)

        setFormError({})
    }

  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <form className="bg-lightTan border-2 border-solid border-darkBlue shadow-lg rounded-lg p-10 flex flex-col items-center gap-5" onSubmit={handleSubmit}> 
          <fieldset className="flex flex-col items-start gap-3">
            <legend className="text-center text-xl font-medium pb-5">Register</legend>
            <p>
              <label htmlFor="email">Email: </label>
              <input type="text" id="email" name="email" required />
              {formError.email && <p className="text-red-700">{formError.email}</p>}
            </p>

            <p>
              <label htmlFor="psw">Password: </label>
              <input type="password" id="psw" name="password" required />
            </p>

            <div>
              <label htmlFor="cnfmPsw">Confirm password: </label>
              <input type="password" id="cnfmPsw" name="cnfpassword" required />
              {formError.password && <p className="text-red-700">{formError.password}</p>}
            </div>

            <p>
              <label htmlFor="gender">Gender: </label>
              <input type="text" id="gender" name="gender" />
            </p>

            <p>
              <label htmlFor="firstName">First name: </label>
              <input type="text" id="firstName" name="firstName" required />
            </p>

            <p>
              <label htmlFor="lastName">Last name: </label>
              <input type="text" id="lastName" name="lastName" required />
            </p>

            <p>
              <label htmlFor="dateOfBirth">Date of birth: </label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" required />
            </p>

            <p>
              <label htmlFor="zipCode">Zip code </label>
              <input type="text" id="zipCode" name="zipCode" required />
            </p>

            <p>
              <label htmlFor="phone">Phone number: </label>
              <input type="text" id="phone" name="phone" required />
            </p>

          </fieldset>
          <BlueButton btnText={"Register"} className='self-center'/>

        </form>
      </div>
    </div>
  );
};
