import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import AppDevelopmentMain from '../../sections/app-development/AppDevelopmentMain';

const AppDevelopment: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='App' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='App Development' />
            <AppDevelopmentMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default AppDevelopment;
