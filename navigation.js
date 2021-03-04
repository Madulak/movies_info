import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Homescreen from './screens/homescreen';
import MovieDetail from './screens/movie_detail';
import Search from './screens/search';
import MovieList from './screens/movies_list';

const navigation = () => {


    const Stack = createSharedElementStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='home' component={Homescreen} />
                <Stack.Screen options={{headerShown: false}} name='movie detail' component={MovieDetail} />
                <Stack.Screen options={{headerShown: false}} name='search' component={Search} />
                <Stack.Screen options={{headerShown: false}} name='list' component={MovieList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;