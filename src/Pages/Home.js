import React from 'react'
import Home_style from '../Styles/Home.module.css'

import Button from '../UI Component/Button'
import bg1 from '../Assets/Menu_image/bg.jpg'

function Home() {
    return (
        <div className={Home_style.home} style={{ backgroundImage: `url(${bg1})` }}>
            <div className={Home_style.header_container} >
                <h1>Welcome To OLAKs Motor</h1>
                <p>lorbnmn</p>
                <Button/>

            </div>

        </div>
    ) 
}

export default Home
