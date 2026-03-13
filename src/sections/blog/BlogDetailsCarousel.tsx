import React, { useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import blogStar from "../../assets/images/shapes/blog-one-star.png";
import { blogCarouselData } from "../../contents/blog/blog";
import type { BlogCarouselItem } from "../../contents/blog/blogType";



const BlogDetailsCarousel: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="blog-one">
            <div className="blog-one__star zoominout">
                <img src={blogStar} alt="Decoration Star" />
            </div>
            <div className="container">
                {/* ===== Section Title ===== */}
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        Discover our latest news <br /> and <span>updates now.</span>
                    </h2>
                </div>

                {/* ===== Blog Carousel ===== */}
                <div className="blog-one__carousel owl-theme  ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {blogCarouselData.map((blog: BlogCarouselItem) => (
                            <SwiperSlide className="item" key={blog.id}>
                                <div className="blog-one__single">
                                    {/* Image */}
                                    <div className="blog-one__img">
                                        <img src={blog.image} alt={blog.title} />
                                        <div className="blog-one__plus">
                                            <Link to={blog.link}>
                                                <span className="icon-plus"></span>
                                            </Link>
                                        </div>
                                        <div className="blog-one__tags">
                                            {blog.tags.map((tag, index) => (
                                                <span key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title">
                                            <Link to={blog.link}>{blog.title}</Link>
                                        </h3>
                                        <p className="blog-one__text">{blog.description}</p>

                                        {/* User Info */}
                                        <div className="blog-one__user">
                                            <div className="blog-one__user-img">
                                                <img src={blog.userImage} alt={blog.userName} />
                                            </div>
                                            <div className="blog-one__user-content">
                                                <h5 className="blog-one__user-name">
                                                    <Link to={blog.link}>{blog.userName}</Link>
                                                </h5>
                                                <p className="blog-one__date">{blog.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="owl-nav-custom" style={{ zIndex: 111 }}>
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="owl-prev"
                            aria-label="Previous Slide"
                            type="button"
                        >
                            <span className="icon-left-arrow"></span>
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="owl-next"
                            aria-label="Next Slide"
                            type="button"
                        >
                            <span className="icon-right-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsCarousel;
