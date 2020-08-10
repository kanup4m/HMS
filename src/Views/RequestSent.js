import React from 'react';
import { Link } from 'react-router-dom'
import home from '../assets/home.png'
import floor from '../assets/floor.png'
const RequestSent = () => {
    return (

        <div className="big-bg">
            <img src={floor} style={{ height: 100 + "vh", opacity: 0.1 }} />
            <div className="request-box" >
                <p className="request-text">You roommate request has been sent to <strong>NAME1</strong> and <strong>NAME 2.</strong> You can proceed as soon as both requests are accepted.</p>
            </div>
            <Link to="/"><button className="sent-btn"><img src={home} /></button></Link>
        </div>
    );
}

export default RequestSent;