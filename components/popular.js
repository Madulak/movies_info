import React from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, Image } from 'react-native';
import { colors, IMAGE_BASE_URL } from '../config';
const { width, height } = Dimensions.get('window');


const popular = ({upcomingMovies}) => {

    const daete = (data) => {
        // console.log('{}[]{}',data.split('-')[0])
        return data;
    }

    return (
        <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={upcomingMovies.slice(15, 19)}
            contentContainerStyle={{paddingTop: 40}}
            renderItem={({item}) => {
                return (
                    <View style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: IMAGE_BASE_URL + item.poster_path}} />
                        </View>
                        <View style={{backgroundColor: 'transparent', flex: 0.6,}} />
                        <View style={styles.contentContainer}>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.titleText}>{item.title}</Text>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Text>{daete(item.release_date)}</Text>
                                <Text>{item.vote_average}</Text>
                            </View>
                        </View>
                    </View>
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
        width: '80%',
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
    }
})

export default popular;