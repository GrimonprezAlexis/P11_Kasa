import React from "react";
import '../Home/home.scss';
import { Link } from 'react-router-dom';

const Header = ({ match }) => {
    return (
        <>
        <header>
            <div className="container">
                <nav className="header">
                    <Link to='/'>
                        <img src={`${window.location.origin}/img/logo.png`}  alt="Kasa Home page" className="header__logo"/>
                    </Link>
                    <ul className="nav navbar">
                        <li><Link to='/' data-active="true">Accueil</Link></li>
                        <li><Link to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}
export default Header;