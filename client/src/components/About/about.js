import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import {Fade} from 'react-bootstrap';


const Error404 = ({ match }) => {
  const [open, setOpen] = useState(false);

    return (
        <>
        <Header isHomePage={false} isAboutPage={true}></Header>
        <div className="mb-5rem"></div>

        <div className="container">
            <div className="banner">
                <img src={`${window.location.origin}/img/about.png`} alt="Montagne" className="banner__img"/>
            </div>
        </div>
        <div className="mt-2rem"></div>

        <div className="container">
           <div className="about mt-1rem">
                <div className="col-md-10 dropdown mb-1rem">
                    <header
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <span>Fiabilité</span>
                        <img src={`${window.location.origin}/img/dropdown_arrow.png`} alt="Dropdown arrow"/>
                    </header>
                <Fade in={open}>
                    <div id="example-fade-text">
                        <p className="dropdown__text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </Fade>




                </div>
                <div className="col-md-10 dropdown mb-1rem">
                    <header
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <span>Respect</span>
                        <img src={`${window.location.origin}/img/dropdown_arrow.png`} alt="Dropdown arrow"/>
                    </header>
                    <p className="dropdown__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className="col-md-10 dropdown mb-1rem">
                    <header
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <span>Service</span>
                        <img src={`${window.location.origin}/img/dropdown_arrow.png`} alt="Dropdown arrow"/>
                    </header>
                    <p className="dropdown__text">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className="col-md-10 dropdown mb-1rem">
                    <header
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <span>Sécurité</span>
                        <img src={`${window.location.origin}/img/dropdown_arrow.png`} alt="Dropdown arrow"/>
                    </header>
                    <p className="dropdown__text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default Error404;