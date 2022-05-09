import React from 'react'
import {
    View,Text,StyleSheet,TextInput,StatusBar
}from 'react-native';

 
 const Sort = ({children}) => {
     return(
         <View style={styles.container}>
             {children}
           
         </View>

     )
 }

 const styles = StyleSheet.create({
   container:{
      marginTop:StatusBar.currentHeight,
      paddingHorizontal:15,
      backgroundColor:'#f7f3f3',
      flex:1


   },
   search:{
       width:'100%',
       height:'100%',
       paddingLeft:8,
       fontSize:16
   }
 })



 export default Sort;