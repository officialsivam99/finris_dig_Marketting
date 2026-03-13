import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import CheckoutMain from '../../sections/checkout/CheckoutMain';

const Checkout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Checkout' subtitle='Page' breadcrumb='Checkout' />
            <CheckoutMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Checkout;
