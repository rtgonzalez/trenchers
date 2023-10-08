import React from 'react';
import Image from 'next/image';
import { mergeStrings } from 'utils/jsfunctions';
import { GlobalBtnAnimated } from 'components/index';
import styles from './Slidershow.module.scss';
function SliderContent({ activeIndex, sliderImages }) {
    return (
        <section>
            {sliderImages.map((slide, index) => (
                <div
                    key={index}
                    className={`${
                        index === activeIndex
                            ? mergeStrings([styles['slides'], styles['active']])
                            : styles['inactive']
                    }`}
                >
                    <Image
                        className={styles['slide-image']}
                        fill
                        src={slide.url}
                        alt={slide.description}
                    />
                    <h2 className={styles['slide-title']}>{slide.title}</h2>
                    <h3 className={styles['slide-text']}>
                        {slide.description}
                    </h3>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
