import module from './Header.module.scss';
import logo from '../assets/logo.png';
import heart from '../assets/heart.png';
import lupa from '../assets/lupa.png';
import cart from '../assets/cart_img.png';
import vector from '../assets/vector.png';
import { RouterProvider, Routes, Route, Link } from 'react-router-dom';
import router from '/src/app/index.jsx';
import { useState } from 'react';
import { auth } from '/src/app/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import home from '../assets/Home.png';
import bookmark from '../assets/Bookmark.png';

const Header = (Props) => {
    const [burger, setBurger] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    function burgerMenu(e) {
        setBurger(!burger);
    }

    function handleCatalogClick(e) {
        if (!user) {
            e.preventDefault();
            alert('Необходимо войти в аккаунт');
        }
    }

    if (user) {
        if (user.emailVerified)
            return (
                <header>
                    <div className={module.header_a}>
                        <Link to='/'><h2> SWEVEN</h2></Link>
                        <div className={module.container}>
                            <Link to='/'>ГЛАВНАЯ</Link>
                            <Link to='/catalogue' onClick={handleCatalogClick}>КАТАЛОГ</Link>
                        </div>


                        {burger && (<div className={module.container_burger}>
                            <a href='/'>ГЛАВНАЯ</a>
                            <a href="/catalogue" onClick={handleCatalogClick}>КАТАЛОГ</a>
                        </div>)}
                        <div className={module.burger} onClick={burgerMenu}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className={module.head_pic}>
                            <Link to='/cart'><img src={bookmark}></img></Link>
                            <Link to='/main'><img src={home}></img></Link>
                        </div>
                    </div>
                </header>
            )
    }

    console.log(burger)

    return (
        <header>

            <div className={module.header_a}>
                <Link to='/'><h3> SWEVEN</h3></Link>
                <div className={module.container}>
                    <Link to='/'>ГЛАВНАЯ</Link>
                    <Link to='/catalogue' onClick={handleCatalogClick}>КАТАЛОГ</Link>
                </div>
                {burger && (<div className={module.container_burger}>
                    <a href='/'>ГЛАВНАЯ</a>
                    <a href="/catalogue" onClick={handleCatalogClick}>КАТАЛОГ</a>
                </div>)}
                <div className={module.burger} onClick={burgerMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className={module.head_pic}>
                    <Link to='/cart'><img src={bookmark}></img></Link>
                    <Link to='/authorization'><img src={home}></img></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;