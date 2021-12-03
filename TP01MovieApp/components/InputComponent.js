import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//단순히 스타일링된 TextInput이어서 함수형 컴포넌트가 제작하기 적합함.
const InputComponent= (props)=>{
    return (
        <View style={style.container}>
            <TextInput
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize="none"
                placeholderTextColor="#c3c2c8"
                selectionColor="#929292"
                onChangeText={props.onChangeText} //이 컴포넌트를 사용하는 쪽에서 콜백함수를 전달받아 지정

                style={style.input}>
            </TextInput>
        </View>
    );
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,
        color:'#292929',
    }
});

export default InputComponent;