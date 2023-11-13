import React from 'react'
import Menu_style from "../Styles/Menu.module.css"

function MenuItem_d(props) {
  return (
    <div className={Menu_style.menuItem}>
      <div style={{ backgroundImage: `url(${props.image})` }}>
        
        
        
      </div>
      <h1>{props.name}</h1> 
      <p>${props.price}</p> 

    </div>
  )
}

export default MenuItem_d
