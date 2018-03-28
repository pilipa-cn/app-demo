import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FlexLayout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'red', height:60, width:60, justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24,}}>1</Text></View>
                <View style={{backgroundColor:'green', height:60, width:60,alignSelf:'flex-end', justifyContent: 'center', }}><Text>2</Text></View>
                <View style={{backgroundColor:'yellow', height:60, width:60, justifyContent: 'center', flex:3}}><Text>3</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
});
