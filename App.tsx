import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Home from './src/pages/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Salsa_400Regular } from '@expo-google-fonts/salsa';
import { StatusBar } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
        Salsa_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </>
    );
}
