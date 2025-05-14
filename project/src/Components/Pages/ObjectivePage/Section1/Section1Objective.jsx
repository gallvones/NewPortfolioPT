import React from 'react'
import '../Section1/Section1Objective.css'
import myImage2 from '../../../../assets/img/perfil2.png'
import Section1Icons from '../../HomePage-app/Section1/Section1Icons/Section1Icons';

const Section1objective = () => {
  return (
    <div className='all-section-objective'>
        <div className='galvaoimage2-container'>
            <img src={myImage2} alt="My image2" />
        </div>
        <div className='objective-text'>
            <h1> Desenvolvedor FullStack</h1>
            <br />
            <p>Especializado em React, Node.js e MongoDB, tenho experiência usando Vite para compilações eficientes, hooks como useState e useContext e react-router-dom para gerenciamento de rotas. </p>
            <br />
               <p>No back-end, trabalho com Express, rotas HTTPS, autenticação JWT, middlewares e testes com Jest/Supertest. Uso Mongoose para manipulação de dados MongoDB e implemento APIs RESTful para integrações internas e de terceiros. </p>
<br />
<p> Familiarizado com Git para controle de versão, Trello para organização, Figma para prototipagem e Postman para testes de API. </p>
<br />
<p>Procuro um cargo de Desenvolvedor FullStack.</p>
            <br />
            <div className='SocialMedia-icons'>
                <Section1Icons/>
            </div>
  
            
        </div>
        
        
        
        </div>
  )
}

export default Section1objective