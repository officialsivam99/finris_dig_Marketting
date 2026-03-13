import React, { useContext, useEffect } from 'react';
import HeaderThree from '../../sections/single-home-three/HeaderThree';
import BannerThree from '../../sections/single-home-three/BannerThree';
import WelcomeThree from '../../sections/single-home-three/WelcomeThree';
import WhyChooseThree from '../../sections/single-home-three/WhyChooseThree';
import ServiceThree from '../../sections/single-home-three/ServiceThree';
import SlidingTextThree from '../../sections/home-three/SlidingTextThree';
import ProcessThree from '../../sections/single-home-three/ProcessThree';
import PortfolioThree from '../../sections/single-home-three/PortfolioThree';
import TestimonialsThree from '../../sections/single-home-three/TestimonialsThree';
import ServingThree from '../../sections/single-home-three/ServingThree';
import BrandThree from '../../sections/single-home-three/BrandThree';
import BlogThree from '../../sections/single-home-three/BlogThree';
import FooterThree from '../../sections/single-home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';
import ContactSingle from '../../sections/single-home-one/ContactSingle';
import FinrisContext from '../../components/context/FinrisContext';

const SingleHomeThree: React.FC = () => {

    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setActiveSection } = context;
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);

    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerThree />
            <WelcomeThree />
            <WhyChooseThree />
            <ServiceThree />
            <SlidingTextThree />
            <ProcessThree />
            <PortfolioThree />
            <TestimonialsThree />
            <ServingThree />
            <BrandThree />
            <BlogThree />
            <ContactSingle />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default SingleHomeThree;