import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Map extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text>MAP</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})