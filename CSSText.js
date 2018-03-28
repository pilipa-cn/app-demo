import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>文本样式继承</Text>
                <View style={{backgroundColor:'#333',padding:10}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>
                        <Text style={{color:'red'}}>
                            <Text>父：我是white还是red{'\n'}
                                <Text>子：那我是神马颜色</Text>
                            </Text>
                        </Text>
                        <Text>{'\n'}我应该是white</Text>
                    </Text>
                </View>
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
