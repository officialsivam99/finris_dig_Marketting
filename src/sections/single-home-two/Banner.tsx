import React, { useState } from 'react';
// import { Link } from 'react-router';

// Import images
import sliderShape1 from '../../assets/images/shapes/main-slider-shape-1.png';
import sliderShape2 from '../../assets/images/shapes/main-slider-shape-2.png';
import sliderShape3 from '../../assets/images/shapes/main-slider-shape-3.png';
import sliderShape4 from '../../assets/images/shapes/main-slider-shape-4.png';
import sliderImg from '../../assets/images/resources/main-slider-img-1-1.png';
import clientImg1 from '../../assets/images/resources/main-slider-satisfied-client-1-1.jpg';
import clientImg2 from '../../assets/images/resources/main-slider-satisfied-client-1-2.jpg';
import ratingLogo from '../../assets/images/resources/main-slider-rating-content-logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';


const Banner: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    // Slider items data array
    const sliderItems = [
        {
            id: 1,
            title: 'Simple Solutions',
            titleHighlight: 'Your Business Success',
            description: 'We provide expert business consultancy services, offering strategic insights and tailored solutions to drive growth, improve efficiency, and navigate challenges.',
            buttonText: 'Get Started',
            buttonLink: '/contact',
            happyClients: 2000,
            positiveRating: 30
        },
        {
            id: 2,
            title: 'Simple Solutions',
            titleHighlight: 'Your Business Success',
            description: 'We provide expert business consultancy services, offering strategic insights and tailored solutions to drive growth, improve efficiency, and navigate challenges.',
            buttonText: 'Get Started',
            buttonLink: '/contact',
            happyClients: 3000,
            positiveRating: 25,
        },
        {
            id: 3,
            title: 'Simple Solutions',
            titleHighlight: 'Your Business Success',
            description: 'We provide expert business consultancy services, offering strategic insights and tailored solutions to drive growth, improve efficiency, and navigate challenges.',
            buttonText: 'Get Started',
            buttonLink: '/contact',
            happyClients: 4000,
            positiveRating: 35
        }
    ];

    return (
        <section className="main-slider" id='home'>
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__shape-1 zoominout">
                <img src={sliderShape1} alt="" />
            </div>
            <div className="main-slider__shape-2 rotate-me">
                <img src={sliderShape2} alt="" />
            </div>
            <div className="main-slider__shape-3 float-bob-x">
                <img src={sliderShape3} alt="" />
            </div>
            <div className="main-slider__shape-4 rotate-me">
                <img src={sliderShape4} alt="" />
            </div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderItems.map((item, index) => (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div className="main-slider__img-box">
                                    <div className="main-slider__img">
                                        <img src={sliderImg} alt="" />
                                        <div className="main-slider__img-shape-box ">
                                            <div className="main-slider__img-shape-1">
                                                <div className="main-slider__img-shape-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__title-box">
                                            <h2 className="main-slider__title">Simple Solutions <br /> for <span>Your Business <br />
                                                Success</span></h2>
                                            <div className="main-slider__btn">
                                                <a href="contact.html"><span className="icon-right"></span>Get Started</a>
                                            </div>
                                        </div>
                                        <p className="main-slider__text">We provide expert business consultancy services,
                                            offering strategic <br /> insights and tailored solutions to drive growth, improve
                                            efficiency, <br /> and navigate challenges.</p>
                                        <div className="main-slider__satisfied-client-and-rating-box">
                                            <div className="main-slider__satisfied-client-box">
                                                <ul className="list-unstyled main-slider__satisfied-client-list">
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <img src={clientImg1} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <img src={clientImg2} alt="" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="main-slider__satisfied-client-content">
                                                    <div className="main-slider__satisfied-client-count count-box">
                                                        <h4 className="count-text" ><AdvanceCountUp ending={item?.happyClients} /> </h4>
                                                        <span className="main-slider__satisfied-client-count-plus">+</span>
                                                    </div>
                                                    <p className="main-slider__satisfied-client-count-text">Happy Clients </p>
                                                </div>
                                            </div>
                                            <div className="main-slider__rating-box">
                                                <div className="main-slider__rating-count count-box">
                                                    <h3 className="count-text" ><AdvanceCountUp ending={item?.positiveRating} /> </h3>
                                                    <span className="main-slider__satisfied-client-count-letter">k</span>
                                                </div>
                                                <div className="main-slider__rating-content">
                                                    <p className="main-slider__rating-content-sub-title">Positive Rating</p>
                                                    <div className="main-slider__rating-content-logo">
                                                        <img src={ratingLogo} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav " style={{ zIndex: 111 }}>
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="owl-prev"
                        aria-label="Previous Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="owl-next"
                        aria-label="Next Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Banner;