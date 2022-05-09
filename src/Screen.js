import React, {Component, useState} from "react";

import {
  View,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
}from 'react-native';

export default class Screen extends  Component {
  render(){
    
    return ( 
      <View style= {styles.container}>
          <View style={styles.firstView}>
          
              <ImageBackground source={require('../assets/y.png')}
              style={styles.firstImage}> 

             </ImageBackground>
            
          </View>
          <View style={styles.secondView}>
          
         
             <Text style={styles.fractionalText}> Full screen page</Text>
             <Text style= {styles.newText}>Pages can be full screen as well.</Text>
             <Text style={styles.subText}>The simplest way to take a full page screenshot of your current window.</Text>
<TouchableHighlight style={styles.Button}
  underlayColor = 'transparent'
  onPress={()=> this.props.navigation.navigate('Title')}>
       <Image source={require('../assets/v.png')}
       style={styles.secondImage}></Image>
      </TouchableHighlight>
  </View>
         </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:'90%',
     width:'100%', 
    backgroundColor:'white'

  },
  firstView:{
    height:'50%',
    width:'100%', 
   backgroundColor:'white',
   alignItems: 'center',
   justifyContent: 'center',
   

  },
  secondView:
  {height:'65%',
  width:'100%', 
 backgroundColor:'white',
 flexDirection:'column',


 alignItems: 'center',
 justifyContent: 'center',
 

  },
  firstImage:{
    height:'100%',
    width:'100%',
    marginTop:11
  
},
  secondImage:{
    height:'75%',
    width:'90%',
   },
 fractionalText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101f3d',
    marginBottom:35
    
  },
  subText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    textAlign:'center',
    marginBottom:35
    
  },
 newText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    textAlign:'center',
    
    
  },
Button:{
    width: '15%',
    height: '10%',
    backgroundColor: 'green',
marginLeft:250,
    marginTop:15,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
 
},
registerText:{
 
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
},
countryDropdown:{
  position:'absolute',
  width:80,
  height:50,
  marginLeft:20,
  borderRadius:10,
  borderWidth:0.5,
  zIndex:3
,
text:{
  marginVertical:20,
  fontSize:25
},
touchableOpacity:{
  backgroundColor:'orange',
  alignSelf:'stretch',
  paddingHorizontal:20
}
}
})