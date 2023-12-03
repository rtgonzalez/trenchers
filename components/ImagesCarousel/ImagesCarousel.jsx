import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ImagesCarousel = ({ images, title }) => {
    return (
        <section className="w-[98%] align-middle">
            <div>
                <h1 className="cstm-black-title">{title}</h1>
            </div>
            <div>
                <Carousel responsive={responsive} infinite={true}>
                    {images.map((image, index) => (
                        <div className="p-2" key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    height={400}
                                    width={400}
                                    className="rounded shadow opacity-80 object-cover"
                                />
                            </div>
                            <div className="m-4 flex items-center justify-center">
                                <h3 className="cstm-black-text bold">
                                    {image.description}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default ImagesCarousel;
