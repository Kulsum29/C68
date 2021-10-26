import React, {Component } from 'react';
import {Text, View} from 'react-native';

export default class TransactionScreen extends Component {
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>Issue or Return</Text>
            </View>
        )
    }
}