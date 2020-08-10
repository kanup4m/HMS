import React from 'react';
import { NavBar, Card, WingBlank, Button, Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom'
import bed from '../assets/bed.png'
import notification from '../assets/notification.png'
import step from '../assets/step2.png'

const Dashboard = () => {
    return (
        <>
            <NavBar className="navbar"
                mode="light"
                leftContent={[
                    <img src={bed} style={{ marginRight: '6px' }} />,
                    <span style={{ fontWeight: 600 }}>BMH</span>,
                ]}
                rightContent={[
                    <Link to="/notification">
                        <img src={notification} style={{ marginRight: '16px' }} />
                    </Link>
                    ,
                    <Link to="/" style={{ color: "#737373" }}>Logout</Link>,
                ]}
            >

            </NavBar>
            <div className="dash-title">
                <h2 style={{ fontSize: 26 + "px", letterSpacing: -0.52 + "px", color: "#000000", fontWeight: 700 }}>Dashboard</h2>
                <p className="dash-para">Pick your cue!</p>
                <p className="dash-line"></p>
            </div>
            <WingBlank>
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    dots={false}
                    infinite
                >
                    <div className="dash-card">
                        <h1 className="card-title">Book Room</h1>
                        <p style={{ paddingLeft: 27 + "px", paddingRight: 27 + "px" }}>After result and fee verification, <br />you may proceed to book your preference for the available rooms.</p>
                        <br />
                        <Link to="/book-room"><button className="footer-btn">Book Room</button></Link>
                    </div>
                    <div className="dash-card">
                        <h1 className="card-title">Book Offline</h1>
                        <p style={{ paddingLeft: 20 + "px", paddingRight: 20 + "px" }}>Contact college admin for the offline allotment.</p>

                    </div>
                    <div className="dash-card">
                        <h1 className="card-title">Book Room</h1>
                        <p style={{ paddingLeft: 27 + "px", paddingRight: 27 + "px" }}>After result and fee verification, <br />you may proceed to book your preference for the available rooms.</p>
                        <br />
                        <Link to="/book-room"><button className="footer-btn">Book Room</button></Link>
                    </div>

                </Carousel>
            </WingBlank>
            <img src={step} />
        </ >
    );
}

export default Dashboard;