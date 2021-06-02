import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import LogementsList from '../Logements/logementsList';
import './home.scss';

const Home = ({ match }) => {
  const [logements, setLogements] = useState([]);

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
    return (
        <>
        <Header isHomePage={true}></Header>
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
                    <LogementsList logement={l} key={index} index={index} />
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