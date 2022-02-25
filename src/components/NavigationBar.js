import React from 'react'
import "../assets/CSS/NavigatonBar.css"
import MenuIcon from '@mui/icons-material/Menu';

function NavigationBar() {
    return (
        <div className="navigation-bar">
            <div className="navigation-container">
                <div className="navigation-item">
                    <div className="navigaion-menu">
                        <div className="navigation-menu-icon"><MenuIcon /></div>
                        <div className="navigation-menu-text">All</div>
                    </div>
                </div>
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
