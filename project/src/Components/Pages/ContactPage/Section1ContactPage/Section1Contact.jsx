import React from 'react'
import myImage from '../../../../assets/img/perfil.jpg';
import { FaWhatsapp,FaLinkedin } from "react-icons/fa";
import '../Section1ContactPage/Section1Contact.css'
const Section1Contact = () => {
  return (
    <div className='all-section1-Contact'>
        <div className='galvaoimage-container-Contact'>
         <img src={myImage} alt="My image" />
        </div>
        <div className='about-me-Contact'>
      <h1> Contate-me!</h1> 
      <br />
      <p>- Este formulário foi criado para coletar suas informações e enviá-las ao meu banco de dados pessoal (MongoDB Atlas).</p> 
        <p>Se preferir, você também pode entrar em contato pelo meu WhatsApp pessoal ou LinkedIn.</p>
         <div className='socialMedia-icons-container-Contact'>
         <div className='icons-Contact'>
            <a href="https://wa.me/5561999831708?text=Hello,%20I%20would%20like%20to%20talk%20about%20web%20development!" target='blank'><FaWhatsapp className='zap-Contact'/></a>
            <a href="https://www.linkedin.com/in/luiz-galvão-64057a251" target='blank'><FaLinkedin className='linkedin-Contact'/></a>
            </div>
         </div>
         
        </div>
        
  
        </div>
  )
}

export default Section1Contact