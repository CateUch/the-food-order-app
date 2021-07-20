import React from 'react';
import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../../assets/meals.jpg'

function Header() {
    return (
        <>
            <div className={style.header}>
                <span className={style.headerTitle}>React Meals</span>
                <HeaderCartButton />
            </div>
            <div className={style['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </>
    )
}

export default Header;