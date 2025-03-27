import React from 'react'
import '../Section2ProjectsPage/Section2Projects.css'
import MYimage from '../../../../assets/img/perfil.jpg'
const Section2Projects = () => {
  return (
    <div className='all-Projects-section2'>
        <div className='Projects-section2-container'>
            <div className='title-section2'>
                <h1>More Projects</h1>
                </div>
                <div className='section2-text1'>
                    <p> - Here, you can check out the projects I developed with others company/devs.</p>
                </div>
                <div className='firstlineCards-section2'>

                    {/* FirstlineCard1 */}
                    <div className='firstline-firstCard-section2'>
                        <div className='firstline-firstCard-img-container-section2'>
                            <img src={MYimage} alt="" />
                        </div>
                        <div className='firstline-firstCard-title-section2'> 
                        <h2>Random Random</h2>
                        </div>
                        <div className='firstline-firstCard-text1-section2'><p> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum id at dolorem saepe in accusantium ut voluptatum modi officia architecto sed voluptas magni nulla laboriosam porro, inventore aut quos.</p>
                        </div>
                    </div>

                    {/* Firstline Card2 */}
                   <div className='firstline-secondCard-section2'>
                         <div className='firstline-secondCard-img-container-section2'><img src={MYimage} alt="" />
                         </div>
                         <div className='firstline-secondCard-title-section2'><h2>Random Random</h2>
                         </div>
                         <div className='firstline-secondCard-text1-section2'><p> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias reiciendis rerum accusantium quis iste officia minima modi enim nobis, excepturi nesciunt praesentium laborum, voluptatem velit architecto, perferendis illo quas?</p></div>
                   </div>

                   {/* Firsline Card3 */}
                   <div className='firstline-thirdCard-section2'>
                         <div className='firstline-thirdCard-img-container-section2'><img src= {MYimage} alt="" />
                         </div>
                         <div className='firstline-thirdCard-title-section2'><h2>Random Random</h2>
                         </div>
                         <div className='firstline-thirdCard-text1-section2'><p> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias reiciendis rerum accusantium quis iste officia minima modi enim nobis, excepturi nesciunt praesentium laborum, voluptatem velit architecto, perferendis illo quas?</p></div>
                   </div>


                </div>
            
        </div>
        
    </div>
  )
}

export default Section2Projects