import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, FlatList, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as movieActions from '../store/actions';
import { colors } from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from './modal';
import Upcoming_Movies from '../components/upcoming_movies';
import Popular from '../components/popular';

const { width, height } = Dimensions.get('window');
const UPCOMING_WIDTH = width * 0.70;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300'

const homescreen = ({navigation}) => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.movies.upcomingMovies);
    

    useEffect(() => {
        dispatch(movieActions.get_upcoming_movies())
    },[])

    const get_detail_movie = (id) => {
        navigation.navigate('movie detail', { id: id})
    }

    const get_list_of_movies = () => {
        navigation.navigate('list');
    }

    return (
        <>
            {upcomingMovies ? 
                
        
                    <FlatList
                        listKey='1'
                        ListHeaderComponent={
                            
                            <>

                            <LinearGradient 
                                style={styles.container}
                                colors={[colors.lightGrey, colors.darkGrey]}
                            >
                                <View style={styles.topContent}>
                                    <View style={styles.searchContainer}>
                                        <View>
                                            <Text style={styles.movieText}>Movies</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('search')}>
                                            <AntDesign sty={styles.icon} name="search1" size={24} color={colors.black} />
                                        </TouchableOpacity>
                                    </View>

                                    
                                </View>
                                <View>
                                    <Text style={styles.nowplayingText}>Recomendation</Text>
                                    
                                </View>
                    
                                <Upcoming_Movies get_detail_movie={get_detail_movie} upcomingMovies={upcomingMovies} />
                                

                                <View style={styles.popularContainer}>
                                    <Text style={styles.popularText}>Popular</Text>
                                    <TouchableOpacity onPress={get_list_of_movies}>
                                        <Text>See More</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{paddingVertical: 20,}}>
                                    <Popular get_detail_movie={get_detail_movie} upcomingMovies={upcomingMovies} />
                                </View>

                                <View style={styles.popularContainer}>
                                    <Text style={styles.popularText}>Action</Text>
                                </View>
                                
                                <View style={{paddingVertical: 20,}}>
                                    <Popular get_detail_movie={get_detail_movie} upcomingMovies={upcomingMovies} />
                                </View>

                                </LinearGradient>
                            </>
                        }
                    />
                 :
                <Modal />
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey,
        paddingTop: height * 0.04,
    },
    topContent: {
        
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: width * 0.05,
    },
    movieText: {
        fontSize: 24,
        color: colors.black,
    },
    nowplayingText: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: colors.darkGrey,
    },
    
    animatedTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    popularContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popularText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.lightGrey,
    }
})

export default homescreen;