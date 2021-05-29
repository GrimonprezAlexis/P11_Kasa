import React, { useState, useEffect } from "react";
import LogementsList from './logementsList';

import './home.scss';

import { Link } from 'react-router-dom';


const Home = ({ match }) => {

  const [logements, setLogements] = useState([]);
//  const [clickedItem, setClickedItem] = useState(null);


  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch('api/logements');
        const data = await response.json();
        setLogements(data);
    }

/*     //Filter photographer by selectedTag
    const handleFilterByTag = (e) => {
        e.preventDefault();
        const selectedTag = e.target.textContent.slice(1).toLowerCase();
        const wantedPhotographers = photographers.filter(photographer => { 
            return photographer.tags.indexOf(selectedTag) > -1; 
        });
        setSearchPhotographers(wantedPhotographers);
        let tagEvent = e ? parseInt(e.target.parentElement.id, 10) : null;
        setClickedItem(tagEvent);
    } */


    return (
        <>
        <header>
            <div className="container">
                <nav className="header">
                    <Link to={`${match.url}`}>
                        <img src={`${window.location.origin}/img/logo.png`}  alt="Kasa Home page" className="header__logo"/>
                    </Link>
                    <ul className="nav navbar">
                        <li><Link to={`${match.url}`} data-active="true">Accueil</Link></li>
                        <li><Link to={`${match.url}`}>A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className="mb-5rem"></div>

        <div className="container">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={`${window.location.origin}/img/banner.png`} alt="Fôret et mer" className="banner__img"/>
            </div>
        </div>
        <div className="mb-1rem"></div>

        <main className="container">
            <div className="logements">{
                logements.map(( l, index ) => (
                    <LogementsList logement={l} key={index} />
                ))
            }</div>
        </main>





{/* 
        <main class="container" id="main">
        {
        logements.map(( l, index ) => (
            <LogementsList logement={l} key={index} />
        ))
        }
        </main> */}







{/*         <header className="container header" role="banner">
            <Link to={`${match.url}`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="Kasa Home page" className="header__logo"/>
            </Link>

            <nav className="header__navbar">
                <Link to={`${match.url}`} className="header__navbar__link" data-active="true">Accueil</Link>
                <Link to={`${match.url}`} className="header__navbar__link">A Propos</Link>
            </nav>
        </header>

        <div className="container">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={`${window.location.origin}/img/banner.png`} alt="Fôret et mer" className="banner__img"/>
            </div>

            <main class="container__main" id="main">
            {
            logements.map(( l, index ) => (
                <LogementsList logement={l} key={index} />
            ))
            }
            </main>


        </div> */}
        </>
    )
}

export default Home;