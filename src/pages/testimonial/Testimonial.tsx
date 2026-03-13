import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import TestimonialMain from '../../sections/testimonial/TestimonialMain';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';

const Testimonial: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Testimonials' breadcrumb='Our Testimonials' />
            <TestimonialMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Testimonial;
