import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        content:PropTypes.string.isRequired,
    };

    cond1 = true;

    updateText = (text:string) => {
        this.setState({text:text});
    };

    constructor(props) {
        super(props);
        this.state = {text:this.props.content};
    }

    render() {
        return (
            <View>
                {this.cond1 &&

                <Text>Hello, {this.props.content}</Text>
                }
            </View>
        );
    }
}