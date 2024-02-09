// pages/index.js
import { FixedBackground } from 'components/index';

const fixedBg = () => {
    return (
        <FixedBackground imagePath="/assets/images/place/trenchers_beers_bar_bw_4.webp">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded p-8 m-4 max-w-xs w-full z-10">
                <form>
                    {/* Form fields */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="mb-4 p-2 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 p-2 w-full"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </FixedBackground>
    );
};

export default fixedBg;
