import React from 'react'
import {Link} from 'react-router-dom'
import footer_style from '../Styles/Footer.module.css'
import IntagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'



function Footer() {
    return (
        <div className={footer_style.footer}>
            <div className={footer_style.socialMedia}>
                <a href='https://web.facebook.com/salami.toyosi.5'><IntagramIcon /></a>
                
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon/>

            </div>
            <p>&copy; 2023 website</p>
        </div>
    )
}

export default Footer
