import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import PortfolioMain from '../../sections/portfolio/PortfolioMain';

const Portfolio:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Portfolio' breadcrumb='Our Portfolio' />
            <PortfolioMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Portfolio;
