import React,{Component} from 'react';
import {View,ActivityIndicator,Button, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

//Intro컴포넌트는 단순하게 로딩화면을 보여주는 간단한 컴포넌트임.
//그래서 state같은 특별한 멤버가 필요하지 않은 컴포넌트임.

// 그렇다면 좀 가볍게 제작이 가능한 함수형 컴포넌트를 사용해보기
//함수형 컴포넌트는 props를 함수 파라미터로 받음
export default Intro= ( props )=>{

    //AsyncStorage에 저장된 이메일정보가 있다면 곧바로 Main으로..
    //없다면 Login화면으로..
    AsyncStorage.getItem('email')
    .then( (value)=>{
        if(value) props.navigation.replace('MainDrawerNav')
        else props.navigation.replace('LoginNav')
    })

    //위 코드는 비동기 방식이기에 작업 중에 아래 리턴한 프로그레스가 보이게 됨.
    return (
        <View style={style.root}>
            <ActivityIndicator size="large" color="indigo"></ActivityIndicator>            
        </View>
    );    
}

// export default class Intro extends Component{
//     render(){
//         return (
//             <View style={style.root}>
//                 <ActivityIndicator size="large" color="indigo"></ActivityIndicator>
//                 <Button title="go" onPress={()=>{this.props.navigation.navigate('LoginNav')}}></Button>
//             </View>
//         );
//     }
// }

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});