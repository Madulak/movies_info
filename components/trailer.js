import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const trailer = ({trailer}) => {

    return (
        <View style={styles.webviewContainer}>
                
            {trailer.results.length === 0 ?
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>No Trailer At the moment</Text>
                </View>
                :
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo
                    source={{uri:`https://www.youtube.com/embed/${trailer.results[0].key}`}}
                    />
            }

        </View>
    );
}

const styles = StyleSheet.create({
    webviewContainer: {
        width:"100%",
        height: height * 0.40,
    },
})

export default trailer;