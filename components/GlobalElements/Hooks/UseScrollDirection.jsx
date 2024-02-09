import { useState, useEffect } from 'react';

const UseScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else if (scrollTop < lastScrollTop) {
                setScrollDirection('up');
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [lastScrollTop]);

    return scrollDirection;
};
export default UseScrollDirection;
