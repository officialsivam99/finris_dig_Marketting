import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import SignupMain from '../../sections/authentication/SignupMain';

const SignUp: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Sign Up' subtitle='Page' breadcrumb='Sign Up' />
            <SignupMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default SignUp;
