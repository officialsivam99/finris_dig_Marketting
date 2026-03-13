import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import type { Swiper as SwiperType } from 'swiper';
import { teamMembersTeamPage } from '../../contents/team/team';
import type { TeamMember } from '../../contents/team/teamType';
import socialShape1 from "../../assets/images/shapes/team-page-social-shape-1.png";
import socialShape2 from "../../assets/images/shapes/team-page-social-shape-2.png";
const TeamCarouselMain: React.FC = () => {
    return (
        <section className="team-carousel-page">
            <div className="container">
                <div className="team-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
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
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        className="team-one__carousel"
                    >
                        {teamMembersTeamPage.map((member: TeamMember) => (
                            <SwiperSlide key={member.id}>
                                <div className="item">
                                    <div className="team-page__single">
                                        <div className="team-page__img-box">
                                            <div className="team-page__img">
                                                <img src={member.image} alt={member.name} />
                                            </div>
                                        </div>
                                        <div className="team-page__content">
                                            <h4 className="team-page__title">
                                                <a href={member.link}>{member.name}</a>
                                            </h4>
                                            <p className="team-page__text">{member.position}</p>
                                            <div className="team-page__social">
                                                <div className="team-page__social-shape-1">
                                                    <img src={socialShape1} alt="Social Shape" />
                                                </div>
                                                <div className="team-page__social-shape-2">
                                                    <img src={socialShape2} alt="Social Shape" />
                                                </div>
                                                <a href="#"><span className="icon-pinterest"></span></a>
                                                <a href="#"><span className="icon-linkedin"></span></a>
                                                <a href="#"><span className="icon-twitter"></span></a>
                                                <a href="#"><span className="icon-facebook"></span></a>
                                            </div>
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

export default TeamCarouselMain;