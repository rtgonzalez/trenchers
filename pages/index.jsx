import {
    BeersClub,
    FoodDrinks,
    SpecialBeersSiders,
    HostEvents,
    Hero,
    Sports,
    Header,
    ReviewSlider,
    SpecialsHappyHours
} from 'components/index';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FoodDrinks />
                <SpecialBeersSiders />
                <HostEvents />
                <SpecialsHappyHours />
                <Sports />
                <ReviewSlider />
                <BeersClub />
            </main>
        </>
    );
}
