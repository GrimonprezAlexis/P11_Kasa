import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../Home/home.scss'; 
import Header from '../Header/header';


const LogementDetail = ({ match }) => {
  const [logements, setLogements] = useState([]);
  //replace componentDidMonth
    useEffect(() => {
        fetchLogements();
    }, []);

    //Get the logements from API
    const fetchLogements = async () => {
        const response = await fetch(`api/logements/${match.params.id}`);
        const data = await response.json();
        setLogements(data);
    }

    return (
        <>
        <Header match={match.url}></Header>
        </>
    );
}
export default LogementDetail;