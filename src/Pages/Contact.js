import React from 'react'
import Contact_style from '../Styles/Contact.module.css'
import Contact_bg from "../Assets/Menu_image/Contact_bg.jpg"

function Contact() {
    return (
        <div className={Contact_style.contact}>
            <div className={Contact_style.liftSide} style={{ backgroundImage: `url(${Contact_bg})` }}>
        

            </div>

            <div className={Contact_style.rightSide}>
                <h1>Contact US</h1>
                <form id={Contact_style.Contact_Form} method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' placeholder='Enter Full name..' type='text' />
                    <label htmlFor='email'>Email</label>
                    <input name='email' placeholder='Enter Email' type='email' />
                    <label htmlFor='message'>Message</label>
                    <textarea rows='6' placeholder='enter massage..' name='message' required></textarea>
                    <button type='submit'>Seed message..</button>
                    


                </form>
            </div>
 

        </div>
    )
}

export default Contact
