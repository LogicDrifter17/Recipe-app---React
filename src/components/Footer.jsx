import React from 'react'
import FooterImg from '../assets/footerimg.png'
import { FaInstagramSquare } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io5"
import { ImFacebook2 } from "react-icons/im"
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div id="Footer">
      <img src={FooterImg}/> 
       <p>Follow us on</p>
      <div id="Follow_Us">
       
        <FaInstagramSquare />
        <IoLogoWhatsapp/>
        <ImFacebook2 />
        <FaXTwitter />
      </div>
         
      </div>
  )
}

export default Footer