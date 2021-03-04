import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image, Text } from 'react-native';

import NoImage from '../components/no_image_found';
import { IMAGE_BASE_URL, colors } from '../config';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FoundSearch from '../components/found_search';

import { LinearGradient } from 'expo-linear-gradient';

import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');

const movies_list = ({navigation,}) => {

    const get_detail_movie = (id) => {
        navigation.navigate('movie detail', { id: id})
    }

    const movies = useSelector(state => state.movies.upcomingMovies);

    return (
        <LinearGradient 
            style={{...styles.container}}
            colors={[colors.lightGrey, colors.darkGrey]}
        >  
            <View style={styles.topButtons}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <FoundSearch movies={movies} get_detail_movie={get_detail_movie} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    topButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10,
    },
    iconContainer: {
        padding: 5,
        borderRadius: 25,
        backgroundColor: colors.lightGrey,
    },
})

export default movies_list;