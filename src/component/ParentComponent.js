import { useState } from "react";

import React from "react";
import ChildComponent from "./ChildComponent";
import OptionComponent from "./OptionComponent";
import "./parent.css";


function ParentComponent() {
  const [data, setData] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState();
  const [address, setAddress] = useState('');
  const [hobbies, setHobbies] = useState([]);
  /*const handleChange = (e) => {
    setHobbies(Array.isArray(e) ? e.map(x => x.value) : []);
  }*/


  const parentToChild = () => {
    setData("ALl Values Submitted");
     };

 const handleChange = (e) =>{
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
      setHobbies(values);
  }
  return (
      <div>
    
      {/* <ChildComponent parentToChild={firstName} /> */}
      {/* <ChildComponent parentToChild={lastName} />
      <ChildComponent parentToChild={age} />
      <ChildComponent parentToChild={address} />
      <OptionComponent parentToChild={hobbies} /> */}
            <ChildComponent parentToChild={data} />

      <div>
         {lastName}<br></br>
         {firstName}<br></br>
         {age}<br></br>
         {address}<br></br>
         {hobbies.join()}<br></br>
      </div>
      <div id="main">
      First Name:
      <input
        type="text"
        name="firstName"
        className="inputValues"
        id="first"
        onChange={(e) => setFirstName(e.target.value)}
      /><br></br><br></br>
      
      Last Name:
      <input
        type="text"
        name="lastName"
        className="inputValues"
        id="last"
        onChange={(e) => setLastName(e.target.value)}
      /><br></br><br></br>
      Age:{" "}
      <input
        type="number"
        name="age"
        id="age"
        onChange={(e) => setAge(e.target.value)}
      /><br></br><br></br>
      Address:
      <textarea
        type="textarea"
        name="address"
        id="address"
        onChange={(e) => setAddress(e.target.value)}
      /><br></br><br></br>
      
      Hobbies:<label>Choose a hobby:</label>
      <select multiple="true" onChange ={(e) => handleChange(e)}>
        <option value="reading">Reading</option>
        <option value="dancing">Dancing</option>
        <option value="walking">walking</option>
      </select>
      <button type="button"  onClick={() => parentToChild()}>
          submit
        </button>
      </div>
      <div>
        
      </div>
    
    </div>
  );
}

export default ParentComponent;
