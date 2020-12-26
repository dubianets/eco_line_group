import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  return (
    <div>
      <div>
          <Header/>
          </div>
       <div>
           <Body/>
       </div>
    </div>
  );
}

export default App;
