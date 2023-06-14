import "./Chip.css"
import { useState } from "react"

/**
 * 
 * Make changes only in parents 
 */



  


export function Chip({ label = "", isActive = false, onclick}) {
  

  let buttonClassName 
  if (isActive == false){   
    buttonClassName = 'chip'
  }
  else if(isActive == true){
    console.log(('comuter was here'))
    buttonClassName = 'chip active'
  }
 
  console.log(buttonClassName);
  console.log(label);
  // console.log(onclick);

  return (
    
    
    <button className={buttonClassName} onClick= {() => {onclick(label); }} >
      <p className="label">{ label }</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
