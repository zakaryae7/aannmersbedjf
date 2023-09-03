import servicesData from '../components/servicesData';
import { ServicesP } from '../components/servicesP';

function Services() {
    return (
        <div>
            <h1 className="text-center text-6xl font-medium mb-10 -mt-10">Diensten :</h1>
            {servicesData.map(serviceData => (
                <ServicesP
                    key={serviceData.id} // Use a unique identifier as the key
                    title={serviceData.title}
                    services={serviceData.miniservices}
                    btn={serviceData.btn}
                    diensten={serviceData.diensten}
                    id={serviceData.id}
                    src={serviceData.image}
                    description={serviceData.description}
                />
            ))}
        </div>
    );
}

export default Services;
