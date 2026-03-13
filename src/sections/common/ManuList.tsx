import React from 'react';
import { SERVICES_LINKS } from '../../contents/nav/nav';
import { Link } from 'react-router';
const ManuList: React.FC = () => {
    return (
        <ul className="main-menu__list">
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/faq">FAQ</Link>
            </li>
            <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                    {
                        SERVICES_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            {/* <li className="dropdown">
                <a href="#">Shop</a>
                <ul>
                    {
                        SHOP_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li> */}
            {/* <li className="dropdown">
                <a href="#">Blog</a>
                <ul>
                    {
                        BLOG_LINKS.map(Item => <li key={Item?.id}  >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li> */}
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}
export default ManuList;
