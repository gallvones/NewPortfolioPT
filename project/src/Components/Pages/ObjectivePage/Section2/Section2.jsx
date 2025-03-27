import React, { useState, useRef } from 'react';
import '../Section2/Section2.css';

// Icons
import { FaNodeJs, FaReact, FaDocker, FaGitAlt, FaGithub, FaTrello, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiVite, SiJest, SiMongoose, SiJsonwebtokens, SiCanva, SiPostman, SiNotion } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsBootstrapFill } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';

const Section2 = () => {
  const [names, setNames] = useState({
    coreTechs: '',
    frontEnd: '',
    backEnd: '',
    tools: '',
  });

  
  const timeoutRef = useRef({});

  const changingNames = (section, value) => {
   
    if (timeoutRef.current[section]) {
      clearTimeout(timeoutRef.current[section]);
    }

    
    setNames((prevNames) => ({
      ...prevNames,
      [section]: value,
    }));

    
    timeoutRef.current[section] = setTimeout(() => {
      setNames((prevNames) => ({
        ...prevNames,
        [section]: '',
      }));
    }, 3000); 
  };
const more = '+'

  return (
    <div className='section2-container'>
      <div className='section2-title'>
        <h1>Tecnologias</h1>
      </div>

       {/* First Card */}
      <div className='cardsexp-container'>
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Core Techs</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.coreTechs}</h2>
            <div className='firstCard-icons'>
              <FaReact className='react' onMouseMove={() => changingNames('coreTechs', 'React')} onMouseOut={() => changingNames('coreTechs', '')} />
              <FaNodeJs className='node' onMouseMove={() => changingNames('coreTechs', 'Node')}  onMouseOut={() => changingNames('coreTech', '')}/>
              <SiMongodb className='mongodb' onMouseMove={() => changingNames('coreTechs', 'MongoDB')} onMouseOut={() => changingNames('coreTechs', '')}
              />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Front-End</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.frontEnd}</h2>
            <div className='secondCard-icons'>
              <div className='secondCard-firstline-icons'>
                <FaReact className='react' onMouseMove={() => changingNames('frontEnd', 'React')} onMouseOut={() => changingNames('frontEnd', '')} /> <div className='more'>{more}</div>
                <SiVite className='vite' onMouseMove={() => changingNames('frontEnd', 'Vite')} onMouseOut={() => changingNames('frontEnd', '')}  />
              </div>
              <RiTailwindCssFill className='tailwind' onMouseMove={() => changingNames('frontEnd', 'Tailwind')}  onMouseOut={() => changingNames('frontEnd', '')} />
              <BsBootstrapFill className='bootstrap' onMouseMove={() => changingNames('frontEnd', 'Bootstrap')} onMouseOut={() => changingNames('frontEnd', '')} />
            </div>
          </div>
        </div>
       
       
        {/* Third Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Back-End</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.backEnd}</h2>
            <div className='thirdCard-icons'>
              <div className='thirdCard-firstline-icons'>
                <FaNodeJs className='node' onMouseMove={() => changingNames('backEnd', 'NodeJS')} onMouseOut={() => changingNames('backEnd', '')}/>  <div className='more'>{more}</div><p onMouseMove={() => changingNames('backEnd', 'Express')} onMouseOut={()=> changingNames('backEnd', '')}>Express</p>
              </div>
              <div className='thirdCard-secondline-icons'>
                <SiJest className='jest' onMouseMove={() => changingNames('backEnd', 'Jest')}  onMouseOut={() => changingNames('backEnd', '')}/> 
                <div className='more'>{more}</div >
                <p onMouseMove={() => changingNames('backEnd', 'Supertest')} onMouseOut={() => changingNames('backEnd', '')}>Supertest</p>
              </div>
              <div className='thirdCard-thirdline-icons'>
                <FaDocker className='docker' onMouseMove={() => changingNames('backEnd', 'Docker')}  onMouseOut={() => changingNames('backEnd', '')}/>
                <SiJsonwebtokens className='jwt' onMouseMove={() => changingNames('backEnd', 'JWT')} onMouseOut={() => changingNames('backEnd', '')} />
                <SiMongoose className='mongoose' onMouseMove={() => changingNames('backEnd', 'Mongoose')} onMouseOut={() => changingNames('backEnd', '')} />
                <FaGitAlt className='git' onMouseMove={() => changingNames('backEnd', 'Git')}  onMouseOut={() => changingNames('backEnd', '')}/>
              </div>
            </div>
          </div>
        </div>

        {/* Fourd Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Ferramentas</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.tools}</h2>
            <div className='fourdCard-icons'>
              <div className='fourdCard-firstline-icons'>
                <FaTrello className='trello' onMouseMove={() => changingNames('tools', 'Trello')} onMouseOut={() => changingNames('tools', '')} />
                <FaGithub className='github' onMouseMove={() => changingNames('tools', 'GitHub')}  onMouseOut={() => changingNames('tools', '')}/>
                <VscVscode className='vscode' onMouseMove={() => changingNames('tools', 'VSCode')} onMouseOut={() => changingNames('tools', '')}/>
                <p onMouseMove={() => changingNames('tools', 'DeepSeek')} onMouseOut={() => changingNames('tools', '')}>IA</p>
              </div>
              <div className='fourdCard-secondline-icons'>
                <FaFigma className='figma' onMouseMove={() => changingNames('tools', 'Figma')} onMouseOut={() => changingNames('tools', '')} />
                <SiCanva className='canva' onMouseMove={() => changingNames('tools', 'Canva')}  onMouseOut={() => changingNames('tools', '')}/>
                <SiPostman className='postman' onMouseMove={() => changingNames('tools', 'Postman')} onMouseOut={() => changingNames('tools', '')} />
                <SiNotion className='notion' onMouseMove={() => changingNames('tools', 'Notion')} onMouseOut={() => changingNames('tools', '')}/>
              </div>
              <div className='fourdCard-thirdline-icons'>
                <p onMouseMove={() => {changingNames('tools', 'Office Packet')}} onMouseOut={() => changingNames('tools', '')}> Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
