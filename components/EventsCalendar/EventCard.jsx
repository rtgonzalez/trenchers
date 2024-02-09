import Image from 'next/image';
import { format } from 'date-fns';
import { convertAMPMHours } from 'utils/jsfunctions';
const EventCard = ({
    title,
    description,
    date,
    showStart,
    showEnd,
    minAge,
    imageUrl
}) => {
    function getAgeString(ageRequirement) {
        if (!ageRequirement) {
            return '21+';
        } else {
            return 'All Ages';
        }
    }
    const defaultImg = '/assets/images/backgrounds/trenchers_logo_bg.webp';
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            {imageUrl && (
                <Image
                    className="w-full h-full object-cover absolute z-0"
                    src={imageUrl}
                    alt="Event Image"
                    fill
                />
            )}
            {!imageUrl && (
                <Image
                    className="w-full h-full object-cover absolute z-0"
                    src={defaultImg}
                    alt="Event Image"
                    fill
                />
            )}
            <div className="flex flex-col justify-center items-center bg-black bg-opacity-60 absolute top-0 right-0 bottom-0 left-0 rounded">
                <div className="font-bold text-center cstm-white-subtitle ">
                    <h1>{title}</h1>
                </div>
                {description && (
                    <p className="cstm-white-text-xs">{description}</p>
                )}
                {date && (
                    <p className="cstm-white-text-xs">
                        Date: {format(new Date(date), 'MM-dd-yyyy')}
                    </p>
                )}
                {showStart && (
                    <p className="cstm-white-text-xs">
                        Show starts: {convertAMPMHours(showStart)}
                    </p>
                )}
                {showEnd && (
                    <p className="cstm-white-text-xs">
                        Show ends: {convertAMPMHours(showEnd)}
                    </p>
                )}
                {minAge && (
                    <p className="cstm-white-text-xs">
                        Min Age: {getAgeString(minAge)}
                    </p>
                )}
                <div className="px-6 pt-2 pb-2 hover:bg-gray-100">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold cstm-black-text-xs mr-2 mb-2">
                        822 N 10th Pl, Renton || The Landing
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
