import { useState } from "react";
import { BrowserRouter,Link,Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import Fail from "./Fail";
import Sucess from "./Sucess";

 /*const components={
        userSucess:UserSucess
    }*/

function Login() {
   
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  //const selectUser=components[props.user];
  function handleChange() {
    //validation
    if (userName == "Greeshma" && password=="password" && email=="greeshma@mail.com") {
      //navigate to another page
     navigate('/Sucess')
    } else {
     navigate('/Fail')
    }
  }

  return (
    //input boxes and button
    <div>
        
      User Name:
      <input
        type="text"
        name="userName"
        className="inputValues"
        id="user"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      Password:
      <input
        type="text"
        name="password"
        className="inputValues"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      Email:
      <input
        type="text"
        name="email"
        className="inputValues"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={handleChange}>
        submit
      </button>
     
    </div>
  );
}

export default Login;
