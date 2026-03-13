import React from 'react';
import Banner from '../../sections/home-two/Banner';
import AboutTwo from '../../sections/home-two/AboutTwo';
import ServiceTwo from '../../sections/home-two/ServiceTwo';
import WhyChooseTwo from '../../sections/home-two/WhyChooseTwo';
import CounterTwo from '../../sections/home-two/CounterTwo';
import ProcessTwo from '../../sections/home-two/ProcessTwo';
import SlidingTextTwo from '../../sections/home-two/SlidingTextTwo';
import PortfolioTwo from '../../sections/home-two/PortfolioTwo';
import TeamTwo from '../../sections/home-two/TeamTwo';
import TestimonialsTwo from '../../sections/home-two/TestimonialsTwo';
import BlogTwo from '../../sections/home-two/BlogTwo';
import FooterTwo from '../../sections/home-two/FooterTwo';
import Header from '../../sections/home-two/Header';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';

const HomeTwo: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Banner />
            <AboutTwo />
            <ServiceTwo />
            <WhyChooseTwo />
            <CounterTwo />
            <ProcessTwo />
            <SlidingTextTwo />
            <PortfolioTwo />
            <TeamTwo />
            <TestimonialsTwo />
            <BlogTwo />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default HomeTwo;

