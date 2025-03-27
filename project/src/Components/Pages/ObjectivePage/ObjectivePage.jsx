import React from 'react'
import '../../../App.css'
import '../ObjectivePage/ObjectivePage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1 from  './Section1/Section1Objective.jsx'
import Section2 from './Section2/Section2'

const ObjectivePage = () => {
  return (
    <div className='objectPage'>
    <div className='header-objective'>
       <Header/>
       </div>
       <div className='body-objective'>
        <Section1/>
        <hr />
        <Section2/>
        <hr />
       </div>
    <div className='footer-objective'>
      <Footer/>
      </div>
    </div>
  )
}

export default ObjectivePage