import React from 'react';
import { Link } from 'react-router';
import { servicesTow } from '../../contents/service/service';
import type { ServicesTow } from '../../contents/service/type';
import TextAnimation from '../../components/elements/TextAnimation';
import { motion } from "framer-motion"
const ServiceTwo: React.FC = () => {
    return (
        <section className="services-two " id='services' style={{ paddingTop: '120px' }}>
            <div className="services-two__bg-shape"></div>
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Services</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='We deliver top-tier business' textColor='black' isSpan={false} />
                        <TextAnimation text='plans and strategic solutions' textColor='#6232F8' isSpan={false} />

                    </h2>
                </div>

                {/* Service Cards */}
                <div className="row">
                    {servicesTow.map((service: ServicesTow) => (
                        <motion.div
                            key={service.id}
                            className="col-xl-3 col-lg-6 col-md-6"
                            initial={{ y: service?.id % 2 === 0 ? -60 : 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                        >
                            <div className="services-two__single">
                                <div className="services-two__icon">
                                    <img src={service.icon} alt={service.title} />
                                </div>

                                <h3 className="services-two__title">
                                    <Link to={service.link}>{service.title}</Link>
                                </h3>

                                <p className="services-two__text">{service.description}</p>

                                <div className="services-two__btn-box">
                                    <Link to={service.link} className="services-two__btn thm-btn thm-btn-two">
                                        <span className="icon-right"></span> Know More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTwo;
