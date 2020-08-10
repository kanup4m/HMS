import React from 'react';
import { Link } from 'react-router-dom'
import home from '../assets/home.png'
import floor from '../assets/floor.png'
const RequestSentSingle = () => {
    return (

        <div className="big-bg">
            <img src={floor} style={{ height: 100 + "vh", opacity: 0.1 }} />
            <div className="request-box" >
                <p className="request-text">Your application for single room has been submitted. You may proceed to book your room as soon as it gets accepted.</p>
            </div>
            <Link to="/"><button className="sent-btn"><img src={home} /></button></Link>
        </div>
    );
}

export default RequestSentSingle;