import React from 'react'
import CSS from './Hero.module.css'

import HeroImg from '../../assets/hero.png'

import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

const Hero = () => {
    const transition = { duration: 3, type: 'spring' }
    return (


        <div className={CSS.container}>

            {/* left side */}
            <div className={CSS.h_side}>
                <span className={CSS.text1}>SKIN PROTECTION CREAM</span>

                <div className={CSS.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>
            </div>

            {/* midel side  */}
            <div className={CSS.wraper}>

                {/* hero blu circule */}
                <motion.div
                    initial={{ bottom: '2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={transition}
                    className={CSS.clueCricle}>
                </motion.div>
                {/* hero img  */}
                <motion.img
                    transition={transition}
                    initial={{ bottom: '-2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    src={HeroImg} width={600}
                />
                {/* card div animetion  */}
                <motion.div
                    transition={transition}
                    initial={{ right: '4%' }}
                    whileInView={{ right: '2%' }}
                    className={CSS.card2}>
                    <RiShoppingBagFill />
                    <div className={CSS.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right side  */}
            <div className={CSS.h_side}>
                <div className={CSS.traffic}>
                    <span>1.2m</span>
                    <span>Monthly traffic</span>
                </div>

                <div className={CSS.customer}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero