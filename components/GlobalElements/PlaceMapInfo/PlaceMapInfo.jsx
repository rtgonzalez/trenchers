import React from 'react';

const PlaceMapInfo = ({ content }) => {
    // Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps/place/${content.address}`;

    return (
        <div className="flex flex-col md:flex-row">
            {/* Google Maps Section */}
            <div className="flex-1">
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-gray-200 p-4 text-center">
                        <p>View on Google Maps</p>
                    </div>
                </a>
            </div>

            <div className="flex-1 p-4">
                <h2 className="text-xl font-bold">{content.name}</h2>
                <p>{content.description}</p>
            </div>
        </div>
    );
};

export default PlaceMapInfo;
