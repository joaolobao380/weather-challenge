import React from 'react';
import { format } from 'date-fns';

import { ITimeOfDayHooks } from '../types';

export default function useTimeOfDay(): ITimeOfDayHooks {
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
