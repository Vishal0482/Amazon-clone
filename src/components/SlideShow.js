import React, { useEffect, useState } from 'react';
import "../assets/CSS/SlideShow.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SlideShow() {

    const [current, setCurrent] = useState(0);
    let slideInterval;
    const imageUrl = [
        {
            image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61WhFyxaJML._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61tMUMT88rL._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3740_.jpg"
        }
    ]

    const handleLeftClick = () => {
        setCurrent(current === 0 ? imageUrl.length - 1 : current - 1);
    };
    const handleRightClick = () => {
        setCurrent(current === imageUrl.length - 1 ? 0 : current + 1);
    };

    function auto() {
        slideInterval = setInterval(handleRightClick, 3000);
    }

    useEffect(() => {
        auto();
        return () => clearInterval(slideInterval);
    }, [current]);

    return (
        <div className="slider">
            <div className="slider-arrow left-arrow" onClick={handleLeftClick}> <ArrowBackIosIcon /> </div>
            <div className="slider-arrow right-arrow" onClick={handleRightClick} >  <ArrowForwardIosIcon /> </div>
            {imageUrl.map((slide, index) => {
                return (
                    <div>
                        {index === current && (
                            <img src={slide.image} alt={"image-" + index} className='slider-image' />
                        )}
                    </div>
                );
            })}
        </div>
    )
}

export default SlideShow;
