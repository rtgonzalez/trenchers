import React from 'react';
import { Slideshow, Location } from 'components/index';

const Hero = () => {
    return (
        <div className="w-full flex flex-col justify-center mt-[6.8rem]">
            <div>
                <Slideshow />
            </div>
            <div className="flex items-center justify-center w-[37rem] p-[10px] font-bold min-h-[300px] bg-clrwhite rounded-lg self-center md:translate-y-[-5.5rem] translate-y-[-2.5rem]">
                <Location />
            </div>
        </div>
    );
};

export default Hero;
