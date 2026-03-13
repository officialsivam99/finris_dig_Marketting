import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

interface ProgressBarsProps {
    title: string;
    value: number;
}
const Progresbar: React.FC<ProgressBarsProps> = ({ title = "", value = 80 }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 1200; // total animation time in ms
            const frameRate = 20; // update every 20ms
            const increment = end / (duration / frameRate);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setProgress(Math.round(start)); // both text + bar update together
            }, frameRate);
            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <li >
            <div className="progress-levels" ref={ref}>
                <div className="progress-box">
                    <div className="inner count-box">
                        <div className="text">{title}</div>
                        <div className="bar">
                            <div className="bar-innner">
                                <div className="skill-percent">
                                    <span className="count-text" >
                                        {progress}
                                    </span>
                                    <span className="percent">%</span>
                                </div>
                                <ProgressBar
                                    completed={progress}
                                    maxCompleted={100}
                                    bgColor="#2E72FF"
                                    baseBgColor="#f1f1f1"
                                    height="8px"
                                    isLabelVisible={false}
                                    className="progressWrapper"
                                    barContainerClassName="barContainer"
                                    animateOnRender={false} // disable internal animation
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Progresbar;