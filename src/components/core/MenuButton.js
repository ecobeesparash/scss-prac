import React from "react";
import "./style.scss"

function Menubutton(props) {
  return (
    <>
      <a href="1" className="a-menuLinks__link color-text-secondary d-flex items-center mb-2">
        {/* <li> */}
        {props.icon}
        <p className="pl-1">{props.title}</p>
    
        {/* <span className="ml-1 d-flex items-center justify-center fs-tiny w-5">{props.notify}</span> */}
        {/* </li> */}
      </a>
    </>
  );
}
export default Menubutton;