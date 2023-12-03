import {
    BeersClub,
    FoodDrinks,
    SpecialBeersSiders,
    HostEvents,
    Hero,
    Sports,
    ReviewSlider,
    SpecialsHappyHours,
    ScrollToTopButton
} from 'components/index';

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <FoodDrinks />
                <SpecialBeersSiders />
                <HostEvents />
                <SpecialsHappyHours />
                <Sports />
                <ReviewSlider />
                <BeersClub />
                <ScrollToTopButton />
            </main>
        </>
    );
}
