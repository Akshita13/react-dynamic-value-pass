import React from "react";
export default function RenderComp(props) {
  console.log(props)
  

    // props.item.appointment.forEach((item)=> (<p>{item.name}</p>)) 
    
    
return (
  <>
  <p>{props.item.name}</p>
  </>
)

}