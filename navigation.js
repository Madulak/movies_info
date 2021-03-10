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
        //Navigation to Different Screens
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='home' component={Homescreen} />
                <Stack.Screen name='movie detail' component={MovieDetail} />
                <Stack.Screen name='search' component={Search} />
                <Stack.Screen name='list' component={MovieList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;