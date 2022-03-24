import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';

interface INavigationProps {
}

const Navigation: React.FC<INavigationProps> = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
};

const Stack = createNativeStackNavigator()

const StackNavigator: React.FC = () => {

    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Group screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name='home'
                    component={Home}
                />

            </Stack.Group>
        </Stack.Navigator>
    )
}



export default Navigation;
