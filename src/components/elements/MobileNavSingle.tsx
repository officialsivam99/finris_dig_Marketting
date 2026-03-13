import React, { useContext } from 'react';
import logo from "../../assets/images/resources/logo-2.png";
import FinrisContext from '../context/FinrisContext';
import { Link } from 'react-router';
interface NavItem {
    linkId: string,
    navItem: string
}
const navItems: NavItem[] = [
    {
        linkId: 'home',
        navItem: 'Home'
    },
    {
        linkId: 'services',
        navItem: 'Services'
    },
    {
        linkId: 'about',
        navItem: 'About'
    },
    {
        linkId: 'portfolio',
        navItem: 'Portfolio'
    },
    {
        linkId: 'blog',
        navItem: 'Blog'
    },
    {
        linkId: 'contact',
        navItem: 'Contact'
    },
]
const MobileNavSingle: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("FinrisContext is null");

    const { isMobile, activeSection, scrollToSection, setIsMobile } = context;

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };
    const closeMobileState = () => {
        setIsMobile(false)
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

                        {
                            navItems.map((item: NavItem) => <li className={`${activeSection === item?.linkId ? 'current' : ''}`} key={item?.linkId}>
                                <Link
                                    to={`#${item.linkId}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.linkId);
                                        closeMobileState()
                                    }}
                                >
                                    {item.navItem}
                                </Link>
                            </li>)
                        }

                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link to="mailto:needhelp@finris.com">needhelp@finris.com</Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link to="tel:666-888-0000">666 888 0000</Link>
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
        </div>
    );
};

export default MobileNavSingle;
