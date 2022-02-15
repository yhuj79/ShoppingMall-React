/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Slide-img is licensed under the Creative Commons license.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
};

function MainSlide() {
    return (
        <StyledMainSlide>
            <Slider {...settings}>
                <img alt="" src={require("./image/slide/Slide-img1.jpg")} />
                <img alt="" src={require("./image/slide/Slide-img2.jpg")} />
                <img alt="" src={require("./image/slide/Slide-img3.jpg")} />
                <img alt="" src={require("./image/slide/Slide-img4.jpg")} />
                <img alt="" src={require("./image/slide/Slide-img5.jpg")} />
                <img alt="" src={require("./image/slide/Slide-img6.jpg")} />
            </Slider>
        </StyledMainSlide>
    );
}
const StyledMainSlide = styled.div`
    background-color: black;
    margin: 0 150px 0;
    padding: 5px 40px 20px;
`
export default MainSlide;