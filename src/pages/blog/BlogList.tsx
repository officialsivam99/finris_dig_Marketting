import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import BlogListMain from '../../sections/blog/BlogListMain';

const BlogList: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Blog' subtitle='List' breadcrumb='Blog List' />
            <BlogListMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default BlogList;
