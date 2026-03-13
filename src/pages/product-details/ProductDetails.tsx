import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ProductDetailsMain from '../../sections/product-details/ProductDetailsMain';

const ProductDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Product' subtitle='Details' breadcrumb='Product Details' />
            <ProductDetailsMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default ProductDetails;
