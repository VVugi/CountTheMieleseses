import React from "react"
import MielesesePNG from "./../../public/mielesese.png"

export default function Mielesese(props)
{
   const top = -50 * props.id + Math.floor(Math.random() * 320) + 50 + "px";
   const left = (Math.floor(Math.random() * -500) - 50) + "px";

   const movement = "movement " + ((Math.random() * 5) + 2) + 's  linear 1';

   return (
      <div style={{animation: movement}} className="mielesese-container">
         <img style={{top: top, left: left}} className="mielesese" src={MielesesePNG}></img>
      </div>
   );
}