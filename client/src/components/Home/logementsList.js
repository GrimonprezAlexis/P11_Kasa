import React from 'react'

import { Route, Link } from 'react-router-dom';


//Return LogementsList list
//The list can be render filtered by tag
const LogementsList = ({ logement}) => {
    return (
        <>
        <div className="logement" id={`logement-${logement.id}`}>
            <Link to={`/${logement.id}`} className="logement__img__link">
                <h2>{logement.title}</h2>
            </Link>
        </div>
        </>
    )
}

export default LogementsList;