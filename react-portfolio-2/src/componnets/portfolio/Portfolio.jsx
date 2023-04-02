import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/snp1.jpg'
import IMG2 from '../../assets/snp2.jpg'
import IMG3 from '../../assets/snp3.jpg'
import IMG4 from '../../assets/snp4.jpg'
import IMG5 from '../../assets/snp5.jpg'
import IMG6 from '../../assets/snp6.jpg'
import IMG7 from '../../assets/snp7.jpg'
import IMG8 from '../../assets/snp8.jpg'
import IMG9 from '../../assets/snp9.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hogar - Action/Survival Game - Unreal Engine 4',
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/6bzg1w'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Three Miles Island - Action Game - Unreal Engine 4',
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/QnJ6qZ'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Fishing Madness - 2D Game - Unity',
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/LeJydR'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Alone - 3D Survival - Unreal Engine 4',
    github: 'https://github.com',
    artstastion: 'https://artstastion.com'
  },

  {
    id: 5,
    image: IMG5,
    title: 'The One Girl - 3D Scene - Blender',
    github: 'https://github.com',
    artstastion: 'https://artstastion.com'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Arrow Girl - Cinematic Scene - Unreal Engine 4',
    github: 'https://github.com',
    artstastion: 'https://artstastion.com'
  },

  {id: 7,
    image: IMG7,
    title: 'Laser Turret - Cinematic Scene - Blender',
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/4XqGq2'
  },

  {id: 8,
    image: IMG8,
    title: "Ruwetha's Odyssey - Third Person Action/Survival Game - Unreal Engine 4",
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/KOxzBR'
  },

  {id: 9,
    image: IMG8,
    title: "The Mando - Cinematic Scene - Unreal Engine 5",
    github: 'https://github.com',
    artstastion: 'https://www.artstation.com/artwork/LeAal0'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, artstastion}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={artstastion} className='btn btn-primary' target='_blank'>ArtStation</a>
              </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio