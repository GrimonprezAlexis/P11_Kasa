import React from 'react'
import { Link } from 'react-router-dom';


//Return LogementsList list
//The list can be render filtered by tag
const LogementsList = ({ logement}) => {
    return (
        <>
        <article className="logements__main">
        <Link to={`/${logement.id}`}>
            <img src={`${window.location.origin}/img/logement_img.png`}  alt="Fond Logement page"/>
            <span className="logements__title">{logement.title}</span>
        </Link>
        </article>
        </>
    )
}

export default LogementsList;