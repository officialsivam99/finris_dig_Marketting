import React from 'react';
import catImg from "../../assets/images/resources/cta-one-img-1.png";
import BGImg from "../../assets/images/shapes/cta-one-shape-bg.png";
import { Link } from "react-router";
const CtaCommon: React.FC = () => {
    return (
        <section className="cta-one cta-two">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src={catImg} alt="" />
                    </div>
                    <div className="cta-one__inner-content">
                        <div className="cta-one__shape-bg" style={{ backgroundImage: `url(${BGImg})` }}></div>
                        <h3 className="cta-one__title">Start your journey with our <br /> exceptional services.</h3>
                        <div className="cta-one__btn">
                            <Link to="/contact">Get Started <span className=" icon-right-arrow-1"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaCommon;