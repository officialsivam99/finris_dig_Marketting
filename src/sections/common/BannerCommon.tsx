import React from "react";
import { Link } from "react-router";
import BGShape from "../../assets/images/shapes/page-header-bg-shape.png"
// Define props so it’s reusable for different pages
interface BannerCommonProps {
    title?: string;
    subtitle?: string;
    breadcrumb?: string;
    breadcrumbLink?: string;
    breadcrumb2?: string;
    bgShape?: string;
    shapeImage?: string;
}

const BannerCommon: React.FC<BannerCommonProps> = ({
    title = "About",
    subtitle = "Us",
    breadcrumb = "About Us",
    breadcrumb2 = "",
    breadcrumbLink = "",
    bgShape = BGShape,
    shapeImage = "assets/images/shapes/page-header-shape-1.png",
}) => {
    return (
        <section className="page-header">
            {/* Background Shape */}
            <div className="page-header__bg" style={{ backgroundImage: `url(${bgShape})` }} ></div>

            {/* Floating Decorative Shape */}
            <div className="page-header__shape-1">
                <img src={shapeImage} alt="Decorative Shape" />
            </div>

            {/* Page Content */}
            <div className="container">
                <div className="page-header__inner">
                    <h2>
                        {title} <span>{subtitle}</span>
                    </h2>

                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li> <i className="icon-home"></i> <Link to="/">Home</Link> </li>
                            <li> <span></span> </li>
                            {
                                breadcrumb2 ?
                                    <>
                                        <li><Link to={breadcrumbLink}>{breadcrumb}</Link></li>
                                        <li> <span></span> </li>
                                        <li>{breadcrumb2}</li>
                                    </>
                                    :
                                    <li>{breadcrumb}</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerCommon;
