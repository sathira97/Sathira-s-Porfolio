import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Game Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon' />
              <p>Develop UE Blueprints</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Develop Unity classes</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Level Design</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Game Testing</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Debugging</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Prototyping</p>
            </li>

          </ul>

        </article>

        {/* front-end development */}

        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__icon' />
              <p>HTML & CSS Responsive Web Design</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>React JS Development</p>
            </li>

            <li>
              <BiCheck className='service__icon' />
              <p>Javascript Development</p>
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services