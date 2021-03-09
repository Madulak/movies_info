import React from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors, IMAGE_BASE_URL } from '../config';
import { MaterialIcons } from '@expo/vector-icons';
import NoImage from './no_image_found';
const { width, height } = Dimensions.get('window');


const popular = ({upcomingMovies, get_detail_movie, genre}) => {

    const daete = (data) => {
        // console.log('{}[]{}',data.split('-')[0])
        return data;
    }

    return (
        <FlatList
            horizontal
            listKey='4'
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            data={genre ? upcomingMovies.slice(15, 19) : upcomingMovies.slice(5, 10)}
            // snapToInterval={(width * 0.55) + (width * 0.05)}
            // bounces={false}
            // decelerationRate={0}
            contentContainerStyle={{paddingTop: 40}}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => get_detail_movie(item.id)} style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            {item.poster_path ? <Image style={styles.image} source={{uri: IMAGE_BASE_URL + item.poster_path}} />: <NoImage /> }
                        </View>
                        <View style={{backgroundColor: 'transparent', flex: 0.6,}} />
                        <View style={styles.contentContainer}>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.titleText}>{item.title}</Text>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Text>{new Date(item.release_date).getFullYear()}</Text>
                                <View style={styles.rateContent}>
                                    <MaterialIcons name="star-rate" size={14} color={colors.yellow} />
                                    <Text style={styles.ratingText}>{item.vote_average}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: width * 0.55,
        height: height * 0.30,
        margin: 10,
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: -50,
        left: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.white,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
    },
    contentContainer: {
        bottom: 0,
        flex: 0.4,
        justifyContent: 'space-evenly',
        // backgroundColor: 'black',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.darkGrey,
    },
    ratingContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    ratingText: {
        color: colors.yellow,
        fontSize: 18,
    },
    rateContent: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default popular;