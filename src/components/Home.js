// rfce
import React from 'react';
import "../assets/CSS/Home.css";
import SlideShow from './SlideShow';
import { Link, useNavigate } from 'react-router-dom';
import DataLoad from '../hooks/DataLoad';

function Home() {
    const {data} = DataLoad("home-card");
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-container">
                <SlideShow />
            </div>

            <div className="home-row">
                <div className="home-card">
                    <div className="home-card-heading">Sign In</div>
                    <div className="home-card-image"> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" alt="" /> </div>
                    <div className="home-card-shop-now" onClick={e => navigate('/login')} >Sign In</div>
                </div>
                {
                    data.map((index) => (
                        <div className="home-card">
                            <div className="home-card-heading">{index.heading}</div>
                            <div className="home-card-image"> <img src={index.image} alt="" /> </div>
                            <div className="home-card-shop-now">
                                <Link to={`/productList/${index.heading}`} >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    ))
                }
                <div className="home-card">
                    <div className="home-card-heading">Deals & Promotions</div>
                    <div className="home-card-image"> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" alt="" /> </div>
                    <div className="home-card-shop-now">Shop now</div>
                </div>
            </div>
        </div >
    )
}

export default Home;
