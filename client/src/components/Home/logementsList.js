import React from 'react'

import { Route, Link } from 'react-router-dom';


//Return LogementsList list
//The list can be render filtered by tag
const LogementsList = ({ logement}) => {
    return (
        <>
        <article class="logements__main">
            <img src={`${window.location.origin}/img/logement_img.png`}  alt="Fond Logement page"/>
            <span className="logements__title">{logement.title}</span>
        </article>


{/*         <div className="logement col-md-3" id={`logement-${logement.id}`}>
            <img src={`${window.location.origin}/img/logement_img.png`}  alt="Fond Logement page" className="header__logo"/>
            <Link to={`/${logement.id}`} className="logement__img__link">
                <h2>{logement.title}</h2>
            </Link>
        </div> */}
        </>
    )
}

export default LogementsList;