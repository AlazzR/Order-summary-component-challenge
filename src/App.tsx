import React from 'react';
import Order from './Order';
import "./App.css";


const App: React.FC = ()=>{
  const pattern: string = "pattern-background-desktop.svg";
  return(
    <div className="app">
      <img src={`./images/${pattern}`}></img>
      <Order />
    </div>
  )

}

export default App;
