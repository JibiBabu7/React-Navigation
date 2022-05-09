import React, {Component} from "react";
import {View,Text,StyleSheet} from 'react-native'
 

export default class Data extends Component {
    render(){
         return(
             <View style={styles.container}>
                 <Text style={styles.pageText}> Page</Text>

             </View>
         )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    },
   pageText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
})