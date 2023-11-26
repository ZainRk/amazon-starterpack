import React from 'react'
import CSS from './Testimonial.module.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials.js';


const Testimonial = () => {
    return (
        <div className={CSS.testimonial}>
            <div className={CSS.wrapper}>
                <div className={CSS.container}>
                    <span>TOP RATED</span>
                    <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
                </div>
                <img src={Hero} />

                <div className={CSS.container}>
                    <span>100K</span>
                    <span>HAPPY CUSTOMERS WITH US</span>
                </div>
            </div>

            <div className={CSS.review}>Reviews</div>
            <div className={CSS.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={CSS.tCarousal}
                    breakpoints={{
                        856: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className={CSS.testimonialS}>
                                    <img src={testimonial.image} />
                                    <span> {testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonial