import React from 'react'
import Menu_style from "../Styles/Menu.module.css"
import { MenuList } from '../Helpers/MenuList'
import MenuItem_d from '../Components/MenuItem_d'


    
function Menu() {
  return (
      <div className={Menu_style.menu}>
          <h1 className={Menu_style.menuTitle}>Our Menu</h1>
          <div className={Menu_style.menuList}>
              {MenuList.map((menuItem, key) => {
                  return <MenuItem_d
                      key={key}
                      image={menuItem.image}
                      name={menuItem.name}
                      price={menuItem.price} 
                    />
                  
              })}
              
          </div>
      
    </div>
  )
}

export default Menu
