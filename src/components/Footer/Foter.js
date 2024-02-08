import React from 'react'
import "./Foter.css"
import { Container } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
function Foter() {
  return (
    <div className='footer'>
      <h1>Sundi</h1>
      <Container className='foter1'>
        <p>About</p>
        <p>Prpject</p>
        <p>Service</p>
      </Container>
      <Container className='emojusa ffs'>
            <FaFacebookF className='emojua fas'  />
            <RiInstagramFill className='emojua in' />
            <IoLogoWhatsapp className='emojua wh' />
            <FaTwitter className='emojua tw' />
      </Container>
      <p className='my-3'>All rights reserved</p>
    </div>
  )
}

export default Foter
