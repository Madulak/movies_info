import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../config';

const loading = () => {

    return (
        <LinearGradient 
            style={{...styles.container}}
            colors={[colors.lightGrey, colors.darkGrey]}
        >  
            <ActivityIndicator size='large' color={colors.lightGrey} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default loading;