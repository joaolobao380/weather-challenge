import { format } from 'date-fns';
import React from 'react';

interface ITimeOfDay {
    isLight: boolean;
    decidedTimeOfDay(): void;
}

export default function useTimeOfDay(): ITimeOfDay {
    const [isLight, setIsLight] = React.useState(false);

    React.useEffect(() => {
        decidedTimeOfDay();
    }, []);

    function decidedTimeOfDay() {
        if (
            format(new Date(), 'BBBB') === 'in the evening' ||
            format(new Date(), 'BBBB') === 'at night'
        ) {
            setIsLight(true);
        } else {
            setIsLight(false);
        }
    }

    return {
        isLight,
        decidedTimeOfDay,
    };
}
