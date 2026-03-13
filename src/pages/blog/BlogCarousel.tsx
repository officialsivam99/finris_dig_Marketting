import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import BlogCarouselMain from '../../sections/blog/BlogCarouselMain';

const BlogCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogCarouselMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default BlogCarousel;
