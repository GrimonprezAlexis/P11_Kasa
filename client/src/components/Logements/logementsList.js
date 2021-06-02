import React from 'react'
import { Link } from 'react-router-dom';


//Return LogementsList list
//The list can be render filtered by tag
const LogementsList = ({ logement}) => {
    return (
        <>
        <article className="logements__main">
        <Link to={`/logements/${logement.id}`}>
            <img src={`${logement.cover}`}  alt="Fond Logement page" className="logements__main__img"/>
            <span className="logements__title">{logement.title}</span>
        </Link>
        </article>
        </>
    )
}

export default LogementsList;