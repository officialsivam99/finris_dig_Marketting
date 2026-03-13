import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ServiseInner from '../../sections/service/ServiseInner';
import WhyChooseInner from '../../sections/service/WhyChooseInner';
import ContactInner from '../../sections/service/ContactInner';
import FaqInner from '../../sections/service/FaqInner';
import PricingInner from '../../sections/service/PricingInner';

const Service:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Services' breadcrumb='Our Services' />
            <ServiseInner />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
            <PricingInner />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Service;
