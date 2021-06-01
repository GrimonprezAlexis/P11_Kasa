import React  from "react";
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import './404.scss';


const error404 = ({ match }) => {
    return (
        <>
        <Header isHomePage={false}></Header>
        <div className="mb-5rem"></div>

        <div className="container error">
            <p className="error__404">404</p>
            <p className="error__404__message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="error__404__backHome">Retourner sur la page d’accueil</Link>
        </div>
        </>
    )
}

export default error404;