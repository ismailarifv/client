import React from "react";
import { Routes,Route } from "react-router-dom";

import "./App.css";
//pages
import Home from "./pages/Home"
import Detail from "./pages/Detail";

function App() {
  return (
      <div>
        
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
    
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/char/:id" element={<Detail />}></Route>
        </Routes>
      </div>
    
  );
}




export default App;
