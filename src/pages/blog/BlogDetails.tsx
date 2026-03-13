import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';
import BlogDetailsCarousel from '../../sections/blog/BlogDetailsCarousel';

const BlogDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Blog' subtitle='Details' breadcrumb='Blog Details' />
            <BlogDetailsMain />
            <BlogDetailsCarousel />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default BlogDetails;
