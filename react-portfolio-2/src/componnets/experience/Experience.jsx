import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Game Development</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Unreal Engine</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill   className='experience__details-icons' />
              <div>
                <h4>Unity Engine</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                < h4>Blender</h4>
                <small className='text-light'>Beginner</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>Gaea</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>Virutal Machine</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience__backend'>
        <h3>Web Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience