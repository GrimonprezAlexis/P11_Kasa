import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import '../Home/home.scss'; 
import Header from '../Header/header';
import Rates from './rates'
import Galerie from './galerie';

const LogementDetail = ({ match }) => {
    const [logementById, setLogements] = useState({});
    const [tags, setTags] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [pictures, setPictures] = useState([]);

    const [activeKey, setActiveKey] = useState();
    const [redirect, setRedirect] = useState();

    //Splt string and get the index of string
    //Ex: Alexis Grimonprez
    const getNameIndex = (str, index) => {
        let name = str.split(" ");
        return name[index];
    }

  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch(`/api/logements/${match.params.id}`);
        if(response.ok){
            console.log('> test prod');
            try {
                const data = await response.json();
                setRedirect(false);
                setLogements(data);
                setTags(data.tags);
                setEquipments(data.equipments);
                setPictures(data.pictures);

            } catch (error) {
                console.log('>> logement not found', error);
                setRedirect(true);                
            }
        }
    }

    if(redirect){
        return <Redirect to="/error404" />
    }

    return (
        <>
        <Header isHomePage={false}></Header>
        <div className="mt-2rem"></div>
        <div className="container">
            
            <Galerie pictures={pictures}></Galerie>

            <div className="mt-2rem flexBetween">
                <section className="logementDetail">
                    <p className="logementDetail__title">{logementById.title}</p>
                    <span className="logementDetail__location">{logementById.location}</span>
                    <ul className="logementDetail__tag">
                        {tags.map((tag, index) => {
                            return (
                                <li key={index}><span aria-hidden="false">{tag}</span></li>
                            );
                        })}
                    </ul>
                </section>
                <section className="row-reverse">
                    {logementById.host && logementById.host.name && logementById.host.picture &&
                        <div className="logementDetail__host">
                            <span className="logementDetail__hostname">{getNameIndex(logementById.host.name, 0)} <br></br> {getNameIndex(logementById.host.name, 1)}</span>
                            <img src={logementById.host.picture} alt="Hostname" className="logementDetail__img" />                
                        </div>
                    }
                    <Rates logementById={logementById}></Rates>
                </section>
            </div>

            <div className="flexBetween mt-1rem">
                <div className="logementDetail__accordion accordion">
                    <div className="col-md-5custom dropdown">
                        <div className="radius-5px card-header" onClick={e => setActiveKey("1")}>
                            <span>Description</span>
                            <img src={
                                activeKey === "1" ? 
                                `${window.location.origin}/img/arrow-down.png` : 
                                `${window.location.origin}/img/arrow-up.png`
                            } alt="dropdown arrow" className={'arrow'}/>
                        </div>
                        <div className={activeKey === "1" ? 'show': 'hide'} >
                            <p className="dropdown__text">{logementById.description}</p>
                        </div>
                    </div>
                    <div className="col-md-5custom dropdown">
                        <div className="radius-5px card-header" onClick={e => setActiveKey("2")}>
                            <span>Equipements</span>
                            <img src={
                                activeKey === "2" ? 
                                `${window.location.origin}/img/arrow-down.png` : 
                                `${window.location.origin}/img/arrow-up.png`
                            } alt="dropdown arrow" className={'arrow'}/>
                        </div>
                        <div className={activeKey === "2" ? 'show': 'hide'}>
                        <ul className="dropdown__text">
                            {equipments.map((equipment, index) => {
                                return (
                                    <li key={index}><span aria-hidden="false">{equipment}</span></li>
                                );
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5rem"></div>
        </div>
        </>
    );
}
export default LogementDetail;