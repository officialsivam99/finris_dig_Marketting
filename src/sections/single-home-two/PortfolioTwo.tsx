import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { portfolioItems } from '../../contents/portfolio/portfolio';
import type { PortfolioItem } from '../../contents/portfolio/portfolioType';
import TextAnimation from '../../components/elements/TextAnimation';

const PortfolioTwo: React.FC = () => {
    return (
        <section className="portfolio-two" id='portfolio'>
            <div className="portfolio-two__wrap">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Portfolio</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='We successfully delivered the optimal' textColor='black' isSpan={false} />
                        <TextAnimation text={`solution for our client' s case study.`} textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>

                {/* Swiper Section */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        992: { slidesPerView: 3, spaceBetween: 10 },
                        1300: { slidesPerView: 3, spaceBetween: 10 },
                    }}
                >
                    {portfolioItems.map((item: PortfolioItem) => (
                        <SwiperSlide key={item.id} >
                            <div className="portfolio-two__single">
                                <div className="portfolio-two__img">
                                    <img src={item.img} alt={item.title} />
                                    <div className="portfolio-two__content">
                                        <div className="portfolio-two__title-box">
                                            <ul className="list-unstyled portfolio-two__meta">
                                                {item.tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <Link to="#">{tag}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="portfolio-two__title">
                                                <Link to={item.link}>{item.title}</Link>
                                            </h3>
                                        </div>
                                        <div className="portfolio-two__btn-box">
                                            <Link
                                                to={item.link}
                                                className="portfolio-two__btn thm-btn thm-btn-two"
                                            >
                                                <span className="icon-right"></span> View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PortfolioTwo;
