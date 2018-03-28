import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import a from './module_func/lib2';
import {b} from './module_func';
import Item from './module_ui/UiItem';

export default class extends React.Component {

    constructor(props) {
        super(props);

        console.log(a(2));
        console.log(b());
    }

    render() {
        return (
            <View style={styles.container}>
                <Item/>
                <Item/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
});