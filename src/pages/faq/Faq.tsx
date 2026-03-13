import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import FaqMain from '../../sections/faq/FaqMain';

const Faq: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Faq' breadcrumb='Our Faq' />
            <FaqMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Faq;
