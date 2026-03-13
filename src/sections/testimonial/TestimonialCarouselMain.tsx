import React from 'react';
import { testimonialsPage } from '../../contents/testimonials/testimonials';
import type { TestimonialPage } from '../../contents/testimonials/type';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const TestimonialCarouselMain: React.FC = () => {
    return (
        <section className="testimonial-carousel-page">
            <div className="container">
                <div className="testimonial-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {testimonialsPage.map((t: TestimonialPage) => (
                            <SwiperSlide key={t.id}>
                                <div className="item">
                                    <div className="testimonial-one__single">
                                        {/* ✅ Client Info */}
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <img src={t.image} alt={t.name} />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-left"></span>
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-content">
                                                <p className="testimonial-one__client-name">
                                                    <a href="#">{t.name}</a>
                                                </p>
                                                <span className="testimonial-one__client-sub-title">
                                                    {t.role}
                                                </span>
                                            </div>
                                        </div>

                                        {/* ✅ Testimonial Text */}
                                        <p className="testimonial-one__text">{t.text}</p>

                                        {/* ✅ Rating Stars (React way) */}
                                        <div className="testimonial-one__rating">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="star"
                                                    style={{
                                                        color: i < t.rating ? "#FFD700" : "#ccc",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section >
    );
};

export default TestimonialCarouselMain;