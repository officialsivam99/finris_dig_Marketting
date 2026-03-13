import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/images/resources/logo-1.png';
import FinrisContext from '../../components/context/FinrisContext';
import ManuListOnePage from '../common/ManuListOnePage';
const StrickyHeader: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setIsSidebar, setIsMobile, setIsSearch } = context;
    const [isStick, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link to="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></Link>
                                <ManuListOnePage />
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                    <span className="main-menu__search searcher-toggler-box icon-search-1"></span>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link to="/contact" className="thm-btn main-menu__btn">Contact Us</Link>
                                </div>
                                <div className="main-menu__nav-sidebar-icon">
                                    <Link className="navSidebar-button" to="#" onClick={() => setIsSidebar(pre => !pre)}>
                                        <span className="icon-more"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StrickyHeader;