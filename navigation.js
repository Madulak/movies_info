import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Homescreen from './screens/homescreen';

const navigation = () => {


    const Stack = createSharedElementStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='home' component={Homescreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;