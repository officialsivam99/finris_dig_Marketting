import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import PricingMain from '../../sections/pricing/PricingMain';

const Pricing:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Pricing' breadcrumb='Our Pricing' />
            <PricingMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Pricing;
