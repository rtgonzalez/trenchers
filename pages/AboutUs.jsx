import { AboutUs, FixedBackground } from 'components/index';

const aboutUs = () => {
    return (
        <FixedBackground dynamicClasses="ctsm-img-bg-filter-2">
            <section className="container flex flex-col mt-40 mb-10">
                <AboutUs />
            </section>
        </FixedBackground>
    );
};

export default aboutUs;
