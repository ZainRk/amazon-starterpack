import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png'
import {Swiper,  SwiperSlide} from 'swiper/react';
import {TestimonialsData} from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
    <div className={css.wrapper}>
    <div className={css.container}>
        <span>Top Rated</span>
        <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
    </div>
    <img src={Hero} alt="" />
    <div className={css.container}>
        <span>100K</span>
        <span>Happy Customers with us</span>
    </div>
    </div>
    <div className={css.carosual}>
        <Swiper>
        {
            TestimonialsData.map((testimonial,i)=>(
                <SwiperSlide>
                    Slide
                </SwiperSlide>

            ))
        }
        </Swiper>
    </div>
    </div>
  )
};

export default Testimonials;