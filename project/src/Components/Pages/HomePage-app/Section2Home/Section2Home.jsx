import React from 'react'
import '../Section2Home/Section2Home.css';
import Direcional from '../../../../assets/img/direcional.png'
import BC from '../../../../assets/img/BC.png';
import ND from '../../../../assets/img/ND.png';

import { FaLongArrowAltRight } from "react-icons/fa";
const Section2Home = () => {
  
  return (
    <div className='all-section2home'>
      <div className='section2home-title'><h1>Experiências</h1></div>
        <div className='card-exp-container'>


{/* Card1 Container Nordic Store */}
<div className='card-exp-nd-container'>
<div className='card-exp-nd-firstCard'>
  <div className='card-exp-nd-firstCard-image'>
    <a href="https://nordic-store.onrender.com" target='blank'><img src={ND} alt="nd-logo" /></a>
  </div>

</div>

<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card2-container-NordicStore */}
<div className='card-exp-nd-second'>
  <div className='card-exp-nd-secondCard-title'>
    <h1>Nordic Store </h1>
    <div className='card-exp-nd-secondCard-text'>
      <p className='card-exp-nd-secondCard-firstP' >
Desenvolvi uma aplicação FullStack para um cliente como freelancer.</p>
<p className='card-exp-nd-secondCard-secondP'>
O sistema é um e-commerce de roupas criado inteiramente por mim. Ele integra o front-end com o back-end e usa um banco de dados na nuvem. </p>
<p className='card-exp-nd-secondCard-thirdP'>O projeto ainda está em produção. Acompanhe as atualizações!</p>
    </div>
  </div>
</div>
<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card3-container-Nordic Store */}
<div className='card-exp-nd-third'>
  <div className='card-exp-nd-thirdCard-title1'>
    <h1>Hard Skills</h1>
    <div className='card-exp-nd-thirdCard-text1'>
    <p>- React</p>
        <p>- Node.js + Express</p>
        <p>- MongoDB Atlas </p>
        <p>- APIs RESTful</p>
      
        <div className='card-exp-nd-thirdCard-title2'>
          <h1> Soft Skills</h1>
         <div className='card-exp-nd-thirdCard-text2'>
         <p>- Gestão de Projetos</p>
        <p>- Aprendizado contínuo</p>
        <p>- Adaptabilidade</p>
        <p>- Resolução de Problemas</p>
        <p>- Gestão de tempo</p>
         </div>
        </div>
    </div>
  </div>
</div>
</div>


 {/* Card1-container- Direcional */}
 <div className='card-exp-direcional-container'>
 <div className='card-exp-direcional-firstCard'>
<div className='card-exp-direcional-firstCard-image'>
    <a href="https://www.direcional.com.br" target='blank'> <img src={Direcional} alt="direcional-logo" /></a>
</div>

 </div>

 <div className='arrow'><FaLongArrowAltRight /></div>

{/* Card2-container-Direcional */}
 <div className='card-exp-direcional-second'>
   <div className='card-exp-direcional-secondCard-title'> <h1>Direcional</h1>
   </div>
   <div className='card-exp-direcional-secondCard-text'>
   <p className='card-exp-direcionalsecondCard-firstP'>Trabalhei na Direcional como corretor de imóveis por mais de 1 ano e 3 meses(Agosto 2022 - Janeiro 2024).</p>
<p className='card-exp-direcionalsecondCard-secondP'>Durante esse período, fui responsável pela venda de apartamentos em empreendimentos na planta e prontos para morar, ambos individualmente.</p>

<p className='card-exp-direcionalsecondCard-thirdP'> Meu foco era atender às necessidades dos clientes e oferecer soluções personalizadas, contribuindo para o sucesso de vendas.</p>
   </div>
   
 </div>

 <div className='arrow'><FaLongArrowAltRight /></div>
 {/* Card3-container-Direcional */}
 <div className='card-exp-direcional-third'>
    <div className='card-exp-direcional-thirdCard-title'>
      <h1>Skills </h1>
      <h1>Developed</h1>
      <div className='card-exp-direcional-thirdCard-text'>
      <p>- Tudo é uma venda</p>
        <p>- Comunicação</p>
        <p>- Escuta ativa </p>
        <p>- Trabalho em equipe</p>
        <p>- Gestão de tempo</p>
        <p> - Resolução de problemas</p>
        <p>- Flexibilidade</p>
        <p>- Confiança</p>
        <p>- Planejamento</p>
      </div>
    </div>
 </div>

</div>
        </div>
        
    </div>
  )
}

export default Section2Home