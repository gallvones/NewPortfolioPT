import React from 'react'
import '../ProjectsPage/ProjectsPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1Projects from '../ProjectsPage/Section1ProjectsPage/Section1Projects';


const ProjectsPage = () => {
  return (
    <div className='projectsPage'>
    <div className='header-projects'>
       <Header/>
       </div>
       <div className='body-projects'>
        <Section1Projects/>
        <hr className='hr1' />
       </div>
    <div className='footer-projects'>
      <Footer/>
      </div>
    </div>
  )
}

export default ProjectsPage