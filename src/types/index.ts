export interface ITimeOfDay {
    isLight: boolean;
}

export interface IWeatherCurrent {
    currentWeather?: any;
    getCurrentWeather(): void;
    isLoading: boolean;
}

export interface ITimeOfDayHooks {
    isLight: boolean;
    decidedTimeOfDay(): void;
}
