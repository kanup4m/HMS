import React from 'react';
import { Link } from 'react-router-dom'
import { NavBar, List, Button } from 'antd-mobile';
import arrow from '../assets/left arrow.png'
const Item = List.Item;
const Brief = Item.Brief;
const Notification = () => {
    return (
        <>
            <NavBar className="navbar"
                mode="light"
                leftContent={[<br />,
                <Link to="/dashboard">
                    <img src={arrow} style={{ marginRight: '6px' }} />
                </Link>
                    ,
                    "Notifications", <br />,
                ]}

            >

            </NavBar>
            <List className="my-list">
                <Item
                    multipleLine
                    className="single-list"
                    wrap
                    align="bottom"
                    onClick={() => { }}
                    platform="android"
                    extra={<button className="notification-btn">Continue</button>}
                >
                    <p style={{ fontSize: 15 + "px" }}>Your form has been verified. <Brief>4 min ago</Brief></p>
                </Item>
                <Item
                    multipleLine
                    wrap
                    align="bottom"
                    onClick={() => { }}
                    platform="android"
                >
                    <p style={{ fontSize: 15 + "px" }}>Room no 101 has been allotted to you. <Brief>4 min ago</Brief></p>
                </Item>
                <Item
                    className="single-list"
                    multipleLine
                    wrap
                    align="bottom"
                    onClick={() => { }}
                    platform="ios"
                    extra={<button className="notification-btn">Continue</button>}
                >
                    <p style={{ fontSize: 15 + "px" }}>Your application for single room has been accepted. <Brief>4 min ago</Brief></p>

                </Item>
            </List>
        </>

    );
}

export default Notification;