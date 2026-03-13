import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import shape1 from '../../assets/images/shapes/blog-two-shape-1.png';
import shape2 from '../../assets/images/shapes/blog-two-shape-2.png';
import { blogPosts } from '../../contents/blog/blog';
import type { BlogPost } from '../../contents/blog/blogType';
import TextAnimation from '../../components/elements/TextAnimation';

const BlogTwo: React.FC = () => {
    return (
        <section className="blog-two" id='blog'>
            {/* Decorative shapes */}
            <div className="blog-two__shape-1 rotate-me">
                <img src={shape1} alt="Decorative Shape 1" />
            </div>
            <div className="blog-two__shape-2 float-bob-x">
                <img src={shape2} alt="Decorative Shape 2" />
            </div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Articles</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Check out our articles to learn' textColor='black' isSpan={false} />
                        <TextAnimation text={`more about business agencies.`} textColor='#6232F8' isSpan={false} />

                    </h2>
                </div>

                <div className="blog-two__carousel owl-theme owl-carousel">
                    {/* Swiper Slider */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="blog-two__swiper"
                    >
                        {blogPosts.map((post: BlogPost) => (
                            <SwiperSlide key={post.id}>
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <img src={post.image} alt={post.title} />
                                        <div className="blog-two__plus">
                                            <Link to={post.link}>
                                                <span className="icon-plus"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <div className="blog-two__date">
                                            <p>
                                                {post.date} <span className="icon-calendar"></span>
                                            </p>
                                        </div>
                                        <div className="blog-two__content-inner">
                                            <ul className="list-unstyled blog-two__tag">
                                                {post.tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <p>{tag}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="blog-two__title">
                                                <Link to={post.link}>{post.title}</Link>
                                            </h3>
                                            <p className="blog-two__text">{post.text}</p>
                                        </div>
                                        <div className="blog-two__read-more">
                                            <div className="blog-two__read-more-line"></div>
                                            <Link to={post.link} className="blog-two__read-more-text">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Bottom Button */}
                <div className="blog-two__bottom">
                    <div className="blog-two__btn-box-two">
                        <Link to="/blog">
                            View More <span className="icon-right"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogTwo;
