import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./Component/Page";
import Cart from "./Component/Cart";
import Card from "./Component/Card";
import Foot from "./Component/Foot";




function App() {

  const [count,setCount]=useState(0);
  
  return (
    <div className="App">
    
        <Page/>
        <Cart 
        count={count}
        setCount={setCount}
        />
        <Card
        count={count}
        setCount={setCount}
        />
        <Foot/>
        
        
    </div>
  );
}

export default App;








