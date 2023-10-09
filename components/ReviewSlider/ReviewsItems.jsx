import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import 'swiper/swiper-bundle.min.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import styles from './ReviewSlider.module.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const ReviewsItems = ({ reviews }) => {
    const title = reviews.title;
    const reviewsList = reviews.reviewsList;
    const mergeStrings = (array) => array.map((elem) => `${elem}`).join(' ');
    return (
        <div className={styles['review-wrapper']}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
            >
                <ul>
                    {reviewsList.map((review) => (
                        // eslint-disable-next-line react/jsx-key
                        <li>
                            <SwiperSlide>
                                <h1 className="black-title">{title}</h1>
                                <h2 className="black-text">
                                    {review.socialMedia}
                                </h2>
                                <h3 className="black-text">
                                    <AiFillStar className="yellow-color-text" />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </h3>
                                <h3 className="black-text">
                                    {mergeStrings([
                                        review.author,
                                        review.location
                                    ])}
                                </h3>

                                <p
                                    className={mergeStrings([
                                        'black-text',
                                        styles['reviews-opinion-text']
                                    ])}
                                >
                                    <RiDoubleQuotesL />
                                    {review.opinion}
                                    <RiDoubleQuotesR />
                                </p>
                            </SwiperSlide>
                        </li>
                    ))}
                </ul>
            </Swiper>
        </div>
    );
};

export default ReviewsItems;
