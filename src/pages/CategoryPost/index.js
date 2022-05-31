import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CategoryPost(){
    return(
        <View style = {styles.container}>
            <Text>Posts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})