import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';

//탭화면 컴포넌트 import
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class ResetPW extends Component{

    //탭에 따라 화면구성이 달라지기에 특별한 변수 state
    state={
        tabs: ["이메일", "전화번호"],
        tabIndex: 0,
        messages:[
            "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
            "전화번호를 입력하면 임시 비밀번호를 보내드립니다.",
        ],
    }

    render(){
        return (
            <View style={style.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 자물쇠 이미지 표시 영역 */}
                    <View style={style.lockImageConatainer}>
                        <Image source={require('../Images/lock.png')}></Image>
                    </View>

                    {/* 1.2 타이틀 글씨 */}
                    <Text style={style.title}>로그인에 문제가 있나요?</Text>

                    {/* 1.3 선택된 탭에 따라 다른 메세지 보이도록  */}
                    <Text style={style.message}> {this.state.messages[ this.state.tabIndex ]} </Text>

                    {/* 1.4 탭화면 구성 */}
                    <View style={style.tabContainer}>
                        {
                            this.state.tabs.map( (value, index)=>{
                                return <TabComponent onPress={ ()=>this.setState({tabIndex:index}) } selected={ index==this.state.tabIndex } label={value}></TabComponent>
                            } )
                        }
                    </View>

                    {/* 1.5 입력박스 만들기 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.6 버튼 */}
                    <View style={{width:'100%', margin:16,}}>
                        <Button title="다음" onPress={ ()=>Alert.alert('임시비밀번호가 발송되었습니다.','로그인 후 정보수정을 통해 안전한 비밀번호로 변경해 주시기 바랍니다.') }></Button>
                    </View>



                </View>

                {/* 2. footer영역 */}
                <View style={style.footer}>
                    <Text onPress={()=>this.props.navigation.goBack()} style={style.goBack}>로그인화면으로 돌아가기</Text>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    goBack:{
        color:'#3796EF',
        textAlign:'center',
    },
    lockImageConatainer:{
        padding:24,
        borderWidth:2,
        borderRadius:100,
        margin:16,
    },
    title:{
        fontSize:16,
        marginBottom:16,
    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    }

});