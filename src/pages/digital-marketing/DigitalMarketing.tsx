import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import CtaCommon from '../../sections/common/CtaCommon';
import DigitalMain from '../../sections/digital-marketing/DigitalMain';

const DigitalMarketing:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Digital' subtitle='Marketing' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Digital Marketing' />
            <DigitalMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default DigitalMarketing;
