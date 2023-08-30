import servicesData from '../components/servicesData'
import { ServicesP } from '../components/servicesP'

function Services() {
    return (
        <div>
            <h1 className="text-center text-6xl font-medium mb-10 -mt-10">Diensten :</h1>
            {servicesData.map(servicesData => (
                <ServicesP
                    key={servicesData.key}
                    title={servicesData.title}
                    services={servicesData.miniservices}
                    btn={servicesData.btn}
                    diensten={servicesData.diensten}
                    id={servicesData.id}
                    src={servicesData.image}
                    description={servicesData.description}
                />))}
        </div>
    )
}
export default Services;