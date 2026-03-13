import React, { useContext } from 'react';
import aboutImg1 from "../../assets/images/resources/about-three-img-1.jpg"
import aboutImg2 from "../../assets/images/resources/about-three-img-2.jpg"
import aboutImg3 from "../../assets/images/shapes/about-three-shape-5.png"
import aboutImg4 from "../../assets/images/resources/about-three-client-img.jpg"
import aboutImg5 from "../../assets/images/icon/about-three-points-icon-1.png"
import aboutImg6 from "../../assets/images/icon/about-three-points-icon-2.png"
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
import { Link } from 'react-router';
import FinrisContext from '../../components/context/FinrisContext';

const AboutUsThree: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context is null")
    const { handleVideoClick } = context;
    return (
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="about-three__left" >
                            <div className="about-three__img-box">
                                <div className="about-three__img">
                                    <img src={aboutImg1} alt="" />
                                </div>
                                <div className="about-three__img-2">
                                    <img src={aboutImg2} alt="" />
                                </div>
                                <div className="about-three__experience-box">
                                    <div className="about-three__count count-box">
                                        <h3 className="count-text" ><AdvanceCountUp ending={25} /></h3>
                                    </div>
                                    <p className="about-three__count-text">Years of
                                        <br /> Experience</p>
                                </div>
                                <div className="about-three__video-link">
                                    <Link to="#"
                                        onClick={(e) => handleVideoClick(e, "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1")}
                                        className="video-popup">
                                        <div className="about-three__video-icon">
                                            <span className="icon-play-buttton"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="about-three__shape-1 rotate-me"></div>
                                <div className="about-three__shape-2"></div>
                                <div className="about-three__shape-3"></div>
                                <div className="about-three__shape-4"></div>
                                <div className="about-three__shape-5 rotate-me">
                                    <img src={aboutImg3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="about-three__right">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">About Us</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">Discover more about <span>our
                                    identity </span><br />and our work.</h2>
                            </div>
                            <p className="about-three__text">Discover who we are and what drives our passion for delivering
                                exceptional services. Learn about our mission, values, and the dedicated team behind our
                                success. </p>
                            <div className="about-three__client-and-text-box">
                                <div className="about-three__client-box">
                                    <div className="about-three__client-img">
                                        <img src={aboutImg4} alt="" />
                                    </div>
                                    <div className="about-three__client-content">
                                        <h3>David Watson</h3>
                                        <p>Founder & SEO</p>
                                    </div>
                                </div>
                                <p className="about-three__client-text">Welcome to our company! We are thrilled to share our
                                    journey and values with you.</p>
                            </div>
                            <ul className="about-three__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <img src={aboutImg5} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>Advanced Security</h3>
                                        <p>Our system incorporates the latest security protocols to protect user data
                                            and ensure privacy.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src={aboutImg6} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>Customizable Options</h3>
                                        <p>Our system incorporates the latest security protocols to protect user data
                                            and ensure privacy.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default AboutUsThree;