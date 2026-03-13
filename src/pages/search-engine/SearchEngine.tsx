import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import SearchEngineMain from '../../sections/search-engine/SearchEngineMain';

const SearchEngine: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Search Engine' subtitle='Optimization' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Search Engine Optimization' />
            <SearchEngineMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default SearchEngine;
