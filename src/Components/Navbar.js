import React, {useState} from 'react'
import logo from '../Assets/47873-e91e63.svg'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import nav_style from '../Styles/Navbar.module.css'
// import Navbar_style from '../Styles/Navbar.module.css'

function Navbar() {
    const [openLinks, setopenLinks] = useState(false)

    const toggleNavBar = () => {
        setopenLinks(!openLinks)

    }

    return (
        <div className={nav_style.navbar}>
            <div className={nav_style.left_side} id={nav_style[openLinks ? 'open' : 'close']}>
                <img src={logo} />
                <div className={nav_style.hiddenLinks}>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Contact'>Contact</Link> 

                </div>

            </div>
            
            <div className={nav_style.right_side}>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link> 

                <button onClick={toggleNavBar}>
                    
                    <MenuIcon />

                </button>

                
               

            </div>


        </div>
    )
}

export default Navbar
