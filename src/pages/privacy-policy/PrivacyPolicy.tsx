import React from "react";
import Header from "../../sections/home-two/Header";
import BannerCommon from "../../sections/common/BannerCommon";
import FooterCommon from "../../sections/common/FooterCommon";
import StrickyHeaderTwo from "../../sections/home-two/StrickyHeaderTwo";
import PrivacyPolicyMain from "../../sections/legal/PrivacyPolicyMain";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <BannerCommon
        title="Privacy"
        subtitle="Policy"
        breadcrumb="Privacy Policy"
      />
      <PrivacyPolicyMain />
      <FooterCommon />
      <StrickyHeaderTwo />
    </div>
  );
};

export default PrivacyPolicy;
