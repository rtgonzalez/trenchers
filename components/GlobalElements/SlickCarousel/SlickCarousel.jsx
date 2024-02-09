import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const SlickCarousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        // Add other settings as needed
    };

    return (
        <div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={item.img.url}
                            alt={item.img.alt}
                            className="w-full h-full"
                            fill
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center transition-all">
                            <div className="text-white">
                                <h3 className="text-xl">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickCarousel;
