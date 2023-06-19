//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let seconds = 123456;
let digit1 = 0;
let digit2 = 0;
let digit3 =0;
let digit4 =0;
let digit5 =0;
let digit6 = 0;

// CUENTA ATRÁS

setInterval(function () {
    seconds--
    digit1 = Math.trunc((seconds / 1) % 10);
    digit2 = Math.trunc((seconds / 10) % 10);
    digit3 = Math.trunc((seconds / 100) % 10);
    digit4 = Math.trunc((seconds / 1000) % 10);
    digit5 = Math.trunc((seconds / 10000) % 10);
    digit6 = Math.trunc((seconds / 100000) % 10);
    
    ReactDOM.render(<Home seconds={seconds} digit1={digit1} digit2={digit2} digit3={digit3} digit4={digit4} digit5={digit5} digit6={digit6} />, document.querySelector("#app"));

},1000)


