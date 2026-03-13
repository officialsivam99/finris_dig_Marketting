import React from 'react';
import Header from '../../sections/home-one/Header';
import Banner from '../../sections/home-one/Banner';
import StrickyHeader from '../../sections/home-one/StrickyHeader';
import BrandOne from '../../sections/home-one/BrandOne';
import SlidingTextTwo from '../../sections/home-two/SlidingTextTwo';
import ServiceOne from '../../sections/home-one/ServiceOne';
import AboutOne from '../../sections/home-one/AboutOne';
import WhyChooseOne from '../../sections/home-one/WhyChooseOne';
import ProcessOne from '../../sections/home-one/ProcessOne';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import PricingOne from '../../sections/home-one/PricingOne';
import BlogOne from '../../sections/home-one/BlogOne';
import NewsLetter from '../../sections/home-one/NewsLetter';
import Footer from '../../sections/home-one/Footer';
import PortfolioOneSec from '../../sections/home-one/PortfolioOne';

const HomeOne: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Banner />
            <BrandOne />
            <ServiceOne />
            <AboutOne />
            <WhyChooseOne />
            <SlidingTextTwo />
            <ProcessOne />
            <PortfolioOneSec />
            <TestimonialOne />
            <PricingOne />
            <BlogOne />
            <NewsLetter />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default HomeOne;