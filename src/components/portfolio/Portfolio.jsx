import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
            <img src={IMG1} alt="" />
          <h3>My Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/doubleO-Seven/portfolio-2.0" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/17567562-Heart" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio