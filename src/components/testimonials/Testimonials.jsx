import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Dhiman Roy',
    review: 'A guy with both reliable and handy in any work. He is a continuous learner and grinder in any field of his learning and I am still working with him as a partner on projects and thesis. Leadership, Managing as a teammate, and Motivating to work on high hopes are his strong zone. I really appreciate all his works and hope for the best in his work life.'
  },
  {
    avatar: AVTR2,
    name: 'Dhiman Roy',
    review: 'A guy with both reliable and handy in any work. He is a continuous learner and grinder in any field of his learning and I am still working with him as a partner on projects and thesis. Leadership, Managing as a teammate, and Motivating to work on high hopes are his strong zone. I really appreciate all his works and hope for the best in his work life.'
  },
  {
    avatar: AVTR3,
    name: 'Dhiman Roy',
    review: 'A guy with both reliable and handy in any work. He is a continuous learner and grinder in any field of his learning and I am still working with him as a partner on projects and thesis. Leadership, Managing as a teammate, and Motivating to work on high hopes are his strong zone. I really appreciate all his works and hope for the best in his work life.'
  },
  {
    avatar: AVTR4,
    name: 'Dhiman Roy',
    review: 'A guy with both reliable and handy in any work. He is a continuous learner and grinder in any field of his learning and I am still working with him as a partner on projects and thesis. Leadership, Managing as a teammate, and Motivating to work on high hopes are his strong zone. I really appreciate all his works and hope for the best in his work life.'
  }
]


const Testimonials = () => {
  return (
    <section id='sections'>
      <h5>Review Received</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key = {index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
