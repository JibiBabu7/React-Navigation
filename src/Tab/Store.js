import React, {Component} from "react";
import {View,Text,StyleSheet,TextInput,StatusBar,ImageBackground} from 'react-native'
 

export default class Store extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstView}>
                 <TextInput placeholder='Search Here...'
               style={styles.search}> 
               </TextInput>

                </View>
      <View style={styles.secondView}>
      {/* <Text style={styles.resourcesText}>Ongoing Courses!!</Text>
      <Text style={styles.Text}>12 Enrolled Corses
      </Text> */}
      <ImageBackground source={require('../../assets/b1.jpg')}
    style={styles.profileImage}>

    </ImageBackground>
    </View>
       <View style={styles.thirdView}>
       <ImageBackground source={require('../../assets/b5.jpg')}
    style={styles.thrdImage}>

    </ImageBackground>
       </View>
       <View style={styles.fourthView}>

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
        backgroundColor:'#D4FBFA'
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
        height:'30%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
    //    flexDirection:'row',
       backgroundColor:'white'
    
      },
      thirdView:{
        height:'55%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'orange'
    
      },
      fourthView:{
        height:'5%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'white'
    
    
      },
       search:{
           width:'90%',
           height:'39%',
           paddingLeft:30,
           fontSize:16,
           paddingHorizontal:15,
           backgroundColor:'#f7f3f3',marginTop:StatusBar.currentHeight,
           borderRadius:8,
           marginBottom:40
           
       },
   resourcesText:{
        fontSize:26,
        fontWeight:'bold',
        color:'#1F6648'
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#527365'
    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    Image:{
        height:150,
        width:'100%'
    },
    thrdImage:{
        height:'100%',
        width:'100%'
    },
})