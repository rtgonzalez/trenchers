import React from 'react';
import styles from './Slidershow.module.scss';
import { mergeStrings } from 'utils/jsfunctions';
function Dots({ activeIndex, onclick, sliderImages }) {
    return (
        <div className={styles['all-dots']}>
            {sliderImages.map((slide, index) => (
                <span
                    key={index}
                    className={`${
                        index === activeIndex
                            ? mergeStrings([
                                  styles['dot'],
                                  styles['active-dot']
                              ])
                            : styles['dot']
                    }`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    );
}

export default Dots;
