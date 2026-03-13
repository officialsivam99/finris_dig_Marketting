import React from 'react';
import processShapeBg from '../../assets/images/shapes/process-two-shape-bg.png';
import processShape3 from '../../assets/images/shapes/process-two-shape-3.png';
import processShape4 from '../../assets/images/shapes/process-two-shape-4.png';
import { processData } from '../../contents/process/process';
import type { ProcessItem } from '../../contents/process/processType';
import TextAnimation from '../../components/elements/TextAnimation';

const ProcessTwo: React.FC = () => {
  return (
    <section className="process-two">
      {/* Backgrounds */}
      <div
        className="process-two__shape-bg"
        style={{ backgroundImage: `url(${processShapeBg})` }}
      ></div>

      <div className="process-two__shape-3 float-bob-x">
        <img src={processShape3} alt="Shape 3" />
      </div>

      <div className="process-two__shape-4 float-bob-y">
        <img src={processShape4} alt="Shape 4" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title-two text-center sec-title-animation animation-style1">
          <div className="section-title-two__tagline-box justify-content-center">
            <div className="section-title-two__tagline-icon-box">
              <div className="section-title-two__tagline-icon-1"></div>
              <div className="section-title-two__tagline-icon-2"></div>
            </div>
            <span className="section-title-two__tagline">Working Process</span>
          </div>
          <h2 className="section-title-two__title title-animation">
            <TextAnimation text='We use the most effective' textColor='black' isSpan={false} />
            <TextAnimation text='methods to build a brand' textColor='#6232F8' isSpan={false} />

          </h2>
        </div>

        {/* Process List */}
        <div className="process-two__inner">
          <ul className="list-unstyled row">
            {processData.map((item: ProcessItem) => (
              <li
                key={item.id}
                className={`col-xl-3 col-lg-6 col-md-6 wow ${item.animation}`}
                data-wow-delay="100ms"
              >
                <div className="process-two__single">
                  <div
                    className={
                      item.shape.includes('shape-1')
                        ? 'process-two__shape-1'
                        : 'process-two__shape-2'
                    }
                    style={{ backgroundImage: `url(${item.shape})` }}
                  ></div>

                  <div className="process-two__icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <h3 className="process-two__title">{item.title}</h3>
                  <p className="process-two__text">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessTwo;
