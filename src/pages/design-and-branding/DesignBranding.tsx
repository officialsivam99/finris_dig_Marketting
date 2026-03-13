import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon'; 
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import DesignBrandingMain from '../../sections/design-and-branding/DesignBrandingMain';

const DesignBranding: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Design &' subtitle='Branding' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Design & Branding' />
            <DesignBrandingMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default DesignBranding;
