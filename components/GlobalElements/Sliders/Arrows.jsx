import React from 'react';
import styles from './Slidershow.module.scss';
function Arrows({ prevSlide, nextSlide, sliderImages }) {
    // const translateImages = (sliderImage, slideIndex) => {
    //   sliderImage.forEach((image) => {
    //     image.style.transform = `translateX(${-100 * slideIndex}%)`;
    //   });
    // };
    return (
        <div className={styles['arrows']}>
            <span className={styles['prev']} onClick={prevSlide}>
                &#10094;
            </span>
            <span className={styles['next']} onClick={nextSlide}>
                &#10095;
            </span>
        </div>
    );
}

export default Arrows;
