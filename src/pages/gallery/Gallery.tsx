import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import GalleryMain from '../../sections/gallery/GalleryMain';

const Gallery: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Gallery' breadcrumb='Our Gallery' />
            <GalleryMain  />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Gallery;
