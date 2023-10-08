import React from 'react';
import Slider from 'react-animated-slider';
import styles from './SlideshowAnimated.module.scss';
import Image from 'next/image';
import { GlobalBtnAnimated } from 'components/index';

function SlideshowAnimated({ sliderImages }) {
    return (
        <section>
            <Slider classNames={styles}>
                {sliderImages.map((slide, index) => (
                    <div key={index} className={styles['slider-content']}>
                        <Image
                            className={styles['slide-image']}
                            fill
                            src={slide.url}
                            alt={slide.description}
                        />
                        <div className={styles['inner']}>
                            <h1>{slide.title}</h1>
                            <p>
                                {slide.description}

                                <GlobalBtnAnimated
                                    buttonUrl={slide.buttonUrl}
                                    urlText={slide.buttonTitle}
                                    target={slide.target}
                                    btn="btn"
                                    btnBg="btn-golden"
                                    btnAnimated="btn-animated"
                                    btnText="white-text"
                                />
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default SlideshowAnimated;
