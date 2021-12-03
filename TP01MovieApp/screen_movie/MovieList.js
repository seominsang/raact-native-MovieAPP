import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';

export default class MovieList extends Component{
    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";
               


        return (
            <ScrollView style={{flex:1, backgroundColor:'#FEFFFF'}}>
                {/* 큰 이미지로 가장 인기가 높은 영화리스트를 가로 스크롤(페이징기능)로 보여주기 */}
                {/* 서버 url fetch작업을 해야 하는데 이곳에서 하면 너무 복잡할 듯 하여 별도의 컴포넌트로 분리제작 */}
                <BigCatalogList 
                    url={bigUrl}
                    onPress={ (id)=>{this.props.navigation.navigate('MovieDetail',{"id":id,})}  }>
                </BigCatalogList>

                {/* 최신등록순, 평점순, 다운로드순 영화목록 보여주는 작은 사이즈의 가로 스크롤 리스트 */}
                {/* 같은 UI에 내용만 다르기에 별도의 컴포넌트로 제작하여 재사용하기 */}
                <SubCatalogList 
                    title="최신등록순"
                    url={recentUrl}
                    onPress={ (id)=>{this.props.navigation.navigate('MovieDetail',{"id":id,})}  }>
                </SubCatalogList>

                <SubCatalogList 
                    title="평점순"
                    url={ratingtUrl}
                    onPress={ (id)=>{this.props.navigation.navigate('MovieDetail',{"id":id,})}  }>
                </SubCatalogList>

                <SubCatalogList 
                    title="다운로드순"
                    url={downloadUrl}
                    onPress={ (id)=>{this.props.navigation.navigate('MovieDetail',{"id":id,})}  }>                    
                </SubCatalogList>
                
            </ScrollView>
        )
    }


    //render() 실행 후에 자동으로 실행되는 라이프사이클메소드
    //헤더영역을 수정
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>{
                return (
                    <TouchableOpacity style={{marginRight:16}} onPress={()=>this.props.navigation.toggleDrawer()}>
                        <Image source={require('../Images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },
            headerLeft: ()=> (
                <TouchableOpacity 
                    style={{flexDirection:'row', marginLeft:16, alignItems:'center'}}
                    onPress={ async ()=>{
                        //원래는 서버작업이 필요하지만 시간강.. AsyncStorage의 저장내역 삭제
                        await AsyncStorage.removeItem('email')
                        this.props.navigation.replace('Intro')
                    } }>
                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>
            )
        });
    }

}