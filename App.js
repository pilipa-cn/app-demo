import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyView from './PropsStateRef';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyView/>
        );
    }
}