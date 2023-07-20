import React from 'react';
import css from './Products.module.css';
import Plane from '../../assets/plane.png';

const Products = () => {
  return (
    <div className={css.container}>
    <img src={Plane} alt="" />

    </div>
  )
};

export default Products;