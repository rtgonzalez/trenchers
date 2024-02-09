import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
export default function HoverImage({ image, title, text }) {
    return (
        <div className="relative w-full h-64">
            <div className="rounded">
                <InView
                    as="div"
                    onChange={(inView, entry) => {
                        // Trigger animations based on inView and scroll direction
                    }}
                >
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // State when in view
                        // Other framer-motion props
                    />
                </InView>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-90 transition duration-300 flex justify-center items-center">
                <div className="text-center text-white opacity-0 hover:opacity-100">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
