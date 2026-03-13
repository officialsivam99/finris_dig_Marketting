import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import Header from '../../sections/home-two/Header';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import AboutUsThree from '../../sections/about/AboutUsThree';
import WhyChooseA from '../../sections/about/WhyChooseA';
import CounterA from '../../sections/about/CounterA';
import TestimonialsA from '../../sections/about/TestimonialsA';
import AwardsA from '../../sections/about/AwardsA';
import CtaCommon from '../../sections/common/CtaCommon';

const About: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='About' subtitle='Us' breadcrumb='About Us' />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <TestimonialsA />
            <AwardsA />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default About;
