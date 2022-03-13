import React from 'react'
import "../assets/CSS/NavigatonBar.css"
import SideBar from './SideBar';

function NavigationBar( { width } ) {
    return (
        <div className="navigation-bar">
            <div className="navigation-container">
            {!(width <=640 ) && <SideBar /> }
                <div className="navigation-item">
                    Best Seller
                </div>
                <div className="navigation-item">
                    Today's Deals
                </div>
                <div className="navigation-item">
                    New Relese
                </div>
                {!(width <=640 ) && <> <div className="navigation-item">
                    Mobiles
                </div>
                <div className="navigation-item">
                    Customer Service
                </div>
                {!(width <= 840) && <><div className="navigation-item">
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
                </div> </>}  </> }
            </div>
        </div>
    )
}

export default NavigationBar
