import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//사용할 스크린 컴포넌트들 import
import Login from '../screen_login/Login';
import SignUp from '../screen_login/SignUp';
import ResetPW from '../screen_login/ResetPW';

const Stack= createStackNavigator();

//단순 Navigator컴포넌트 이기에 함수형 컴포넌트로 제작
export default LoginNav= ()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="ResetPW" component={ResetPW}></Stack.Screen>
        </Stack.Navigator>
    );
}