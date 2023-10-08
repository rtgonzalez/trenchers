import dynamic from 'next/dynamic';
import useSWR from 'swr';

function LocationMap() {
    const Map = dynamic(
        () => import('./Map'), //
        { ssr: false } // This line is important. It's what prevents server-side render
    );
    const fetcher = (...args) =>
        fetch(...args).then((response) => response.json());
    const { data, error } = useSWR('/api/location', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    const infoMap = JSON.parse(data);
    const lat = infoMap.location.infoMap.coordinates[1];
    const long = infoMap.location.infoMap.coordinates[0];
    const title = infoMap.location.infoMap.name;

    const location =
        infoMap.location.neighborhood +
        '  ' +
        infoMap.location.streetAddress +
        ' , ' +
        infoMap.location.addressLocality;
    ' , ' + infoMap.location.addressRegion;

    return (
        <>
            <Map lat={lat} long={long} title={title} description={location} />
        </>
    );
}

export default LocationMap;
