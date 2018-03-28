import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropsStateComponent from './module_ui/PropsStateComponent';

export default class extends React.Component {
    state = {text:'a'};

    doClick = () => {
        console.log("click");
        // this.refs.myComponent.updateText("新文本");
        this.setState({text:'啊啊啊'});
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.doClick}>
                    <PropsStateComponent ref="myComponent" content={this.state.text} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
});