
import { useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
//import './App.css';
import Calculator from './component/Calculator';
import Login from './component/Login';
import Sucess from './component/Sucess';
import Fail from "./component/Fail";


//import ParentComponent from './component/ParentComponent';

function App() {
  const[user,changeUser]=useState('userSucess');
  return (
    
    <div className="App">
    <h1></h1>  
    {//<ParentComponent></ParentComponent>
    }
    

    
    
    <BrowserRouter>
    
  
{
 /*   <nav>
    <Link to="/Sucess">Sucess Page</Link>
    <Link to="/Fail">Sucess Page</Link>
    </nav>*/
}
      <Routes>
      <Route  path="/" element={<Login/>}/>
        <Route  path="Sucess" element={<Sucess/>}/>
        <Route  path="Fail" element={<Fail/>}/>
      </Routes>
      </BrowserRouter>
      

    

    </div>
  );
}

export default App;