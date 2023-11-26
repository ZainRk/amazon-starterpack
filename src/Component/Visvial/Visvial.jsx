import React from 'react'
import CSS from './Visvial.module.css'
// img 
import Shade from '../../assets/shade.png'
import Befour from '../../assets/before.png'
import After from '../../assets/after.png'


import ReactCompareImage from 'react-compare-image'

const Visvial = () => {
    return (
        <div className={CSS.visvial}>
            <div className={CSS.left}>
                <span>VIRTUAL TRY-ON</span>
                <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
                <span>Try Now!</span>
                <img src={Shade} />
            </div>

            <div className={CSS.right}>

                <div className={CSS.wrapper}>
                    <ReactCompareImage leftImage={Befour}
                        rightImage={After} />
                </div>
            </div>
        </div>
    )
}

export default Visvial