import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Card, Carousel } from 'antd';
const Dashboard = () => {
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "40px",
        slidesToShow: 1,
        speed: 500
    };
    return (
        <>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <span>Logout</span>,
                ]}
            >
                BMH
            </NavBar>
            <h1 className="dashboard">Dashboard</h1>
            <h3>Pick your cue!</h3>
            <Carousel afterChange={onChange} {...settings} >
                <div>
                    <Card bordered={false} style={{ width: 272 + "px", height: 296 + "px", textAlign: "center" }} className="dash-card">
                        <h1 style={{ color: "white" }}>Book Room </h1>
                        <p style={{ color: "white" }} className="dash-text">After result and fee verification, you may proceed to book your preference for the available rooms.</p>
                        <br /><button className="book-room">Book Room</button>

                    </Card>
                </div>
                <div>
                    <Card bordered={false} style={{ width: 272 + "px", height: 296 + "px", textAlign: "center" }} className="dash-card">
                        <h1 style={{ color: "white" }}>Book Offline</h1>
                        <p style={{ color: "white" }}>Contact college admin for the offline allotment.</p>
                        <br /><button className="book-room">Book Room</button>

                    </Card>
                </div>


            </Carousel>




        </>
    );
}

export default Dashboard;