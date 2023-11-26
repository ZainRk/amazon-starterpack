import React from 'react'
import CSS from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon
} from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className={CSS.cFooterWrapper}>
            <hr />

            <div className={CSS.cFooter}>
                <div className={CSS.logo}>
                    <img src={Logo} />
                    <span>amazon</span>
                </div>


                <div className={CSS.block}>

                    <div className={CSS.detail}>
                        <span>Contact US</span>
                        <span className={CSS.pngLine}>
                            <LocationMarkerIcon className={CSS.icon} />
                            <span>Bakshi Ka Talab,Lucknow</span>
                        </span>

                        <span className={CSS.pngLine}>
                            <PhoneIcon className={CSS.icon} />
                            <span>9580106355</span>
                        </span>
                    </div>
                </div>

                <div className={CSS.block}>

                    <div className={CSS.detail}>
                        <span>Account</span>
                        <span className={CSS.pngLine}>
                            <LoginIcon className={CSS.icon} />
                            <span>Sign In</span>
                        </span>


                    </div>
                </div>

                <div className={CSS.block}>
                    <div className={CSS.detail}>
                        <span>Company</span>
                        <span className={CSS.pngLine}>
                            <UserIcon className={CSS.icon} />
                            <span>About us</span>
                        </span>


                    </div>
                </div>

                <div className={CSS.block}>
                    <div className={CSS.detail}>
                        <span>Resources</span>
                        <span className={CSS.pngLine}>
                            <LinkIcon className={CSS.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>


                    </div>
                </div>

            </div>

            <div className={CSS.cppyRight}>
                <span>Copyright ©2023 by Amazon, Inc.</span>
                <span>Pradeep Kumar Gupta</span>
            </div>
        </div>

    )
}

export default Footer