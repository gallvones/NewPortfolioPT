import React from 'react';
import { useState } from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/img/logo.png';
import { IoMenu } from "react-icons/io5";
const Header = () => {
const [navBar, setNavBar] = useState('false');
  const toggleNav = () => {
    setNavBar(!navBar)
  }

  return (
    <div className='all'>
      
      <div className='logo-container'>
      <Link to='/'> <div className='img-link'> <img src={MyLogo} alt="" /></div></Link>
      </div>
    <div className='links-container'>
    
    <Link  to='/objective'><h2 className='links'>Objetivo</h2></Link>
    <Link to='/projects'><h2 className='links'>Projetos</h2></Link>
    <Link to='/contact'><h2 className='links'>Contato</h2></Link>
     <a href="mailto:luizgalvao.dev@gmail.com"><h2 className='links'> E-mail </h2></a>
    </div>

    <div className='links2-container'>
    <Link  to='/objective'><h2 className='links'>Objetivo</h2></Link>
    <Link to='/projects'><h2 className='links'>Projetos</h2></Link>
    <Link to='/contact'><h2 className='links'>Contato</h2></Link>
    </div>

   
<div className='logo2-container'>
<Link to='/'> <div className='img-link'> <img src={MyLogo} alt="" /></div></Link>
</div>
<div className='logo3-container'>
  
<Link to='/'><div className='img3-link' > <img src={MyLogo} alt="" /></div></Link>

<div className='burger' onClick={toggleNav}><IoMenu /></div>
<div className=  {navBar ? 'navMobileNone' : 'navMobileON'}>
<Link  to='/objective'><h2 className='links'>Objetivo</h2></Link>
    <Link to='/projects'><h2 className='links'>Projetos</h2></Link>
    <Link to='/contact'><h2 className='links'>Contato</h2></Link>
    </div>
</div>
    </div>
  )
}

export default Header