import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';
import 'swiper/swiper-bundle.min.css';
import { capitalizeWords } from 'utils/jsfunctions';
import GoogleWord from './GoogleWord';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const ReviewsItems = ({ reviews }) => {
    const title = reviews.title;
    const reviewsList = reviews.reviewsList;
    const mergeStrings = (array) => array.map((elem) => `${elem}`).join(' ');
    const spanStars = [];

    for (let i = 0; i < 5; i++) {
        spanStars.push(
            <span key={i}>
                <span>
                    <FaStar className="text-yellow-400" />
                </span>
            </span>
        );
    }
    return (
        <div className="w-full md:h-[20rem] h-[30rem] bg-cover text-clrblack grayscale(100%) md:my-4 my-8">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
            >
                <ul className="flex flex-col items-center justify-center space-y-4">
                    {reviewsList.map((review) => (
                        // eslint-disable-next-line react/jsx-key
                        <li>
                            <SwiperSlide>
                                <GoogleWord />
                                <h1 className="cstm-cards-title-height-line text-center text-clrblack p-2">
                                    {capitalizeWords(title)}
                                </h1>
                                <h2 className="cstm-cards-subtitle-height-line text-center text-clrblack p-2">
                                    {review.socialMedia}
                                </h2>
                                <div className="flex items-center justify-center py-2">
                                    {spanStars}
                                </div>
                                <h3 className="cstm-cards-subtitle-height-line text-center  text-clrblack p-2">
                                    {mergeStrings([
                                        review.author,
                                        review.location
                                    ])}
                                </h3>
                                <div className="flex items-center justify-center mb-6 mx-6">
                                    <p className="cstm-cards-reg-height-line text-center text-clrblack p-2">
                                        {`"${review.opinion}"`}
                                    </p>
                                </div>
                            </SwiperSlide>
                        </li>
                    ))}
                </ul>
            </Swiper>
        </div>
    );
};

export default ReviewsItems;
