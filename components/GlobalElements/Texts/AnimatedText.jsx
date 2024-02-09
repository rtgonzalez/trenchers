// components/AnimatedText.js
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedText({ text }) {
    const [wasInView, setWasInView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                setWasInView(true);
            }
        }
    });

    const getAnimationClass = () => {
        if (inView) return 'translate-y-0'; // Element is in view
        return wasInView ? 'translate-y-10' : '-translate-y-10'; // Element exited, animate based on previous state
    };

    return (
        <div
            ref={ref}
            className={`transition-all transform duration-500 ${getAnimationClass()}`}
        >
            <p>{text}</p>
        </div>
    );
}
