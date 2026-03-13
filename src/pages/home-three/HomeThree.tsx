import React from 'react';
import BannerThree from '../../sections/home-three/BannerThree';
import HeaderThree from '../../sections/home-three/HeaderThree';
import WelcomeThree from '../../sections/home-three/WelcomeThree';
import WhyChooseThree from '../../sections/home-three/WhyChooseThree';
import ServiceThree from '../../sections/home-three/ServiceThree';
import SlidingTextThree from '../../sections/home-three/SlidingTextThree';
import ProcessThree from '../../sections/home-three/ProcessThree';
import PortfolioThree from '../../sections/home-three/PortfolioThree';
import TestimonialsThree from '../../sections/home-three/TestimonialsThree';
import ServingThree from '../../sections/home-three/ServingThree';
import BrandThree from '../../sections/home-three/BrandThree';
import BlogThree from '../../sections/home-three/BlogThree';
import FooterThree from '../../sections/home-three/FooterThree';
import StrickyHeaderThree from '../../sections/home-three/StrickyHeaderThree';

const HomeThree: React.FC = () => {
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
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default HomeThree;