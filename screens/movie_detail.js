import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView} from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import * as movieActions from '../store/actions';
import { colors, IMAGE_BASE_URL } from '../config';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import ListCast from '../components/list_cast';
import Trailer from '../components/trailer';
import MovieInfo from '../components/movie_info';
import Loading from './loading';

const { width, height } = Dimensions.get('window');

const movie_detail = ({route, navigation}) => {

    const {id} = route.params;
    const dispatch = useDispatch();
    const [overflow, setOverflow] = useState(false);

    const single_movie = useSelector(state => state.movies.single_movie);
    const trailer = useSelector(state => state.movies.trailer);
    const cast = useSelector(state => state.movies.cast);
    
    useEffect(() => {
        dispatch(movieActions.get_credit(id))
        dispatch(movieActions.get_trailer(id))
        dispatch(movieActions.get_detail_movie(id))
    },[id])

    const goBackHandler = () => {
        dispatch(movieActions.remove_data())
        navigation.goBack()
    }

    return (
        <>
            {(single_movie && trailer) ?
                <LinearGradient 
                    style={styles.container}
                    colors={[colors.lightGrey, colors.darkGrey]}
                >
                    <FlatList
                        listKey='1'
                        ListHeaderComponent={
                            <>
                                <ImageBackground blurRadius={1} source={{uri: single_movie.backdrop_path ? IMAGE_BASE_URL +single_movie.backdrop_path: IMAGE_BASE_URL + single_movie.poster_path }} style={styles.backdrop}>
                        <View style={styles.topButtons}>
                            <TouchableOpacity onPress={goBackHandler} style={styles.iconContainer}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        
                            
                    </ImageBackground >

                    <LinearGradient style={{...styles.contentContainer, }} colors={[colors.lightGrey, 'transparent']}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: IMAGE_BASE_URL + single_movie.poster_path}} />
                        </View>

                        <View style={styles.titleContainer}>
                            <View style={{flex: 0.5, }} />
                            <View style={styles.summaryContainer}>
                                <Text numberOfLines={3} ellipsizeMode='tail' style={styles.titleText}>
                                    {single_movie.title}
                                </Text>
                                <View style={styles.ratingContainer}>
                                    <Text>{new Date(single_movie.release_date).getFullYear()}</Text>
                                    <View style={styles.rateContent}>
                                        <MaterialIcons name="star-rate" size={14} color={colors.yellow} />
                                        <Text style={styles.ratingText}>{single_movie.vote_average}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.fullContent}>
                            <Text style={styles.overviewTitleText}>Overview</Text>

                            <View style={styles.overviewContainer}>
                                <Text numberOfLines={overflow ? 20: 3} ellipsizeMode='tail' style={styles.overviewText}>{single_movie.overview}</Text>
                                <TouchableOpacity style={{alignSelf: 'flex-end', padding: 10,}} onPress={() => setOverflow(state=> !state)}>
                                    <Text style={styles.seemoreText}>See {overflow ? 'less': 'more'}</Text>
                                </TouchableOpacity>
                            </View>

                            <MovieInfo single_movie={single_movie} />

                            {cast && 
                                <View>
                                    <Text style={styles.overviewText}>Cast</Text>
                                    <ListCast cast={cast} />
                                </View>
                            }

                            <Trailer trailer={trailer} />

                        </View>
                    </LinearGradient>
                            </>
                        }
                    />

                </LinearGradient> :
                <Loading />
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    backdrop: {
        width,
        height: height * 0.35,
        resizeMode:'cover',
        // zIndex: 10,
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
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: -20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: width * 0.40,
        height: height * 0.30,
        position: 'absolute',
        left: width * 0.05,
        top: - width * 0.15,
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    titleContainer: {
        height: height * 0.21,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    summaryContainer: {
        flex: 0.5,
        justifyContent: 'space-evenly',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingText: {
        color: colors.yellow,
        fontSize: 18,
    },
    rateContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fullContent: {
        paddingTop: 10,
    },
    overviewTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    overviewText: {
        color: colors.darkGrey,
        fontSize: 17,
    },
    seemoreText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'blue',
    },
   
})

export default movie_detail;