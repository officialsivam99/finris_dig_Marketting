import React, { useContext, useState } from 'react';
import logo from "../../assets/images/resources/logo-2.png";
import FinrisContext from '../context/FinrisContext';
import { Link } from 'react-router';
import { SERVICES_LINKS } from '../../contents/nav/nav';
import { motion } from "framer-motion"
const MobileNav: React.FC = () => {
    const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)

    const context = useContext(FinrisContext);
    if (!context) throw new Error("FinrisContext is null");

    const { isMobile, setIsMobile } = context;

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };
    const closeMobileState = () => {
        setIsMobile(false)
        setIsServiceOpen(false)
    }
    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content" style={{ width: '300px' }}>
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link to="/" onClick={closeNav} aria-label="logo image">
                        <img src={logo} width="140" alt="Finris Logo" />
                    </Link>
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li>
                            <Link to="/" onClick={closeMobileState}>Home</Link>
                        </li>

                        <li><Link onClick={closeMobileState} to="/about">About</Link></li>

                        <li>
                            <Link onClick={closeMobileState} to="/faq">FAQ</Link>
                        </li>

                        <li className="dropdown">
                            <Link to="#">
                                <span className={`${isServiceOpen ? 'hoverColor' : ''}`}>Services</span>
                                <button onClick={() => setIsServiceOpen(pre => !pre)} type="button" className={`${isServiceOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isServiceOpen ? 'none' : 'block'}` }}>
                                {
                                    SERVICES_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.1 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link to={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }

                            </ul>
                        </li>

                        {/* <li className="dropdown">
                            <Link to="#">
                                <span className={`${isShopOpen ? 'hoverColor' : ''}`}>Shop</span>
                                <button onClick={() => setIsShopOpen(pre => !pre)} type="button" className={`${isShopOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isShopOpen ? 'none' : 'block'}` }}>
                                {
                                    SHOP_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.1 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link to={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }
                            </ul>
                        </li> */}

                        {/* <li className="dropdown">
                            <Link to="#">
                                <span className={`${isBlogOpen ? 'hoverColor' : ''}`}>Blog</span>
                                <button onClick={() => setIsBlogOpen(pre => !pre)} type="button" className={`${isBlogOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isBlogOpen ? 'none' : 'block'}` }}>
                                {
                                    BLOG_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.2 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link to={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }
                            </ul>
                        </li> */}

                        <li><Link onClick={closeMobileState} to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link to="mailto:needhelp@finris.com">needhelp@finris.com</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-facebook-square"></Link>
                        <Link to="#" className="fab fa-pinterest-p"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MobileNav;
