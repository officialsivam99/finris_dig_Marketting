import React from "react";
import Header from "../../sections/home-two/Header";
import BannerCommon from "../../sections/common/BannerCommon";
import FooterCommon from "../../sections/common/FooterCommon";
import StrickyHeaderTwo from "../../sections/home-two/StrickyHeaderTwo";
import TermsMain from "../../sections/legal/TermsMain";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <BannerCommon
        title="Terms"
        subtitle="Conditions"
        breadcrumb="Terms and Conditions"
      />
      <TermsMain />
      <FooterCommon />
      <StrickyHeaderTwo />
    </div>
  );
};

export default TermsAndConditions;
