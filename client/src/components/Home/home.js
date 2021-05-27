import React, { useState, useEffect } from "react";
import './home.css';

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
        <header className="container header" role="banner">
            <Link to={`${match.url}`}>
                <img src={`${window.location.origin}/img/logo.png`}  alt="Kasa Home page" className="header__logo"/>
            </Link>

            <nav className="menu">
                <ul>
                    <li><u>Accueil</u></li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
{/*         <main className="container__main" id="main">{
            photographersFiltered.map(( p, index ) => (
                <PhotographerList photographer={p} key={index}/> 
            ))
        }</main> */}
        </>
    )
}

export default Home;