import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator, Alert} from 'react-native';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{

    state={
        movie:null,  //영화 상세정보 객체
    }

    componentDidMount(){
        this.loadData();
    }

    //영화상세정보 받아오는 기능메소드
    loadData= ()=>{
        const {id}= this.props.route.params;        
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then( res => res.json() )
        .then( json => this.setState({movie: json.data.movie}) )
    }

    render(){

        //navigation.navigate()메소드의 두번째 파라미터로 전달된 데이터들 받기
        const id= this.props.route.params.id;

        return this.state.movie ? 
        (
            <ScrollView>
                {/* 큰 타이틀 이미지 표시.. 이전에 만들었던 BigCatalog.js 컴포넌트 활용 */}
                <BigCatalog movie={this.state.movie}></BigCatalog>

                {/* 영화정보 출력 영역 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{this.state.movie.runtime}분</Text>
                        <Text>평점 : {this.state.movie.rating}</Text>
                        <Text>좋아요 : {this.state.movie.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 출력 영역 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.desc}>{this.state.movie.description_full}</Text>
                </View>

                {/* 배우 캐스팅 정보출력 */}

                {/* 스크린샷 이미지들.. */}

            </ScrollView>
        ) : 
        (
            // 로딩중임을 표시
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="red"></ActivityIndicator>
            </View>
        )
    }
}

const style= StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16,
        paddingLeft:16,
        paddingBottom:8,
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
    },
    desc:{
        paddingLeft:16,
        paddingRight:16,
    }
});