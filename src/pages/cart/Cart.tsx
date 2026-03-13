import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import CartMain from '../../sections/cart/CartMain';

const Cart: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Cart' subtitle='Page' breadcrumb='cart' />
            <CartMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Cart;
