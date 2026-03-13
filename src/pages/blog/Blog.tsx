import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import BlogMain from '../../sections/blog/BlogMain';

const Blog: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Blog;
