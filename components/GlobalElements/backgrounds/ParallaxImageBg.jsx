import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ParallaxBackground = ({ imagePath, children }) => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxStyle = useSpring({
        transform: `translateY(${offsetY * 0.5}px)`
    });

    return (
        <animated.div
            style={{ ...parallaxStyle, backgroundImage: `url(${imagePath})` }}
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        >
            {children}
        </animated.div>
    );
};

export default ParallaxBackground;
