import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

/* ARRAY */

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Testo 1',
    github: 'https://',
    demo: 'http://'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Testo 2',
    github: 'https://',
    demo: 'http://'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Testo 3',
    github: 'https://',
    demo: 'http://'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Testo 4',
    github: 'https://',
    demo: 'http://'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Testo 5',
    github: 'https://',
    demo: 'http://'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Testo 6',
    github: 'https://',
    demo: 'http://'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
          return (
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <h3>This is portfolio</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
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