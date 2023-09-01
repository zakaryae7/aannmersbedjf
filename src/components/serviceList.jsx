import React from 'react';
import servicesData from './servicesData'; // Check the import path

const ServiceList = () => {
    // Combine all miniservices from all services into a single array
    const allMiniservices = servicesData.flatMap((service) => service.miniservices || []);

    // Remove duplicate miniservices
    const uniqueMiniservices = [...new Set(allMiniservices)];

    return (
        <div>
            <h2>Available Miniservices:</h2>
            <ul>
                {uniqueMiniservices.length > 0 ? ( // Check if there are unique miniservices
                    uniqueMiniservices.map((miniservice, index) => (
                        <li key={index}>{miniservice}</li> // Map and display unique miniservices
                    ))
                ) : (
                    <li>No miniservices available</li> // Display this message if there are no miniservices
                )}
            </ul>
        </div>
    );
};

export default ServiceList;
