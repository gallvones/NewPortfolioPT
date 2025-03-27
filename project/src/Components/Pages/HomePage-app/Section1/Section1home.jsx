import React from 'react'
import '../Section1/Section1home.css';
import myImage from '../../../../assets/img/perfil.jpg';
import Section1Icons from './Section1Icons/Section1Icons'

const Section1home = () => {
  return (
    <div className='all-section-home'>
        <div className='galvaoimage-container'>
         <img src={myImage} alt="My image" />
        </div>
        <div className='about-me '>
      <h1> Sobre Mim</h1> 
      <br />
      <div className='about-me-text '><p> 
      Olá, Mundo! Meu nome é Luiz Galvão, sou um Desenvolvedor Fullstack com graduação em Análise e Desenvolvimento de Sistemas. Com dois anos de experiência, desenvolvi sistemas completos e contribuí para projetos inovadores. Minha expertise inclui React.js, Node.js, MongoDB e soluções em Cloud.
        </p>
        </div>
         <div className='SocialMedia-icons-homepage'>
         <Section1Icons/>
         </div>
         
        </div>
        
  
        </div>
  )
}

export default Section1home