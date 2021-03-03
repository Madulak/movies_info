import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../config';
import { MaterialIcons } from '@expo/vector-icons';

const no_image_found = () => {

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center',}}>
                <MaterialIcons name="error-outline" size={24} color="black" />
                <Text>No Image</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default no_image_found;