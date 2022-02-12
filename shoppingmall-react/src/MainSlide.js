/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Slide-img1 is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 2.0 Generic license.
 * https://www.flickr.com/photos/merlijnhoek/43697484512
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Slide-img2 is licensed under the Creative Commons Copyright-Only Dedication or Public Domain Certification license.
 * https://pixabay.com/photos/basketball-shoes-sneaker-air-jordan-3505340/
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Slide-img3 is licensed under the Creative Commons Copyright-Only Dedication or Public Domain Certification license.
 * https://pixabay.com/photos/adult-air-jordan-athlete-blur-boy-1867073/
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./image/Slide-img1.jpg";
import Slide2 from "./image/Slide-img2.jpg";
import Slide3 from "./image/Slide-img3.jpg";

const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
};

function MainSlide() {
    return (
        <StyleMainSlide>
            <Slider {...settings}>
                <img alt="" src={Slide1} />
                <img alt="" src={Slide2} />
                <img alt="" src={Slide3} />
            </Slider>
        </StyleMainSlide>
    );
}
const StyleMainSlide = styled.div`
    background-color: black;
    padding: 20px 30px 35px 30px;
`
export default MainSlide;