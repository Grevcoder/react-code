//import react and use state
import { useState } from "react";
import ReactDOM from "react-dom";
//function for calculator
function CalculatorWithHook()
{
    //set use state
    const[firstNumber,setFirstNumber]=useState('');
    const[secondNumber,setSecondNumber]=useState('');
   
    return(
        <div>
           <h1> Calculator</h1>
           <div>
          <label>First Number</label>
          <input type="text" name="firstNumber" id="first" onChange={e =>setFirstNumber(e.target.value)}/>    
         <button  type="button" id="addButton" onClick={()=>sum()}>add</button>   
         <button  type="button" id="subButton" onClick={()=>subtraction()}>sub</button>           
        </div>
        
        <div>
            <br></br>
        <label>Second Number</label>
            <input type="text" name="secondNumber" id="second" onChange={e =>setSecondNumber(e.target.value)}/>
            <button  type="button" id="addButton" onClick={()=>multiplication()}>multi</button>   
         <button  type="button" id="subButton" onClick={()=>division()}>div</button>    
         </div>          
       <div>
           <br></br>
       <label>Result</label>
           <input type="text" id="result"></input></div>
        </div>
    )
//onclick function
    function sum()
    {
        var add=Number(firstNumber)+Number(secondNumber);
        document.getElementById("result").value=add;
        
    }

  function subtraction()
  {
    var sub=Number(firstNumber)-Number(secondNumber);
    document.getElementById("result").value=sub;
    
  }

  function multiplication()
  {
    var multiply=Number(firstNumber)*Number(secondNumber);
    document.getElementById("result").value=multiply;
    
  }

  function division()
  {
    var div=Number(firstNumber)/Number(secondNumber);
    document.getElementById("result").value=div;
    
  }
}

/*return and html
in html two text box fot numbers and one text box for result
button for add,sub,multi,delete and give onclick function
 */

/*retrive the values from text box and calculate display result in text box*/
//default extract and import that into index.js
export default CalculatorWithHook;


