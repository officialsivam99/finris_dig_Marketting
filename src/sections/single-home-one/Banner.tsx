import React from 'react';
import bannerShapeOne from '../../assets/images/shapes/banner-one-shape-1.png';
import bannerShapeTwo from '../../assets/images/shapes/banner-one-shape-2.png';
import bannerShapeThree from '../../assets/images/shapes/banner-one-shape-3.png';
import bannerShapeFour from '../../assets/images/shapes/banner-one-shape-4.png';
import satisfiedClient1 from '../../assets/images/resources/banner-one-satisfied-client-1-1.jpg';
import satisfiedClient2 from '../../assets/images/resources/banner-one-satisfied-client-1-2.jpg';
import satisfiedClient3 from '../../assets/images/resources/banner-one-satisfied-client-1-3.jpg';
import bannerMainImg from '../../assets/images/resources/banner-one-img-1.png';
import TypingEffect from '../../components/elements/TypingEffect';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';

const Banner: React.FC = () => {
    return (
        <section className="banner-one" id='home'>
            <div className="banner-one__shape-bg"></div>
            <div className="banner-one__shape-bg-2"></div>
            <div className="banner-one__shape-bg-3 img-bounce"></div>
            <div className="banner-one__shape-1 text-rotate-box">
                <img src={bannerShapeOne} alt="" />
            </div>
            <div className="banner-one__shape-2 rotate-me">
                <img src={bannerShapeTwo} alt="" />
            </div>
            <div className="banner-one__shape-3 rotate-me">
                <img src={bannerShapeThree} alt="" />
            </div>
            <div className="banner-one__shape-4 float-bob-y">
                <img src={bannerShapeFour} alt="" />
            </div>
            <div className="container">
                <div className="banner-one__title-box">
                    <h5 className="banner-one__sub-title">We are ready to help you </h5>
                    <h2 className="banner-one__title">
                        Unlock Business Success with <br />
                        <TypingEffect
                            strings={[
                                'Expert Consultancy',
                                'Expert Team',
                                'Quick Solutions'
                            ]}
                            typeSpeed={100}
                            deleteSpeed={50}
                            pauseDuration={2000}
                            className=""
                            showCursor={true}
                        />
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="banner-one__left sec-title-animation animation-style3">
                            <p className="banner-one__text-1 title-animation">
                                It highlights how expert consultancy can
                                provide businesses with tailored strategies, industry insights, and practical solutions
                                to overcome challenges and achieve their goals.
                            </p>
                            <p className="banner-one__text-2 title-animation">
                                By leveraging the knowledge and expertise of consultants,
                                businesses can streamline operations, optimize resources, and stay competitive in a
                                rapidly evolving market.
                            </p>
                            <div className="banner-one__btn-and-satisfied-client-box">
                                <div className="banner-one__btn-box">
                                    <a href="/contact" className="banner-one__btn thm-btn">
                                        <span className="icon-right"></span> Get Started
                                    </a>
                                </div>
                                <div className="banner-one__satisfied-client-box">
                                    <ul className="list-unstyled banner-one__satisfied-client-list">
                                        <li>
                                            <div className="banner-one__satisfied-client-img">
                                                <img src={satisfiedClient1} alt="Client" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner-one__satisfied-client-img">
                                                <img src={satisfiedClient2} alt="Client" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner-one__satisfied-client-img">
                                                <img src={satisfiedClient3} alt="Client" />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="banner-one__satisfied-client-content">
                                        <div className="banner-one__satisfied-client-count count-box">
                                            <h4 className="count-text"><AdvanceCountUp ending={2000} durations={2} /></h4>
                                            <span className="banner-one__satisfied-client-count-plus">+</span>
                                        </div>
                                        <p className="banner-one__satisfied-client-count-text">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="banner-one__right">
                            <div className="banner-one__img">
                                <img src={bannerMainImg} alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;