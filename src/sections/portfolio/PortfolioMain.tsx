import React from "react";

import catImg from "../../assets/images/resources/cta-one-img-1.png";
import BGImg from "../../assets/images/shapes/cta-one-shape-bg.png";
import { Link } from "react-router";
import { portfolioPageData } from "../../contents/portfolio/portfolio";
import type { Portfolio } from "../../contents/portfolio/portfolioType";

const PortfolioMain: React.FC = () => {
    return (
        <>
            <section className="portfolio-page">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-icon-box">
                                <div className="section-title__tagline-icon-1"></div>
                                <div className="section-title__tagline-icon-2"></div>
                            </div>
                            <span className="section-title__tagline">Our Portfolio</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Explore our case studies to see how we've successfully <br />
                            solved challenges for our clients.
                        </h2>
                    </div>

                    {/* Portfolio Grid */}
                    <ul className="row list-unstyled">
                        {portfolioPageData.map((item: Portfolio) => (
                            <li key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                                <div className="portfolio-page__single">
                                    <div className="portfolio-page__single-inner">
                                        {/* Case Info */}
                                        <div className="portfolio-page__case-box">
                                            <p className="portfolio-page__case-text">
                                                Case <span className="portfolio-page__case-count"></span>
                                            </p>
                                            <div className="portfolio-page__case-border"></div>
                                        </div>

                                        {/* Portfolio Content */}
                                        <div className="portfolio-page__content">
                                            <p className="portfolio-page__sub-title">{item.category}</p>
                                            <h3 className="portfolio-page__title">
                                                <Link to={item.link}>{item.title}</Link>
                                            </h3>

                                            <div className="portfolio-page__img">
                                                <img src={item.image} alt={item.title} />
                                            </div>

                                            <div className="portfolio-page__btn-box">
                                                <a href={item.link} className="portfolio-page__btn thm-btn">
                                                    <span className="icon-right"></span> View Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
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
        </>
    );
};

export default PortfolioMain;
