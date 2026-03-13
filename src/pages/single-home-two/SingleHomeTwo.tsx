import { useContext, useEffect } from "react";
import AboutTwo from "../../sections/single-home-two/AboutTwo";
import Banner from "../../sections/single-home-two/Banner";
import BlogTwo from "../../sections/single-home-two/BlogTwo";
import CounterTwo from "../../sections/single-home-two/CounterTwo";
import FooterTwo from "../../sections/single-home-two/FooterTwo";
import Header from "../../sections/single-home-two/Header";
import PortfolioTwo from "../../sections/single-home-two/PortfolioTwo";
import ProcessTwo from "../../sections/single-home-two/ProcessTwo";
import ServiceTwo from "../../sections/single-home-two/ServiceTwo";
import SlidingTextTwo from "../../sections/single-home-two/SlidingTextTwo";
import StrickyHeaderTwo from "../../sections/single-home-two/StrickyHeaderTwo";
import TeamTwo from "../../sections/single-home-two/TeamTwo";
import TestimonialsTwo from "../../sections/single-home-two/TestimonialsTwo";
import WhyChooseTwo from "../../sections/single-home-two/WhyChooseTwo";
import FinrisContext from "../../components/context/FinrisContext";
import ContactSingle from "../../sections/single-home-one/ContactSingle";

const SingleHomeTwo: React.FC = () => {

    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setActiveSection } = context;
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);

    return (
        <div className="page-wrapper">
            <Header />
            <Banner />
            <AboutTwo />
            <ServiceTwo />
            <WhyChooseTwo />
            <CounterTwo />
            <ProcessTwo />
            <SlidingTextTwo />
            <PortfolioTwo />
            <TeamTwo />
            <TestimonialsTwo />
            <BlogTwo />
            <ContactSingle />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default SingleHomeTwo;