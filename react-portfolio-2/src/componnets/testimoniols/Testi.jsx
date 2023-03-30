import React from 'react'
import './testi.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [

  {
    avatar: AVTR1,
    name: 'Client 1',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Quasi veniam nesciunt culpa omnis itaque, deleniti tempora dolorum, ut deserunt labore incidunt modi voluptate architecto minima. Sint earum id odio obcaecati'
  },

  {
    avatar: AVTR2,
    name: 'Client 1',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Quasi veniam nesciunt culpa omnis itaque, deleniti tempora dolorum, ut deserunt labore incidunt modi voluptate architecto minima. Sint earum id odio obcaecati'
  },

  {
    avatar: AVTR3,
    name: 'Client 1',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Quasi veniam nesciunt culpa omnis itaque, deleniti tempora dolorum, ut deserunt labore incidunt modi voluptate architecto minima. Sint earum id odio obcaecati'
  },

]

const Testi = () => {
  return (
    <section id='testi'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>

                <div className="client__avatar">
                  <img src={avatar}  />
                </div>

                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testi