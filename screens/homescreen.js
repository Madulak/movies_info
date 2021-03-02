import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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

const homescreen = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.movies.upcomingMovies);
    

    useEffect(() => {
        dispatch(movieActions.get_upcoming_movies())
    },[])

    return (
        <>
            {upcomingMovies ? 
                <LinearGradient 
                    style={styles.container}
                    colors={[colors.lightGrey, colors.darkGrey]}
                >
                    <View style={styles.searchContainer}>
                        <View>
                            <Text style={styles.movieText}>Movies</Text>
                        </View>
                        <View>
                            <AntDesign name="search1" size={24} color={colors.black} />
                        </View>
                    </View>
        
                    <FlatList
                        listKey='1'
                        ListHeaderComponent={
                            <>
                                <View>
                                    <Text style={styles.nowplayingText}>Now Playing</Text>
                                </View>
                    
                                <Upcoming_Movies upcomingMovies={upcomingMovies} />
                                <Text>
                                    Hellog
                                </Text>

                                <View>
                                    <Text>Popular</Text>
                                </View>
                                
                                <View style={{paddingVertical: 20,}}>
                                    <Popular upcomingMovies={upcomingMovies} />
                                </View>
                            </>
                        }
                    />
                </LinearGradient> :
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
    },
    
})

export default homescreen;