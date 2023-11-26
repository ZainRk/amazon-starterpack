import React, { useState } from 'react'
import CSS from './Products.module.css'
// img
import Plane from '../../assets/plane.png'

import { ProductsData } from '../../data/products'

import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {

    const [parent] = useAutoAnimate()
    const [MenuProducts, setMenuProducts] = useState(ProductsData)


    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }
    return (
        <div className={CSS.container}>
            <img src={Plane} />
            <h2 className={CSS.fea}>Our Feature Products</h2>

            <div className={CSS.products}>
                <ul className={CSS.menu}>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter('skin care')}>Skin Care</li>
                    <li onClick={() => filter('conditioner')}>Conditioner</li>
                    <li onClick={() => filter('foundation')}>Foundation</li>
                </ul>

                <div className={CSS.list} ref={parent}>
                    {
                        MenuProducts.map((product, i) => (
                            <div className={CSS.product}>
                                <div className='left-s'>
                                    <div className='name'>
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>

                                    </div>
                                    <span>{product.price}$</span>
                                    <div>Shop Now</div>
                                </div>
                                <img src={product.img} className='img-p' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products