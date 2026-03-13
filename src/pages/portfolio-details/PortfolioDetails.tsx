import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import PortfolioDMain from '../../sections/portfolio/PortfolioDMain';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';

const PortfolioDetails:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Portfolio' subtitle='Details' breadcrumb='Portfolio Details' />
            <PortfolioDMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default PortfolioDetails;
