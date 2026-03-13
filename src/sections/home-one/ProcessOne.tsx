import React from "react";
import { motion } from "framer-motion"
// ✅ Import all images
import topIcon from "../../assets/images/icon/process-one-top-icon-1.png";
import star from "../../assets/images/shapes/process-one-star.png";
import icon1 from "../../assets/images/icon/process-one-icon-1.png";
import icon2 from "../../assets/images/icon/process-one-icon-2.png";
import icon3 from "../../assets/images/icon/process-one-icon-3.png";
import icon4 from "../../assets/images/icon/process-one-icon-4.png";
import arrow from "../../assets/images/shapes/process-one-arrow.png";
import TextAnimation from "../../components/elements/TextAnimation";

interface ProcessItem {
    id: number;
    title: string;
    description: string;
    icon: string;

}

const processItem: ProcessItem[] = [
    {
        id: 1,
        title: `Planning for <br /> business`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon1
    },
    {
        id: 2,
        title: `Client <br /> Focused`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon2
    },
    {
        id: 3,
        title: `Business <br /> Implementation`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon3
    },
    {
        id: 4,
        title: `Business <br /> Success`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon4
    }
]
const ProcessOne: React.FC = () => {
    return (
        <section className="process-one">
            {/* Top Section */}
            <div className="process-one__top">
                <div className="container">
                    <div className="process-one__top-title-box">
                        <div className="process-one__top-icon">
                            <img src={topIcon} alt="Process Icon" />
                        </div>

                        <div className="section-title text-left sec-title-animation animation-style2">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-icon-box">
                                    <div className="section-title__tagline-icon-1"></div>
                                    <div className="section-title__tagline-icon-2"></div>
                                </div>
                                <span className="section-title__tagline">Working Process</span>
                            </div>
                            <h2 className="section-title__title title-animation">
                                <TextAnimation text="Explore Our Effortless" textColor="black" />
                                <TextAnimation text="Work Process." />
                            </h2>
                        </div>

                        <div className="process-one__star rotate-me">
                            <img src={star} alt="Star Shape" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="process-one__bottom">
                <div className="container">
                    <ul className="row list-unstyled">
                        {
                            processItem.map((process: ProcessItem) => <motion.li
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.3 * process?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={process?.id} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="process-one__single process-one__single-1">
                                    <div className="process-one__title-box">
                                        <div className="process-one__icon">
                                            <img src={process?.icon} alt="Identify Problems" />
                                        </div>
                                        <h3 className="process-one__title">
                                            {
                                                process?.title.split(" <br /> ").map((item, i) => (
                                                    <React.Fragment key={i}>
                                                        {i > 0 && <br />}
                                                        {item}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </h3>
                                    </div>
                                    <p className="process-one__text">
                                        {process?.description}
                                    </p>
                                    <div className="process-one__count"></div>
                                    <div className="process-one__arrow">
                                        <img src={arrow} alt="Arrow" />
                                    </div>
                                </div>
                            </motion.li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProcessOne;
