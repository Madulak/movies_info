import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../config';
import Found_Search from '../components/found_search';

import { useDispatch, useSelector } from 'react-redux';
import * as movieActions from '../store/actions';

const { width, height } = Dimensions.get('window');

const search = ({navigation}) => {

    const ref = useRef();
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.search_movies);
    const number_of_movies_found = useSelector(state => state.movies.total_results);

    useEffect(() => {
        ref?.current?.focus();
    },[])

    const movie_search_handler = () => {
        if (query.length > 2) {
            dispatch(movieActions.get_search(query));
            setQuery('');
        }
    }

    const get_detail_movie = (id) => {
        navigation.navigate('movie detail', { id: id})
    }

    return (
        
        
                <LinearGradient 
                    style={{...styles.container}}
                    colors={[colors.lightGrey, colors.darkGrey]}
                >   
                    <View style={styles.topButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer}>
                            <Entypo name="dots-three-horizontal" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.findContainer}>
                        <AntDesign sty={styles.icon} name="search1" size={24} color={colors.black} />
                        <TextInput ref={ref} 
                            onSubmitEditing={movie_search_handler} 
                            returnKeyType={query.length > 1 ? 'search' : 'default'}
                            placeholder='Search Movie...' 
                            style={styles.textInput} 
                            value={query}
                            onChangeText={(e) => setQuery(e)}
                        />
                    </View>
                    {movies !== null  && <Found_Search number_of_movies_found={number_of_movies_found} get_detail_movie={get_detail_movie} movies={movies} />}
                    
                </LinearGradient>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        
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
    findContainer: {
        width: width * 0.90,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
    },
    icon: {
        flex: 0.2
    },
    textInput: {
        flex: 0.8,
        paddingHorizontal: 10,
    },
    
})

export default search;