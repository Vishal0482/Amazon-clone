import React, { useState } from 'react';
import "../assets/CSS/SideBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStateValue } from "../hooks/StateProvider"

function SideBar( { width } ) {

    const [sidebar, setSidebar] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [{ basket, user }, dispatch] = useStateValue();
    var arr = user?.email.split("@") || "guest@gmail.com".split("@");

    const sidebarData = [
        {
            heading: 'Digital Content & Devices',
            items: ["Amazon Music", "Kindel E-readers & Books", "Appstore for Android"]
        },
        {
            heading: 'Shop By Department',
            items: ["Electronics", "Computers", "Smart Home", "Art & crats"]
        },
        {
            heading: 'Program & Features',
            items: ["Gift cards", "Amazon Live", "International Shopping"]
        },
        {
            heading: 'Help & Setting',
            items: ["Your Account", "Customer Service", "Sign in"]
        }
    ]

    return (
        <>
            <div className="navigation-item" onClick={showSidebar} >
                <div className="navigaion-menu">
                    <div className="navigation-menu-icon"><MenuIcon /></div>
                    {!(width <=640 ) && <div className="navigation-menu-text">All</div> }
                </div>
            </div>

            {sidebar && (
                <div className="sidebar-container">
                    <div className="sidebar">
                        <div className="sidebar-user">
                        { user ? (user?.photoURL === null ? <PersonIcon className="person-icon" /> : <img src={user?.photoURL} alt=""  className="user-image" />) : <PersonIcon className="person-icon" /> }
                        Hello, {user ? arr[0] : 'Sign In'}
                        </div>
                        <div className="sidebar-menu">

                            {sidebarData.map((data) => {
                                return (
                                    <div className="sidebar-list">
                                        <div className="sidebar-heading"> {data.heading} </div>
                                        {data.items.map((item) =>{
                                            return(
                                                <div className="sidebar-item"> {item} <ArrowForwardIosIcon fontSize="10" /> </div>   
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="cancleButton" onClick={showSidebar} >
                        <CloseIcon />
                    </div>
                </div>
            )}
        </>
    )
}

export default SideBar;
