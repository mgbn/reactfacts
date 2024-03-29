import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Navbar'

import './App.css';
import Main from "./Main";


function App(){
    return(
        <div className="container">
            <Navbar />
            <Main />
        </div>     
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)