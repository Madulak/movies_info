import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image, Animated, Touchable } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { colors, IMAGE_BASE_URL } from '../config';
import NoImage from './no_image_found';
const { width, height } = Dimensions.get('window');

const found_search = ({movies, get_detail_movie}) => {

    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = (height * 0.25) 

    return (
        <View style={{flex: 1,}}>
            <Animated.FlatList
                listKey='5'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20, paddingBottom: height * 0.10, }}
                onScroll={Animated.event([{ nativeEvent: {contentOffset: { y: scrollY}}}],
                    {useNativeDriver: true})}
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => {

                    const inputRange = [
                        -1,
                        // -1,
                        ITEM_SIZE * index,
                        ITEM_SIZE * index 
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [0.9,1,0.9]
                    })
                    return (
                        <TouchableOpacity onPress={() => get_detail_movie(item.id)} style={{...styles.movieContainer,}}>
                                <View style={styles.imageContainer}>
                                    {item.poster_path ?<Image style={styles.image} source={{uri: IMAGE_BASE_URL + item.poster_path }} />: <NoImage />}
                                </View>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 0.45,}} />
                                    <View style={{flex: 0.55, padding: 10, justifyContent: 'space-evenly', marginLeft: 10,}}>
                                        <View>
                                            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.titleText}>
                                                {item.title}
                                            </Text>
                                        </View>

                                        <View style={styles.ratingContainer}>
                                            <Text>{new Date(item.release_date).getFullYear()}</Text>
                                            <View style={styles.rateContent}>
                                                <MaterialIcons name="star-rate" size={14} color={colors.yellow} />
                                                <Text style={styles.ratingText}>{item.vote_average}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        width: width * 0.90,
        height: height * 0.25,
        marginVertical: 25,
        backgroundColor: colors.lightGrey,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
    },
    imageContainer: {
        width: '45%',
        height: '120%',
        position: 'absolute',
        top: - height * 0.04,
        left: height * 0.02,
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
    titleText: {
        color: colors.darkGrey,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
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
        marginLeft: 5,
    }
})

export default found_search;