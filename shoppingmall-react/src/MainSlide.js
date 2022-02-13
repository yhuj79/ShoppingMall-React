/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Slide-img is licensed under the Creative Commons license.
 * https://www.flickr.com/photos/merlijnhoek/43697484512
 * https://pixabay.com/photos/basketball-shoes-sneaker-air-jordan-3505340/
 * https://pixabay.com/photos/adult-air-jordan-athlete-blur-boy-1867073/
 * https://www.flickr.com/photos/luxurydesigner/24197471942/in/photostream/
 * https://www.maxpixel.net/Shoes-Nike-Jordan-1-Fashion-Sneakers-Jordan-5418992
 * https://www.kicksonfire.com/wp-content/uploads/2007/11/air-jordan-1-i-whiteblack-red-wallpaper.jpg?x58464
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./image/slide/Slide-img1.jpg";
import Slide2 from "./image/slide/Slide-img2.jpg";
import Slide3 from "./image/slide/Slide-img3.jpg";
import Slide4 from "./image/slide/Slide-img4.jpg";
import Slide5 from "./image/slide/Slide-img5.jpg";
import Slide6 from "./image/slide/Slide-img6.jpg";

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
        <StyledMainSlide>
            <Slider {...settings}>
                <img alt="" src={Slide1} />
                <img alt="" src={Slide2} />
                <img alt="" src={Slide3} />
                <img alt="" src={Slide4} />
                <img alt="" src={Slide5} />
                <img alt="" src={Slide6} />
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