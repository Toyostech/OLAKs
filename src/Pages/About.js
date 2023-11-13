import React from 'react'
import About_style from '../Styles/About.module.css'
import About_bg1 from "../Assets/Menu_image/About_bg.jpg"

function About() {
  return (
      <div className={About_style.about}>
          <div className={About_style.aboutTop} style={{ backgroundImage: `url(${About_bg1})` }} >
            
          </div>
          <div className={About_style.aboutBottom}>
              <h1> ABOUT US</h1>
              <p>Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function.

                  The energy in food is measured in units called calories. Age, sex, weight, height, and level of activity determine the number of calories a person needs each day. Depending on age, sex, and activity level, the recommended daily caloric intake for a child aged 11 to 14 can range anywhere from 1,600 to 2,600 calories per day, with sedentary girls needing the fewest calories and active boys needing the most. For adults, this can range from 1,800 to about 3,000.</p>
          </div>
      
    </div>
  )
}

export default About
