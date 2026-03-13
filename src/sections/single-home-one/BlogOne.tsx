import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Import images
import starImg from "../../assets/images/shapes/blog-one-star.png";
import blogImg1 from "../../assets/images/blog/blog-1-1.jpg";
import blogImg2 from "../../assets/images/blog/blog-1-2.jpg";
import blogImg3 from "../../assets/images/blog/blog-1-3.jpg";
import userImg1 from "../../assets/images/blog/blog-one-user-1-1.jpg";
import userImg2 from "../../assets/images/blog/blog-one-user-1-2.jpg";
import userImg3 from "../../assets/images/blog/blog-one-user-1-3.jpg";
import TextAnimation from '../../components/elements/TextAnimation';

// Define blog post type
interface BlogPost {
    id: number;
    image: string;
    tags: string[];
    title: string;
    text: string;
    author: {
        name: string;
        image: string;
    };
    date: string;
    link: string;
}

const BlogOne: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    // Blog posts array
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            image: blogImg1,
            tags: ["Digital", "Technology"],
            title: "Top Strategies for Effective Time Management",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg1
            },
            date: "August 15, 2025",
            link: "/blog-details"
        },
        {
            id: 2,
            image: blogImg2,
            tags: ["Digital", "Technology"],
            title: "The Future of Technology Emerging Trends to Watch in 2025",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg2
            },
            date: "December 5, 2023",
            link: "/blog-details"
        },
        {
            id: 3,
            image: blogImg3,
            tags: ["Digital", "Technology"],
            title: "Healthy Eating Made Simple Quick and Nutritious Recipes for Busy Lives",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg3
            },
            date: "June 22, 2025",
            link: "/blog-details"
        },
        {
            id: 4,
            image: blogImg1,
            tags: ["Digital", "Technology"],
            title: "Top Strategies for Effective Time Management",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg1
            },
            date: "August 15, 2025",
            link: "/blog-details"
        },
        {
            id: 5,
            image: blogImg2,
            tags: ["Digital", "Technology"],
            title: "The Future of Technology Emerging Trends to Watch in 2025",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg2
            },
            date: "December 5, 2023",
            link: "/blog-details"
        },
        {
            id: 6,
            image: blogImg3,
            tags: ["Digital", "Technology"],
            title: "Healthy Eating Made Simple Quick and Nutritious Recipes for Busy Lives",
            text: "Discover actionable tips and techniques to enhance your productivity and manage your time more efficiently.",
            author: {
                name: "Michael Johnson",
                image: userImg3
            },
            date: "June 22, 2025",
            link: "/blog-details"
        }
    ];

    return (
        <section className="blog-one" id='blog'>
            <div className="blog-one__star zoominout">
                <img src={starImg} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Discover our latest news' textColor='black'/>
                        <TextAnimation text='and updates now.'/> 
                    </h2>
                </div>
                <div className="blog-one__carousel owl-theme ">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={1000}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {blogPosts.map((post: BlogPost) => (
                            <SwiperSlide key={post.id}>
                                <div className="item">
                                    <div className="blog-one__single">
                                        <div className="blog-one__img">
                                            <img src={post.image} alt={post.title} />
                                            <div className="blog-one__plus">
                                                <span style={{ cursor: 'pointer' }}>
                                                    <span className="icon-plus"></span>
                                                </span>
                                            </div>
                                            <div className="blog-one__tags">
                                                {post.tags.map((tag: string, index: number) => (
                                                    <span key={index}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <span style={{ cursor: 'pointer' }}>{post.title}</span>
                                            </h3>
                                            <p className="blog-one__text">{post.text}</p>
                                            <div className="blog-one__user">
                                                <div className="blog-one__user-img">
                                                    <img src={post.author.image} alt={post.author.name} />
                                                </div>
                                                <div className="blog-one__user-content">
                                                    <h5 className="blog-one__user-name">
                                                        <span style={{ cursor: 'pointer' }}>{post.author.name}</span>
                                                    </h5>
                                                    <p className="blog-one__date">{post.date}</p>
                                                </div>
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

export default BlogOne;