import React, { useRef } from 'react';
import { View, Animated, FlatList, Dimensions, StyleSheet, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const UPCOMING_WIDTH = width * 0.70;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300'


const upcoming_movies = ({upcomingMovies}) => {

    const ScrollX = useRef(new Animated.Value(0)).current;

    return (
        <Animated.FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={UPCOMING_WIDTH + (width * 0.05)}
            onScroll={Animated.event([{nativeEvent: { contentOffset: { x: ScrollX}}}],
                {useNativeDriver: true})}
            // pagingEnabled
            decelerationRate={0}
            style={{flexGrow: 0}}
            data={upcomingMovies.slice(0, 5)}
            renderItem={item => item.id}
            renderItem={({item, index}) => {

                const inputRange = [
                    (index -1) * UPCOMING_WIDTH,
                    index * UPCOMING_WIDTH,
                    (index + 1) * UPCOMING_WIDTH,
                ]

                const scale = ScrollX.interpolate({
                    inputRange,
                    outputRange: [0.85, 1, 0.85]
                })

                return (
                    <View styles={{width: UPCOMING_WIDTH, }}>
                        <Animated.View style={{...styles.upcomingContainer, transform: [{scale}]}}>
                            <Image style={styles.image} source={{uri: IMAGE_URL + item.poster_path}} />
                        </Animated.View>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    upcomingContainer: {
        width: UPCOMING_WIDTH,
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 10,
        height: height * 0.50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'white',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
})

export default upcoming_movies;