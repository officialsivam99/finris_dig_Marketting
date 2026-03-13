import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import WishlistMain from '../../sections/wishlist/WishlistMain';

const Wishlist: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Wishlist' subtitle='Page' breadcrumb='Wishlist' />
            <WishlistMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Wishlist;
