import React, {Component} from "react";
import {View,Text,StyleSheet,TextInput,StatusBar,ImageBackground,Image} from 'react-native'
 

export default class Order extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstView}>
                 <TextInput placeholder='Search Here...'
               style={styles.search}> 
               </TextInput>

                </View>
      <View style={styles.secondView}>
      <ImageBackground source={require('../../assets/b7.jpg')}
    style={styles.profileImage}>
        <Image source={require('../../assets/e4.jpg')}
          style={styles.round} >

           </Image>
    </ImageBackground>
    </View>
       <View style={styles.thirdView}>
       <ImageBackground source={require('../../assets/e1.jpg')}
    style={styles.profileImage}>
           <Image source={require('../../assets/e4.jpg')}
          style={styles.round} >

           </Image>
    </ImageBackground>
       </View>
       <View style={styles.fourthView}>
       <ImageBackground source={require('../../assets/e2.png')}
    style={styles.profileImage}>
         <Image source={require('../../assets/e4.jpg')}
          style={styles.round} >

           </Image>
    </ImageBackground> 
</View>

            </View>
        )
   }
} 


const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    firstView:{
        height:'15%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'#BEC3CE'
       
    
      },
      secondView:{
        height:'25%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
      
       marginTop:10
    
      },
      thirdView:{
        height:'28%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
      
       marginTop:10
    
      },
      fourthView:{
        height:'28%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
    
       marginTop:10
    
    
      },
       search:{
           width:'90%',
           height:'38%',
           paddingLeft:30,
           fontSize:16,
           paddingHorizontal:15,
           backgroundColor:'#f7f3f3',marginTop:StatusBar.currentHeight,
           borderRadius:8,
           marginBottom:40
           
       },
   resourcesText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    round:{
        height:45,
        width:45,
        marginTop:130,
        marginLeft:330,
        borderRadius:22
    },
  
})