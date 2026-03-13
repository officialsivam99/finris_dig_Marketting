import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import WebDesignMain from '../../sections/web-design/WebDesignMain';

const WebDesign: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Web Design &' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Web Design & Development' />
            <WebDesignMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default WebDesign;
