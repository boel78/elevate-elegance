import React, { useContext, useState } from "react";
import { USERS } from "../../users";
import { MenuContext } from "../../src/menuContext";

export const Login = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setCurrentUser, currentUser } = useContext(MenuContext);

  const handleLogin = () => {
    USERS.map((user) => {
      if (user.username == nameInput) {
        if (user.password == passwordInput) {
          setCurrentUser(user);
          alert("Welcome, " + user.username);
        }
      }
      
    });
    if (currentUser === null) {
        alert("Check your login details");
      }
  };
  return (
    <div className="pt-20">
      <div className="flex flex-col">
        <h2>Login to your account</h2>
        <input
          type="text"
          className="border-black border-2 border-solid"
          onChange={(e) => setNameInput(e.target.value)}
        ></input>
        <input
          type="password"
          className="border-black border-2 border-solid"
          onChange={(e) => setPasswordInput(e.target.value)}
        ></input>
        <button onClick={handleLogin}>Log in</button>
        <p>Have you forgotten your password?</p>
      </div>
      <div>
        <h2>Need an account?</h2>
        <button>Register</button>
        <p>Continue as guest</p>
      </div>
    </div>
  );
};
