import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {

    const setting = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true
    }

    return (
        <Carousel {...setting}>
            <div>
                <img src='images/slider-badag.jpg' />
            </div>
            <div>
                <img src='images/slider-badging.jpg' />
            </div>
            <div>
                <img src='images/slider-scale.jpg' />
            </div>

        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 1.5rem;
    box-shadow:
        0.9px 3.8px 2.2px rgba(0, 0, 0, 0.069),
        2.1px 9.2px 5.3px rgba(0, 0, 0, 0.075),
        3.9px 17.4px 10px rgba(0, 0, 0, 0.072),
        6.9px 31px 17.9px rgba(0, 0, 0, 0.068),
        13px 58.1px 33.4px rgba(0, 0, 0, 0.066),
        31px 139px 80px rgba(0, 0, 0, 0.07)
    ;
    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }


    div {
        img {
            border: 4px solid transparent;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;

            &:hover {
                border: 4px solid rgba(249, 249, 249,0.8);
            }
        }
    }
`