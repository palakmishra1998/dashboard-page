import React from 'react';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="not-found-link">Go Back to Home</a>
        </div>
    );
}

export default NotFound;
