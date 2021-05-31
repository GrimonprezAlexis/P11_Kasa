import React, { useState, useEffect } from "react";
import '../Home/home.scss'; 
import Header from '../Header/header';


const LogementDetail = ({ match }) => {
    const [logementById, setLogements] = useState([]);
    const [tags, setTags] = useState([]);


  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch(`api/logements/${match.params.id}`);
        const data = await response.json();
        setLogements(data);
        setTags(data.tags);
    }

    const getNameIndex = (str, index) => {
        let name = str.split(" ");
        return name[index];
    }

    return (
        <>
        <Header match={match.url}></Header>
        <div className="mt-2rem"></div>
        <div className="container">
            <img src={logementById.cover} alt="Cover logement" className="coverImg"/>

            <div className="mt-2rem flexBetween">
                <section className="logementDetail">
                    <h1>{logementById.title}</h1>
                    <span className="logementDetail__location">{logementById.location}</span>
                    <ul className="logementDetail__tag">
                        {tags.map((tag, index) => {
                            return (
                                <li key={index}><span aria-hidden="false">{tag}</span></li>
                            );
                        })}
                    </ul>
                </section>

                <section>
                    {logementById.host && logementById.host.name && logementById.host.picture &&
                        <div className="logementDetail__host">
                            <span className="logementDetail__hostname">{getNameIndex(logementById.host.name, 0)} <br></br> {getNameIndex(logementById.host.name, 1)}</span>
                            <img src={logementById.host.picture} alt="Hostname" className="logementDetail__img" />                
                        </div>
                    }
                    <div className="logementDetail__rate">
                        <img src={`${window.location.origin}/img/rate_full.png`} alt="Rate full" className=""/>
                        <img src={`${window.location.origin}/img/rate_full.png`} alt="Rate full" className=""/>
                        <img src={`${window.location.origin}/img/rate_full.png`} alt="Rate full" className=""/>
                        <img src={`${window.location.origin}/img/rate_empty.png`} alt="Rate empty" className=""/>
                        <img src={`${window.location.origin}/img/rate_empty.png`} alt="Rate empty" className=""/>
                    </div>
                </section>

            </div>
        </div>
        </>
    );
}
export default LogementDetail;