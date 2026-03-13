import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import TeamDetailsMain from '../../sections/team/TeamDetailsMain';

const TeamDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamDetailsMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default TeamDetails;
