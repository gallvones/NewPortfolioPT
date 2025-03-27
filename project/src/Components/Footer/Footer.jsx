import React from 'react'
import '../Footer/Footer.css'
import { FaRegCopyright,FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> "O caminho que percorremos é tão importante quanto o destino que alcançamos, porque é lá que aprendemos, crescemos e nos transformamos." </p>
       <p>Luiz Galvão <FaRegCopyright className='copyright'/></p> 
        </div>
  )
}

export default Footer