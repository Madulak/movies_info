import React, { useRef } from 'react';
import { View, Animated, FlatList, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const UPCOMING_WIDTH = width * 0.70;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';




const upcoming_movies = ({upcomingMovies, get_detail_movie}) => {

    const ScrollX = useRef(new Animated.Value(0)).current;

    return (
        <>
            <Animated.FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={UPCOMING_WIDTH + (width * 0.05)}
                onScroll={Animated.event([{nativeEvent: { contentOffset: { x: ScrollX}}}],
                    {useNativeDriver: true})}
                // pagingEnabled
                decelerationRate={0}
                style={{flexGrow: 0}}
                data={upcomingMovies.slice(3, 8)}
                renderItem={item => item.id.toSting()}
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
                        <TouchableOpacity onPress={() => get_detail_movie(item.id)} styles={{width: UPCOMING_WIDTH, }}>
                            <Animated.View style={{...styles.upcomingContainer, transform: [{scale}]}}>
                                <Image style={styles.image} source={{uri: IMAGE_URL + item.poster_path}} />
                            </Animated.View>
                        </TouchableOpacity>
                    );
                }}
            />

            {/* <View style={{}}>
            {upcomingMovies.map((el, index) => {
                const inputRange = [
                    (index -1) * width,
                    (index * width) + (width * 0.5),
                    (index + 1) * width,
                ]

                const opacity = ScrollX.interpolate({
                    inputRange,
                    outputRange: [.2, 1, .2]
                })

                const translateY = ScrollX.interpolate({
                    inputRange,
                    outputRange: [20, 0, 20]
                })
                return (
                    <View  style={{ width}}>
                        <Animated.Text style={{...styles.animatedTitle, position: 'absolute', opacity}}>{el.title}</Animated.Text>
                    </View>
                );
            })}
            </View> */}
        </>
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