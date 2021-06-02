import React, { useState, useEffect } from "react";
import '../Home/home.scss'; 
import Header from '../Header/header';
import Rates from './rates'

import Carousel from 'react-bootstrap/Carousel'

const LogementDetail = ({ match }) => {
    const [logementById, setLogements] = useState({});
    const [tags, setTags] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [pictures, setPictures] = useState([]);

  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch(`/api/logements/${match.params.id}`);
        const data = await response.json();
        setLogements(data);
        setTags(data.tags);
        setEquipments(data.equipments);
        setPictures(data.pictures);
    }

    //Splt string and get the index of string
    //Ex: Alexis Grimonprez
    const getNameIndex = (str, index) => {
        let name = str.split(" ");
        return name[index];
    }
    return (
        <>
        <Header isHomePage={false}></Header>
        <div className="mt-2rem"></div>
        <div className="container">
            
            <Carousel>
            {pictures.map((picture, index) => {
            return (
                <Carousel.Item interval={1000} key={index}>
                    <img
                    className="coverImg"
                    src={picture}
                    alt={`${index} slide`}
                    key={`${index}`}
                    />
                </Carousel.Item>
            )
            })}
            </Carousel>

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
                <div className="col-md-5custom dropdown">
                    <header>
                        <span>Description</span>
                        <img src={`${window.location.origin}/img/arrow-up.png`} alt="Dropdown arrow"/>
                    </header>
                    <p className="dropdown__text">{logementById.description}</p>
                </div>
                <div className="col-md-5custom dropdown">
                    <header>
                        <span>Equipements</span>
                        <img src={`${window.location.origin}/img/arrow-up.png`} alt="Dropdown arrow"/>
                    </header>
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
        </>
    );
}
export default LogementDetail;