import React, { useContext } from 'react';
import { Link } from 'react-router';

import logo2 from '../../assets/images/resources/logo-2.png';
import FinrisContext from '../../components/context/FinrisContext';
import ManuList from '../common/ManuList';

const Header: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setIsMobile, setIsSearch } = context;
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@finris.online">info@finris.online</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/">
                                    <img src={logo2} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                        <span className="main-menu-two__search searcher-toggler-box icon-search-1"></span>
                                    </div>
                                    <div className="main-menu-two__cart-box">
                                        <Link to="/cart" className="main-menu-two__cart icon-shopping-cart"></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link to="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
