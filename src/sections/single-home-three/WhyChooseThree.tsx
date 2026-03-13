import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import shapeBg from '../../assets/images/shapes/why-choose-one-shape-bg.png';
import icon1 from '../../assets/images/icon/why-choose-one-icon-1.png';
import icon2 from '../../assets/images/icon/why-choose-one-icon-2.png';
import icon3 from '../../assets/images/icon/why-choose-one-icon-3.png';
import icon4 from '../../assets/images/icon/why-choose-one-icon-4.png';
import img1 from '../../assets/images/resources/why-choose-one-img-1-1.jpg';
import img2 from '../../assets/images/resources/why-choose-one-img-2.jpg';

interface Feature {
    id: number;
    icon: string;
    title: string;
    text: string;
    link: string;
}

const features: Feature[] = [
    {
        id: 1,
        icon: icon1,
        title: 'Highly Expert Team',
        text: 'Cutting-edge approaches to keep your brand ahead.',
        link: '/about',
    },
    {
        id: 2,
        icon: icon2,
        title: '24/7 Customer Services',
        text: 'Unique and impactful design strategies with ',
        link: '/about',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Competitive Pricing',
        text: 'Tailored strategies: Custom solutions to meet your',
        link: '/about',
    },
];

const WhyChooseThree: React.FC = () => {
    return (
        <section className="why-choose-one pdt120" id='about'>
            <div
                className="why-choose-one__shape-bg"
                style={{ backgroundImage: `url(${shapeBg})` }}
            ></div>

            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-icon-box">
                                        <div className="section-title__tagline-icon-1"></div>
                                        <div className="section-title__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    More than 10+ years we <br /> provide{' '}
                                    <span>IT solutions</span>
                                </h2>
                            </div>

                            <p className="why-choose-one__text">
                                Managed IT Services offer a comprehensive, cost-effective solution
                                for businesses to maintain optimal IT performance while reducing
                                risk and improving security.
                            </p>

                            <ul className="list-unstyled why-choose-one__list">
                                {features.map((feature) => (
                                    <li key={feature.id}>
                                        <div className="icon">
                                            <img src={feature.icon} alt={feature.title} />
                                        </div>
                                        <div className="content">
                                            <p>
                                                <Link to={feature.link}>{feature.title}</Link>
                                            </p>
                                            <span>{feature.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div
                        className="col-xl-6 wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                    >
                        <div className="why-choose-one__right">
                            <div className="why-choose-one__circle rotate-me"></div>

                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01 }}
                                className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-one__content-one">
                                        <div className="why-choose-one__img-one">
                                            <img src={img1} alt="Why Choose Us" />
                                        </div>

                                        <div className="why-choose-one__round-text-box">
                                            <div className="why-choose-one__round-text-box-inner">
                                                <div className="why-choose-one__curved-circle  ">
                                                    <span>25+ Years Of Experience. 25+ Years Of Experience.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-one__content-two">
                                        <div className="why-choose-one__icon">
                                            <img src={icon4} alt="Experience Icon" />
                                        </div>
                                        <div className="why-choose-one__img-two">
                                            <img src={img2} alt="Our Expertise" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* End Right */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseThree;
