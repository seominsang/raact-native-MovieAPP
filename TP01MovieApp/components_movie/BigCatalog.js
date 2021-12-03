import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const BigCatalog= (props)=>{
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>{ props.onPress(props.movie.id) }}>
            <Image 
                source={{uri:props.movie.large_cover_image}}
                style={{width: Dimensions.get('window').width, height:300}}>
            </Image>
            {/* 개봉일,영화제목,장르 등의 영화정보 겹쳐서 배치(absolute) */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    <Text style={style.labelGenre}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>            
            
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start',
    },
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',
        backgroundColor:'#E70915',
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity:0.8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8,
    },
    labelGenre:{
        fontSize:12,
        color:'white',
        padding:8,
    }
});

export default BigCatalog