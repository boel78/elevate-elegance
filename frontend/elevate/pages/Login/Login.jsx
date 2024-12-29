import React, { useContext, useEffect, useState } from "react";
import { USERS } from "../../users";
import { MenuContext } from "../../src/menuContext";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import axios from "axios";
import {toast} from "react-hot-toast"

export const Login = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setCurrentUser, noMenus, currentUser } = useContext(MenuContext);
  const [isUserSet, setIsUserSet] = useState(false)
  const navigate = useNavigate();

  const handleLogin = async () => {
    /*let foundUser = false;
    console.log(nameInput + passwordInput);
    USERS.map((user) => {
      if (user.email == nameInput && user.password == passwordInput) {
        setCurrentUser(user);
        foundUser = true;
        alert("Welcome, " + user.firstname);
        window.scroll(0, 0);
        navigate("/");
        noMenus();
      }
    });
    if (!foundUser) {
      alert("Check your login details");
    }*/
   try{
    const checkObject = {
      email: nameInput,
      password: passwordInput
    }
    
    const {data} = await axios.post("http://localhost:8080/api/customer/login", checkObject)
    if(data.error){
      toast.error(data.error)
    }
    else{
      //user login kod. Hämta information och gör ett objekt
      const user = await axios.get(`http://localhost:8080/api/customer/email/${nameInput}`)
      const addresses = user.data.addresses

      const addressesResponse = await axios.get(`http://localhost:8080/api/address/getAll`, {
        params: { addresses: addresses.join(",") }
      })
      user.data.addressObjects = addressesResponse.data

      
      
      setCurrentUser(user.data);
      console.log("USER")
      console.log(user.data)
      setIsUserSet(true)
      toast.success("You have successfully logged in")

    }
   }
   catch(error){
    toast.error(error.response?.data)

   }
  };

  useEffect(() => {
    noMenus();
  }, []);

  useEffect(() => {
    console.log(currentUser)
    if(isUserSet){
      window.scroll(0, 0);
      navigate("/");
      noMenus();
    }
    
  },[currentUser])

  return (
    <Layout>
      <div className="pt-20 flex justify-between px-8">
        <div className="flex flex-col gap-4 w-1/2 sm:w-1/4">
          <h2 className="font-medium text-xl">Login to your account</h2>
          <input
            type="text"
            placeholder="Email"
            className="border-black border-2 border-solid"
            onChange={(e) => setNameInput(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="border-black border-2 border-solid"
            onChange={(e) => setPasswordInput(e.target.value)}
          ></input>
          <TanButton btnText={"Log in"} onClick={handleLogin} />
          <p>Have you forgotten your password?</p>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <h2 className="font-medium text-xl">Need an account?</h2>
          <Link
            to={"/Register"}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <TanButton btnText={"Register"} />
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <p>Continue as guest</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
