import React from "react";
import teamDetailsImg from "../../assets/images/team/team-details-img-1.jpg";
import teamIcon from "../../assets/images/icon/team-details-icon-1.png";
import catImg from "../../assets/images/resources/cta-one-img-1.png";
import BGImg from "../../assets/images/shapes/cta-one-shape-bg.png";
import Progresbar from "../../components/elements/Progressbar";
import { Link } from "react-router";
import AdvanceCountUp from "../../components/elements/AdvanceCountUp";

interface InfoItem {
    label: string;
    value?: string;
    link?: string;
}

interface Skill {
    name: string;
    percent: number;
}

const infoList: InfoItem[] = [
    { label: "Location", value: "Florida, New York" },
    { label: "Phone", link: "tel:12345678910", value: "+12 345 6789 10" },
    { label: "Email", link: "mailto:alison@domain.com", value: "alison@domain.com" },
    { label: "Education", value: "Masters of Ui Degree" },
];

const skills: Skill[] = [
    { name: "Strategic Marketing Planning", percent: 100 },
    { name: "Digital Marketing", percent: 70 },
    { name: "Brand Management", percent: 80 },
    { name: "Team Leadership", percent: 96 },
];

const TeamDetailsMain: React.FC = () => {
    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="row">
                        {/* LEFT IMAGE */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__left">
                                <div className="team-details__img">
                                    <img src={teamDetailsImg} alt="Team Member" />
                                    <div className="team-details__experience-box">
                                        <div className="team-details__count count-box">
                                            <p className="count-text" >
                                                <AdvanceCountUp ending={10} durations={2} />
                                            </p>
                                            <span className="team-details__count-plus">+</span>
                                        </div>
                                        <p className="team-details__experience-text">
                                            Years of <br /> Experienced
                                        </p>
                                    </div>
                                    <div className="team-details__icon">
                                        <img src={teamIcon} alt="Team Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE INFO */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__right">
                                <div className="team-details__client-name">
                                    <h3>David Smith</h3>
                                    <p>UI/UX Design</p>
                                </div>

                                {/* Info List */}
                                <ul className="team-details__client-info-list list-unstyled">
                                    {infoList.map((item, index) => (
                                        <li key={index}>
                                            <p>{item.label}:</p>
                                            {item.link ? (
                                                <a href={item.link}>{item.value}</a>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {/* Social Links */}
                                <div className="team-details__social">
                                    <a href="#">
                                        <span className="icon-pinterest"></span>
                                    </a>
                                    <a href="#">
                                        <span className="icon-linkedin"></span>
                                    </a>
                                    <a href="#">
                                        <span className="icon-twitter"></span>
                                    </a>
                                    <a href="#">
                                        <span className="icon-facebook"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OVERVIEW SECTION */}
                    <div className="team-details__bottom">
                        <h3 className="team-details__title-1">Overview</h3>
                        <p className="team-details__text-1">
                            David Smith is a seasoned Marketing Director with over a decade of experience in developing and executing
                            comprehensive marketing strategies that drive brand growth and enhance market presence.
                        </p>

                        <h3 className="team-details__title-2">Skills & Expertise</h3>
                        <p className="team-details__text-2">
                            With a strong background in digital marketing, brand management, and data-driven decision-making, Sarah
                            excels in creating innovative campaigns that resonate with target audiences and deliver measurable results.
                        </p>

                        {/* Progress Bars */}
                        <div className="team-details__progress-box">
                            <ul className="team-details__progress-list list-unstyled">
                                {skills.map((skill: Skill, index) => (
                                    <Progresbar key={index} title={skill?.name} value={skill?.percent} />
                                ))}
                            </ul>
                        </div>
                    </div>
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

export default TeamDetailsMain;
