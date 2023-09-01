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
                {uniqueMiniservices.length > 0 ? (
                    uniqueMiniservices.map((miniservice, index) => (
                        <li key={index}>{miniservice}</li>
                    ))
                ) : (
                    <li>No miniservices available</li>
                )}
            </ul>
        </div>
    );
};

export default ServiceList;
