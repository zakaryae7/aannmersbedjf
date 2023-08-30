import React from 'react';

const ServiceList = ({ services }) => {
    return (
        <div>
            {services.map((service) => (
                <div key={service.id}>
                    <h2>{service.title}</h2>
                    <ul>
                        {service.miniservices.map((miniservice, index) => (
                            <li key={index}>{miniservice}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;