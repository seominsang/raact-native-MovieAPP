
// ##  앱 제작의 주요 작업 순서 ###########################################
// 1) react navigation, AsyncStorage 라이브러리 설치
// 2) Intro 화면 컴포넌트 제작 [ Intro.js ]
// 3) Login 관련 화면 컴포넌트와 Navigator 제작 [screen_login폴더, navigators폴더, components폴더 ]
// 4) 앱의 주요기능 및 서비기능 관련 작업
//   4.1) 앱의 주요기능(영화정보기능) 화면 컴포넌트들과 Navigator제작 [screen_movie폴더]
//   4.2) 앱의 서브기능(커뮤니티 등) 화면 컴포넌트들과 Navigator제작  [screen_community폴더]
// ########################################################################

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//최상위 Navigator에 의해 전환될 스크린(컴포넌트) or Navigator 사용을 위한 import
import Intro from './Intro';  //기존 로그인여부 체크하는 화면 컴포넌트
import LoginNav from './navigators/LoginNav'; //로그인 화면들을 가진 Navigator
import MainDrawerNav from './navigators/MainDrawerNav'; //메인화면들을 가진 Navigator

//앱 전체 화면들을 전화할때 사용할 Navigator객체 생성
const RootStack= createStackNavigator();

//NaviationContainer를 가진 root컴포넌트 - 앱의 시작 컴포넌트
export default class Main extends Component{
    render(){
        return (
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{headerShown:false}}>
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                    <RootStack.Screen name="LoginNav" component={LoginNav}></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={MainDrawerNav}></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}
