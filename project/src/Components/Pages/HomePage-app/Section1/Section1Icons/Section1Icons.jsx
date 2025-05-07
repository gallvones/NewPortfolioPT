import React from 'react'
import '../Section1Icons/Section1Icons.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube,IoIosCloudDownload } from "react-icons/io";
import CV from '../../../../../assets/Docs/CV-BR1.pdf';
const Section1Icons = () => {
  return (
    <div className='all-container'>
      <div className='curriculo-allContainer'>
      <a href={CV} target='blank'><button className='viewCV' > <p>Ver CV</p></button></a>
        <a href={CV} download="CV-Luiz-Galvao.pdf" ><button className='downloadCV'> <IoIosCloudDownload className='download-icon'/>
</button></a>
          
         </div>
    <div className='icons'>
    <a href="https://github.com/gallvones" target='blank'><FaGithub  className='githubHome'/></a>
    <a href='https://www.linkedin.com/in/luiz-galvão-64057a251' target='blank'> <FaLinkedin  className='linkedin' /></a>
        <a href="https://www.youtube.com/channel/UCavP3eMFC-tsw2UV4Kh_SuA" target='blank'><IoLogoYoutube className='youtube' /></a>
        </div>
        
        </div>
  )
}

export default Section1Icons