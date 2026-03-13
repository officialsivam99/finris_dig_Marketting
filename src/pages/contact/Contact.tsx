import React from 'react';
import Header from '../../sections/home-two/Header';
import BannerCommon from '../../sections/common/BannerCommon'; 
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ContactMain from '../../sections/contact/ContactMain';

const Contact: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <BannerCommon title='Contact' subtitle='Us' breadcrumb='Contact Us'  />
            <ContactMain  /> 
            <FooterCommon />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Contact;
