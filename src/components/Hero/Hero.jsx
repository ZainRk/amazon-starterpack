import React from 'react';
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';

const Hero = () => {
  return (
    <div className={css.container}>
        {/* Left Side */}
        <div className={css.h_sides}>
        <span className={css.text1}> Skin Protection Cream </span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span> Seedily Say has suitible disposal and boy rejoiced</span>
        </div>
        </div>
        {/* middle side  hero image */}
        <div className={css.wrapper}>
          <div className={css.bluecircle}>
            <img src={HeroImg} alt="" width={350} />
            <div className={css.cart2}>
            <RiShoppingBagFill />
            <div className={css.signup}>
              <span>Best signup offers</span>
            <BsArrowRight/>
            </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
          </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>
        </div>
    </div>
  )
};

export default Hero;