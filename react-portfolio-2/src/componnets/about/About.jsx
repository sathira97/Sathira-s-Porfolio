import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {ME} alt = "About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icons' />
              <h5>Clients</h5>
              <small>80+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons' />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
          Welcome to my portfolio! I am a game developer with expertise in using the Unreal Engine. 
          As a passionate gamer and creative problem solver, I have dedicated myself to developing 
          immersive and engaging game experiences that push the boundaries of what is possible in the 
          world of gaming. With 3+ years of experience working on a variety of game development projects, 
          I have honed my skills in designing, developing, and delivering games that captivate players and keep them 
          coming back for more. In this portfolio, you will find a showcase of some of my most notable works, including 
          projects I have led, collaborated on, and contributed to. I hope that my passion and expertise in game 
          development shines through in these examples, and that you are inspired to collaborate with me on your next game project..
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About