/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage,
} from 'react-native';

class AsyncStorageDemo extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                   要保存的数据
                </Text>
                <TextInput
                    ref={textInput=>this.textInput = textInput}
                    style={{
                        width: 300,
                        height: 48,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }}
                    onChangeText={(text) => {
                        this.setState({text: text});
                    }}
                    value={this.state.text}
                />
                <Text
                    onPress={()=> {
                        AsyncStorage.setItem('textInput', this.state.text, (err, result)=> {
                            console.log('AsyncStorage.setItem');
                        });
                    }}
                >保存</Text>
            </View>
        );
    }

    componentDidMount() {
        AsyncStorage.getItem('textInput', (err, result)=> {
            if (result) {
                this.setState({
                    text: result,
                });
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AsyncStorageDemo', () => AsyncStorageDemo);
