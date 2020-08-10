import React from 'react';
import './404.css'
const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div>
                    <div className="notfound-404">
                        <h1>!</h1>
                    </div>
                    <h2>Error<br />404</h2>
                </div>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <a href="#">Back to homepage</a></p>
            </div>
        </div>

    );
}

export default NotFound;