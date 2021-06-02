import React, { useState } from "react";


const Rates = ({ logementById}) => {
    //State for manage the rate
    const [rateIsFull, setRateIsFull] = useState(false);

    const addEmptyRateImg = (parentElemId) => { 
	    let img = document.createElement('img'); 
        img.src = `${window.location.origin}/img/rate_empty.png`; 
	    document.getElementById(parentElemId).appendChild(img);
    }

    const addFullRateImg = (parentElemId) => { 
        let img = document.createElement('img'); 
        img.src = `${window.location.origin}/img/rate_full.png`; 
	    document.getElementById(parentElemId).appendChild(img);
    }
    
    //Build rating img HTML rather than number of rates
    //AddFullRate img rather than nbRatingFull associated to logementId
    //Complete with Empty Rate if number of stars != 5 (!rateIsFull)
    const appendAndGetRate = (nbRatingFull, parentElemId) => {
        const maxRates = 5;
        const nbRatingFullInt = parseInt(nbRatingFull);
        let elemId = document.getElementById(parentElemId);

        if(nbRatingFullInt && !rateIsFull){
            for (let index = 0; index < nbRatingFullInt; index++) addFullRateImg(parentElemId);
            if(elemId.children.length === nbRatingFullInt) setRateIsFull(true);
        }
        if(rateIsFull && (elemId.children.length !== maxRates)) addEmptyRateImg(parentElemId);
    }

    return (
        <>
        <div className="logementDetail__rate" id="rateListLogement">
            {appendAndGetRate(logementById.rating, 'rateListLogement')}
        </div>
        </>
    )
}

export default Rates;