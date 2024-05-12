import React from 'react'
import './button.css';

const Button = ({btnName, outline}) =>{
  return (
    <button className={`${outline ? "outline" : "btn"}`}>{btnName}</button>
  )
}
export default Button