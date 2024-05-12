import React from 'react'
import "./herosection.css"
import Button from "../../share/header/button/button"
const herosection = () => {
  return (
    <div className='hero_section'>
      <div>
        <p><strong>Finding the perfect home has never been this easy!</strong></p>
        <span>Eliminate stressful house searches. We link you with the Lagos’s finest and most affordable residences -<strong>Zero agent fees, middle men payments & hassles.</strong></span>
      </div>
      <div className='hero_section_button'>
        <Button btnName={"Download our app"}/>
        <Button btnName={"Learn More"} outline/>
      </div>
    </div>
  )
}

export default herosection