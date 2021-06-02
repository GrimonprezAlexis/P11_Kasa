import React from "react";
import '../Home/home.scss';
import { Link } from 'react-router-dom';

const Header = ({ isHomePage, isAboutPage }) => {
    return (
        <>
            <div className="container">
                <header className="header">
                    <img src={`${window.location.origin}/img/logo.png`}  alt="Kasa Home page" className="header__logo"/>
                    <nav className="header__navbar">
                        <Link to='/' data-active={isHomePage} className="header__navbar__link">Accueil</Link>
                        <Link to='/about' data-active={isAboutPage} className="header__navbar__link">A Propos</Link>
                    </nav>
                </header>
            </div>
        </>
    )
}
export default Header;