import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Tab에 의해 전환될 스크린들 import
import Community from '../screen_community/Community';
import Favor from '../screen_community/Favor';
import Map from '../screen_community/Map';

const Tab= createMaterialTopTabNavigator();

//단순 Navigator이기에 함수형 컴포넌트
const CommunityTabNav= ()=>{
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Community" component={Community}></Tab.Screen>
            <Tab.Screen name="Favor" component={Favor}></Tab.Screen>
            <Tab.Screen name="Map" component={Map}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default CommunityTabNav