import React from 'react';

import * as Location from 'expo-location';

interface ILocationCurrent {
    getLocationCurrent(): void;
    location: any;
}

export default function useLocationCurrent(): ILocationCurrent {
    const [lat, setLat] = React.useState(0);
    const [long, setLong] = React.useState(0);



    return {
        getLocationCurrent,
        location,
    };
}
