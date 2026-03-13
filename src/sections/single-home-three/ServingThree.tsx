import React from "react";
import { motion } from "framer-motion"
import TextAnimation from "../../components/elements/TextAnimation";
interface ServingItem {
  id: number;
  icon: string;
  title: string;
}

const servingItems: ServingItem[] = [
  { id: 1, icon: "icon-information-technology", title: "IT Automation" },
  { id: 2, icon: "icon-technology", title: "Network Solutions" },
  { id: 3, icon: "icon-infrastructure", title: "IT Infrastructure" },
  { id: 4, icon: "icon-talk", title: "Consultant" },
  { id: 5, icon: "icon-it-processing", title: "Delivering Secure" },
  { id: 6, icon: "icon-computer-1", title: "Mobile" },
  { id: 7, icon: "icon-computer-2", title: "Computer" },
  { id: 8, icon: "icon-technology", title: "Television" },
  { id: 9, icon: "icon-efficiency", title: "Energy" },
  { id: 10, icon: "icon-growth", title: "Farming" },
  { id: 11, icon: "icon-technology-1", title: "Industries" },
  { id: 12, icon: "icon-event", title: "Events" },
];

const ServingThree: React.FC = () => {
  return (
    <section className="serving-one">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box justify-content-center">
            <div className="section-title__tagline-icon-box">
              <div className="section-title__tagline-icon-1"></div>
              <div className="section-title__tagline-icon-2"></div>
            </div>
            <span className="section-title__tagline">Our Serving</span>
          </div>
          <h2 className="section-title__title title-animation">
            <TextAnimation text="Serving Communities," textColor="black" />
            <TextAnimation text="Changing Lives" />
          </h2>
        </div>

        {/* Serving Grid */}
        <ul className="row list-unstyled">
          {servingItems.map((item) => (
            <motion.li
              key={item.id}
              initial={{ y: item?.id % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
              viewport={{ amount: 0.01, once: true }}
              className="col-xl-2 col-lg-3 col-md-6">
              <div className="serving-one__single">
                <div className="serving-one__icon">
                  <span className={item.icon}></span>
                </div>
                <h3 className="serving-one__title">{item.title}</h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServingThree;
