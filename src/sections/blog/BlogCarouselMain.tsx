import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { blogPosts } from '../../contents/blog/blog';
import type { BlogPost } from '../../contents/blog/blogType';
import { Link } from 'react-router';
const BlogCarouselMain: React.FC = () => {
    return (
        <section className="blog-carousel-page">
            <div className="container">
                <div className="blog-carousel-style owl-carousel owl-theme  ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
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
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="blog-two__swiper"
                    >
                        {blogPosts.map((post: BlogPost) => (
                            <SwiperSlide className='item' key={post.id}>
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
            </div>
        </section>
    );
};

export default BlogCarouselMain;