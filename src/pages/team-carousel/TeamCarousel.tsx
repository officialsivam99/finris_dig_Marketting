import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import TeamCarouselMain from '../../sections/team/TeamCarouselMain';

const TeamCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Team' subtitle='Carousel' breadcrumb='Team Carousel' />
            <TeamCarouselMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default TeamCarousel;
