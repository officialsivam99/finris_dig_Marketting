import React from 'react';
import { Link, useLocation } from 'react-router';
interface Service {
    name: string;
    link: string;
}
const services: Service[] = [
    { name: "Digital Marketing", link: "/digital-marketing" },
    { name: "Web Design & Development", link: "/web-design-development" },
    { name: "Search Engine Optimization", link: "/search-engine-optimization" },
    { name: "Design & Branding", link: "/design-and-branding" },
    { name: "App Development", link: "/app-development" },
]
const ServicesList: React.FC = () => {
    const PathName = useLocation().pathname;
    return (
        <ul className="services-details__more-services-list list-unstyled">
            {services.map((item: Service, i) => (
                <li key={i} className={item?.link === PathName ? "active" : ""}>
                    <div className="icon">
                        <span className="icon-right"></span>
                    </div>
                    <p>
                        <Link to={item.link}>{item.name}</Link>
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;
