import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import footerLogo from '../../assets/images/resources/logo-2.png';
import shapeBg from '../../assets/images/shapes/site-footer-two-shape-bg.png';
import shapeStar from '../../assets/images/shapes/site-footer-two-star.png';
import { LINKSONE, LINKSTWO, LINKTHREE } from '../../contents/footer/footer';
const FooterTwo: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };
    const scrollPageTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Newsletter Section */}
            <section className="newsletter-two">
                <div className="newsletter-two__big-text">Subscribe Newsletter</div>
                <div className="container">
                    <div className="newsletter-two__inner">
                        <div className="newsletter-two__left">
                            <h2 className="newsletter-two__title">Subscribe Newsletter</h2>
                            <p className="newsletter-two__text">
                                Get the latest SEO tips and software insights straight to your <br /> inbox. Stay informed.
                            </p>
                        </div>
                        <div className="newsletter-two__right">
                            <form className="newsletter-two__form" onSubmit={handleSubmit}>
                                <div className="newsletter-two__input">
                                    <input type="text" placeholder="Enter Your Email" required />
                                </div>
                                <button type="button" className="newsletter-two__btn">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${shapeBg})` }}
                ></div>
                <div className="site-footer-two__shape-1 zoominout"></div>
                <div className="site-footer-two__shape-2 zoominout"></div>

                {/* Top Section */}
                <div className="site-footer-two__top">
                    <div className="site-footer-two__main-content">
                        <div className="container">
                            <div className="site-footer-two__main-content-inner">
                                <div className="site-footer-two__star rotate-me">
                                    <img src={shapeStar} alt="Star Shape" />
                                </div>

                                <div className="row">
                                    {/* About Widget */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget-two__about">
                                            <div className="footer-widget-two__about-logo">
                                                <Link to="/" onClick={scrollPageTop}>
                                                    <img src={footerLogo} alt="Footer Logo" />
                                                </Link>
                                            </div>
                                            <p className="footer-widget-two__about-text" style={{ color: '#ffffff', opacity: 1, marginTop: '14px', marginBottom: '18px', lineHeight: 1.7 }}>
                                                Finris helps businesses grow with practical strategy, clear execution, and measurable digital results.
                                            </p>
                                            <ul className="footer-widget-two__get-in-touch-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:info@finris.online">info@finris.online</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget-two__quick-links">
                                            <h4 className="footer-widget-two__title">Quick Links</h4>
                                            <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                {
                                                    LINKSONE.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link to={Item?.link} onClick={scrollPageTop}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Legal Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="footer-widget-two__support">
                                            <h4 className="footer-widget-two__title">Legal</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__support-list list-unstyled">
                                                {
                                                    LINKSTWO.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link to={Item?.link} onClick={scrollPageTop}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Services Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget-two__services">
                                            <h4 className="footer-widget-two__title">Our Services</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__services-list list-unstyled">
                                                {
                                                    LINKTHREE.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link to={Item?.link} onClick={scrollPageTop}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            &copy; 2025 <b>Finris</b>. All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;
