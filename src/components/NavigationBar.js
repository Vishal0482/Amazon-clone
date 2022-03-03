import React from 'react'
import "../assets/CSS/NavigatonBar.css"
// import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';

function NavigationBar() {
    return (
        <div className="navigation-bar">
            <div className="navigation-container">
                <SideBar />
                <div className="navigation-item">
                    Best Seller
                </div>
                <div className="navigation-item">
                    Mobiles
                </div>
                <div className="navigation-item">
                    Today's Deals
                </div>
                <div className="navigation-item">
                    Customer Service
                </div>
                <div className="navigation-item">
                    Electronics
                </div>
                <div className="navigation-item">
                    Prime
                </div>
                <div className="navigation-item">
                    Fashion
                </div>
                <div className="navigation-item">
                    Books
                </div>
                <div className="navigation-item">
                    New Relese
                </div>
            </div>
        </div>
    )
}

export default NavigationBar
