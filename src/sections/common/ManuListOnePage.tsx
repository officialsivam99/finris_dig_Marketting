import React, { useContext } from 'react';
import { Link } from 'react-router';
import { navItems } from '../../contents/nav/nav';
import type { NavItem } from '../../contents/footer/footerType';
import FinrisContext from '../../components/context/FinrisContext';
const ManuListOnePage: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { scrollToSection, activeSection } = context;
    return (
        <ul className="main-menu__list">
            {
                navItems.map((item: NavItem, i) => <li key={i} className={item?.linkId === activeSection ? 'current' : ''}>
                    <Link
                        to={`#${item.linkId}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.linkId);
                        }}
                    >
                        {item.navItem}
                    </Link>
                </li>)
            }
        </ul>
    );
}
export default ManuListOnePage;