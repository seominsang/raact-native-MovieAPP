import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

//단순히 스타일된 Tab버튼 모양의 컴포넌트이기에 함수형컴포넌트로 제작
const TabComponent= (props)=>{

    //선택된 값에 따라 글씨색상 변경
    let color= props.selected ? '#292929':'#929292';

    containerSytle.borderBottomColor= color;

    return (
        // 탭 터치가 되도록..
        <TouchableOpacity style={containerSytle} onPress={props.onPress}>
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    );
}

let containerSytle={
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'#929292',
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center',
};


export default TabComponent;