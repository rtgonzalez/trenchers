import {
    BeersClub,
    FoodDrinks,
    SpecialBeersSiders,
    HostEvents,
    HomeHero,
    Sports,
    ReviewSlider,
    SpecialsHappyHours,
    ScrollToTopButton
} from 'components/index';

export default function Home() {
    return (
        <main>
            <HomeHero />
            <FoodDrinks />
            <SpecialBeersSiders />
            <HostEvents />
            <SpecialsHappyHours />
            <Sports />
            <ReviewSlider />
            <BeersClub />
            <ScrollToTopButton />
        </main>
    );
}
