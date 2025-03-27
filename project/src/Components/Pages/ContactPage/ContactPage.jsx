import React from 'react'
import '../ContactPage/ContactPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1 from '../ContactPage/Section1ContactPage/Section1Contact'
import Section2 from '../ContactPage/Section2ContactPage/Section2Contact'
const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div className='header-contact'>
           <Header/>
           </div>
           <div className='body-contact'>
            <Section1/>
            <hr  className='hr1-contact'/>
            <Section2/>
            <hr className='hr2-contact'/>
           </div>
        <div className='footer-contact'>
          <Footer/>
          </div>
        </div>
  )
}

export default ContactPage