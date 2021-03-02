import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../config';

const modal = () => {

    return (
        <Modal
                style={{backgroundColor: 'black'}}
                visible={true}
            >
            <View style={styles.container}>
                    <ActivityIndicator color={colors.white} size='large' />
                    <Text>blak</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default modal;