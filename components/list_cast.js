import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';

import NoImage from './no_image_found';
import { colors, IMAGE_BASE_URL } from '../config';
const { width, height } = Dimensions.get('window');

const list_cast = ({cast}) => {

    return (
        <FlatList
            horizontal
            data={cast}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 15,}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
                return (
                    <View style={styles.castContainer}>
                        <View style={styles.imageContainer}>
                            {item.profile_path ? <Image style={styles.image} source={{uri: IMAGE_BASE_URL + item.profile_path}} />: <NoImage />}
                        </View>
                        <View>
                            <Text style={styles.realnameText} numberOfLines={1}>{item.name}</Text>
                            <Text style={styles.characterText} numberOfLines={1}>{item.character}</Text>
                        </View>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    castContainer: {
        margin: 10,
        width: width * 0.30,
        height: width * 0.30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '80%',
        height: '80%',
        borderRadius: width * 0.20,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: width * 0.20,
    },
    realnameText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.darkGrey,
        textAlign: 'center',
    },
    characterText: {
        fontSize: 12,
        color: colors.darkGrey,
        textAlign: 'center',
    }
})

export default list_cast;