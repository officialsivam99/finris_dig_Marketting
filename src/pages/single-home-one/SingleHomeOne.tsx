import React, { useContext, useEffect } from 'react';
import Header from '../../sections/single-home-one/Header';
import Banner from '../../sections/single-home-one/Banner';
import BrandOne from '../../sections/single-home-one/BrandOne';
import ServiceOne from '../../sections/single-home-one/ServiceOne';
import AboutOne from '../../sections/single-home-one/AboutOne';
import WhyChooseOne from '../../sections/single-home-one/WhyChooseOne';
import ProcessOne from '../../sections/single-home-one/ProcessOne';
import PortfolioOneSec from '../../sections/single-home-one/PortfolioOne';
import TestimonialOne from '../../sections/single-home-one/TestimonialOne';
import PricingOne from '../../sections/single-home-one/PricingOne';
import BlogOne from '../../sections/single-home-one/BlogOne';
import NewsLetter from '../../sections/single-home-one/NewsLetter';
import Footer from '../../sections/single-home-one/Footer';
import StrickyHeader from '../../sections/single-home-one/StrickyHeader';
import FinrisContext from '../../components/context/FinrisContext';
import ContactSingle from '../../sections/single-home-one/ContactSingle';

const SingleHomeOne: React.FC = () => {
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
            <Header />
            <Banner />
            <BrandOne />
            <AboutOne />
            <ServiceOne />
            <WhyChooseOne />
            <ProcessOne />
            <PortfolioOneSec />
            <TestimonialOne />
            <PricingOne />
            <BlogOne />
            <ContactSingle />
            <NewsLetter />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default SingleHomeOne;