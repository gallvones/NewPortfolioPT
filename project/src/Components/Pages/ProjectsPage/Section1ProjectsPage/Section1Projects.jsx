import React from 'react'
import '../Section1ProjectsPage/Section1Projects.css'
import IMGperfil from '../../../../assets/img/perfil.jpg'
import NDLOGO from '../../../../assets/img/NDLOGO.png'
import Linkedin from '../../../../assets/img/linkedin.png';
import Soon from '../../../../assets/img/comingsoon.jpeg'
const Section1Projects = () => {
  return (
    <div className='all-Projects-section1'>
        <div className='Projects-section1-container'>
            <div className='title-section1'>
                <h1> Projetos</h1>
            </div>
            <div className='section1-text1'>
                <p> - Aqui, você pode conferir alguns projetos que desenvolvi por completo.</p>
            </div>
            <div className='firstlineCards-section1'>

                {/* FIrstlineCard1 */}
                <div className='firstline-firstCard-section1'>
                  
                  <a href="https://nordic-store.onrender.com"> <div className='firstline-firstCard-img-container-section1'>  <img src= {NDLOGO} alt="Nordic Store Img" /> </div></a>
                   <div className='firstline-firstCard-title'><h2> Nordic Store </h2> </div>
                </div>

                {/* FirstlineCard2 */}
                <div className='firstline-secondCard-section1'>
                    <a href="https://galvao-dev-portfolio-pt.onrender.com"> <div className='firstline-secondCard-img-container-section1'><img src={IMGperfil} alt="My image" /></div></a>
                    <div className='firstline-secondCard-title'><h2> Meu Portfolio</h2> </div>
                </div>


                 {/* ThirdlineCard3 */}

                <div className='firstline-thirdCard-section1'>
                    <a href=""> <div className='firstline-thirdCard-img-container-section1'><img src= {Linkedin}alt="#30 days project" /> </div></a>
                    <div className='firstline-thirdCard-title'><h2> Posts no Linkedin</h2> </div>
                </div>
            </div>

            <div className='secondlineCards-section1'>
        {/* SecondlineCard-Card1 */}
    <div className='secondline-firstCard-section1'>
      <a href=""> <div className='secondline-firstCard-img-container-section1'>
        <img src={Soon} alt="Random" /></div></a>
        <div className='secondline-firstCard-title'>
            <h2> Em desenvolvimento!</h2>
        </div>

    </div>

  {/* Secondline-Card2 */}
  <div className='secondline-secondCard-section1'>
      <a href=""> <div className='secondline-secondCard-img-container-section1'>
        <img src={Soon} alt="Random" /></div></a>
        <div className='secondline-secondCard-title'>
            <h2> Em desenvolvimento!</h2>
        </div>

    </div>

    {/* SecondLine - Card3 */}

    




            </div>
        </div>

    </div>
  )
}

export default Section1Projects