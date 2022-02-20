// rfce
import React from 'react';
import "../assets/CSS/Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg" alt="" />
            </div>

            <div className="home-row">
                <Product 
                    id={100000}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg" 
                    rating={5} />
                <Product 
                id={100001}
                    title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Silver)" 
                    price={139.99} 
                    image="https://m.media-amazon.com/images/I/61sOuao57DL._AC_UY218_.jpg" 
                    rating={4} />
            </div>
            <div className="home-row">
            <Product 
            id={100002}
            title="Echo Sub - Powerful subwoofer for your Echo - requires compatible Echo device
            Echo Sub - Powerful subwoofer for your Echo - requires compatible Echo device"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/7178rOrkObL._AC_UL160_SR160,160_.jpg" 
            rating={4} />
            
            <Product 
            id={100003}
            title="Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Renewed)"
            price={325}
            image="https://m.media-amazon.com/images/I/61mXrcMU6LL._AC_UY218_.jpg" 
            rating={4} />
            
            <Product 
            id={100004}
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
            price={129.95}
            image="https://m.media-amazon.com/images/I/51PL9oQ62BL._AC_UY218_.jpg" 
            rating={4} />
            
            </div>
            <div className="home-row">
            <Product
            id={100005}
            title="Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)" 
            price={599.99} 
            image="https://m.media-amazon.com/images/I/71it2biogSS._AC_UY218_.jpg"
            rating={4}
            />
            </div>
        </div>
    )
}

export default Home;
