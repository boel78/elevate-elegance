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
  const { setCurrentUser, noMenus } = useContext(MenuContext);
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
      toast.success("You have successfully logged in")
      const user = await (await axios.get(`http://localhost:8080/api/customer/email/${nameInput}`)).data
      setCurrentUser(user);
      window.scroll(0, 0);
      navigate("/");
      noMenus();
    }
   }
   catch(error){
    toast.error(error.response?.data)
   }
  };

  useEffect(() => {
    noMenus();
  }, []);

  return (
    <Layout>
      <div className="pt-20 flex justify-between px-8">
        <div className="flex flex-col gap-4">
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
