import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../config';

const { width, height } = Dimensions.get('window');

const movie_info = ({single_movie}) => {

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <AntDesign name="play" size={20} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 16, color: colors.darkGrey}}>Playing  </Text>
                </View>
                <View>
                    <Text>{single_movie.runtime} minutes</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <MaterialIcons name="style" size={20} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 16, color: colors.darkGrey}}>Genre </Text>
                </View>
                <View>
                    {/* <Text>{single_movie.genres[0].name ? single_movie.genres[0].name : 'Drama'}</Text> */}
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Fontisto name="date" size={20} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 16, color: colors.darkGrey}}>Release Year </Text>
                </View>
                <View>
                    <Text>{new Date(single_movie.release_date).getFullYear()}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <MaterialIcons name="star-rate" size={20} color={colors.yellow} />
                    <Text style={{marginLeft: 5, fontSize: 16, color: colors.darkGrey}}>Rating </Text>
                </View>
                <View>
                    <Text>{single_movie.vote_average}</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

})

export default movie_info;