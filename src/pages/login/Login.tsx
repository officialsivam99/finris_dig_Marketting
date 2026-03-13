import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import LoginMain from '../../sections/authentication/LoginMain';

const Login: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Login' subtitle='Page' breadcrumb='Login' />
            <LoginMain />
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Login;
