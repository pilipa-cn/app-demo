import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: 'green',
                    height: 60,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}><Text>居中显示</Text><Text>居中显示</Text></View>
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
        flexDirection: 'row'
    },
});
