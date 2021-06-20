import React, { useState } from "react";
import Header from '../Header/header';

const Error404 = ({ match }) => {
    const abouts = [{
      id: "0",
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    }, {
      id: "1",
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    }, {
      id: "2",
      title: 'Service',
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    }, {
      id: "3",
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
    }];

    const [activeKey, setActiveKey] = useState(0);

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
                <div className="accordion">
                {abouts.map((about, index) => {
                    return (
                        <div className="col-md-10 dropdown mb-1rem" key={index}>
                            <div className="radius-5px card-header" onClick={e => setActiveKey(index)}>
                                <span>{about.title}</span>
                                <img src={
                                    activeKey === index ? 
                                    `${window.location.origin}/img/arrow-down.png` : 
                                    `${window.location.origin}/img/arrow-up.png`
                                } alt="dropdown arrow" className={'arrow'}/>

                            </div>
                            <div className={activeKey === index ? 'show': 'hide'}>
                              <p className="dropdown__text">{about.text}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Error404;