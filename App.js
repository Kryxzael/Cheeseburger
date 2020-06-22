import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import Main from './view/mainPage/MainPage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} options={{ title: "Cheeseburger" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
}
