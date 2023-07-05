import React from 'react';
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg';

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span>amazon</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
            <ul className={css.menu}>
              <li>Collection</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>ENG</li>
            </ul>
            </div>
            <input placeholder="Search" type="text" className={css.search} />
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
};
export default Header;