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
                            className="absolute object-cover opacity-80 transition duration-500 ease-in-out  hover:backdrop-brightness-150 object-center"
                            fill
                            src={slide.url}
                            alt={slide.description}
                        />
                        <div className="backdrop-blur-md flex flex-col items-center justify-center px-0 py-[70px] box-border absolute md:w-[40%] w-[70%] h-[70%] md:left-[30%] left-[15%] md:top-[5%] top-[10%] space-y-4">
                            <h1 className="tracking-wider leading-8 md:text-4xl text-3xl font-bold text-clrwhite">
                                {slide.title}
                            </h1>
                            <p className="cstm-cards-subtitle-height-line text-clrwhite">
                                {slide.description}
                            </p>
                            <GlobalBtnAnimated
                                buttonUrl={slide.buttonUrl}
                                urlText={slide.buttonTitle}
                                target={slide.target}
                                btn="btn"
                                btnBg="btn-golden"
                                btnAnimated="btn-animated"
                                btnText="cstm-black-text"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default SlideshowAnimated;

/* & h1 {
        font-weight: 900;
        margin: 0 auto;
        max-width: 840px;
        color: var(--color-white);
        font-size: 3rem;
        line-height: 1;
        transition: all 0.3s ease;
        transform: translateY(-20px);
        opacity: 0;
    }

    & p {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: var(--color-white);
        font-size: 1.25rem;
        line-height: 1.5;
        margin: 20px auto 30px;
        max-width: 640px;
        transition: all 0.3s ease;
        transform: translateY(20px);
        opacity: 0;
    } */
