import React, { useState } from "react";

const Galerie = ({ pictures }) => {
    const [currImg, setCurrImg] = useState(0);
    
    const handleBackImg = (currImg) => {
        if(currImg > 0){
            setCurrImg(currImg - 1);
        }
        //First img to last
        if(currImg === 0){
            setCurrImg(pictures.length - 1);
        }
    }

    const handleNextImg = (currImg) => {
        if(currImg < pictures.length - 1){
            setCurrImg(currImg + 1);
        }
        //Last img to first
        if(currImg === pictures.length -1){
            setCurrImg(0)
        }
    }

    return (
        <>
        <div className="carousel">
            <div 
                className="carouselInner" 
                style={{ backgroundImage: `url(${pictures[currImg]})` }}>
                <div 
                    className="left" 
                    onClick={() => {
                        handleBackImg(currImg);
                    }}>
                    <img src={`${window.location.origin}/img/arrow-back.png`} className="hideOnMobile"/>
                    <img src={`${window.location.origin}/img/arrow-back-mini.png`} className="showOnMobile"/>
                </div>
                <div className="center">
                    <p className="currImgIndex">{currImg + 1} / {pictures.length}</p>
                </div>
                <div 
                    className="right"
                    onClick={() => { 
                        handleNextImg(currImg);
                    }}>
                    <img src={`${window.location.origin}/img/arrow-next.png`} className="hideOnMobile"/>
                    <img src={`${window.location.origin}/img/arrow-next-mini.png`} className="showOnMobile"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Galerie;