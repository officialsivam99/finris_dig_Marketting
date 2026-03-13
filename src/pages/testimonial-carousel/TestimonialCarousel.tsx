import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import TestimonialCarouselMain from '../../sections/testimonial/TestimonialCarouselMain';

const TestimonialCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Testimonial' subtitle='Carousel' breadcrumb='Testimonial Carousel' />
            <TestimonialCarouselMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default TestimonialCarousel;
