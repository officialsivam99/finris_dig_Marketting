import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ProductMain from '../../sections/product/ProductMain';

const Product: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Products' breadcrumb='Our Products' />
            <ProductMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Product;
