import React  from "react";
import Carousel from 'react-bootstrap/Carousel'


const Galerie = ({ pictures }) => {
    return (
        <>
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
        </>
    );
}
export default Galerie;