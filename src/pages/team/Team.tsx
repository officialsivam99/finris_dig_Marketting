import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import TeamMain from '../../sections/team/TeamMain';

const Team:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Team;
