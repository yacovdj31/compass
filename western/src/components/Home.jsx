import React, { useState, useEffect } from 'react';

const Home = () => {
    const [heading, setHeading] = useState(0);

    useEffect(() => {
        const handleOrientation = (event) => {
            // Adjust according to the alpha value
            // The alpha value represents the compass degree from the North
            const { alpha } = event;
            setHeading(alpha);
        };

        // Add event listener for device orientation
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
        };
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <svg width="200" height="200" viewBox="0 0 200 200">
                {/* Home Circle */}
                <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" fill="none" />
                {/* Directions */}
                <text x="100" y="30" fill="black" textAnchor="middle" fontSize="15" transform={`rotate(${-heading}, 100, 100)`}>N</text>
                <text x="100" y="170" fill="black" textAnchor="middle" fontSize="15" transform={`rotate(${-heading}, 100, 100)`}>S</text>
                <text x="170" y="105" fill="black" textAnchor="middle" fontSize="15" transform={`rotate(${-heading}, 100, 100)`}>E</text>
                <text x="30" y="105" fill="black" textAnchor="middle" fontSize="15" transform={`rotate(${-heading}, 100, 100)`}>W</text>
                {/* Home Needle */}
                <polygon points="100,50 95,90 105,90" fill="red" transform={`rotate(${-heading}, 100, 100)`} />
                <circle cx="100" cy="100" r="5" fill="navy" />
            </svg>
        </div>
    );
};

export default Home;
