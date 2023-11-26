import React, { useState } from 'react'
import CSS from './Header.module.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {

    const [Showmenu, SetShowMenu] = useState(true)

    const toggleMenu = () => {
        SetShowMenu((Showmenu) => !Showmenu)
    }
    return (
        <div className={CSS.container}>
            <div className={CSS.logo}>
                <img src={Logo} />
                <span>Amazon</span>
            </div>
            <div className={CSS.right}>

                <div className={CSS.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>
                {/* <div className={CSS.menu} > */}
                <ul className={CSS.menu} style={{ display: Showmenu ? 'inherit' : 'none' }}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
                {/* </div> */}

                <input type='text' className={CSS.search} placeholder='Search' />
                <CgShoppingBag className={CSS.card} />
            </div>
        </div>
    )
}

export default Header