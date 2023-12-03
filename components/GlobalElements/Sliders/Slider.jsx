import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Dots from './Dots';
import Arrows from './Arrows';
import styles from './Slidershow.module.scss';

function Slider({ sliderImages, len }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles['slider-container']}>
            <SliderContent
                activeIndex={activeIndex}
                sliderImages={sliderImages}
            />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
                sliderImage={sliderImages}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImages={sliderImages}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;
