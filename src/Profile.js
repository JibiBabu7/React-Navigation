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

export default class Profile extends  Component {
  render(){
    
    return (
      
      
      <View style= {styles.container}>
          <View style={styles.firstView}>
          
              <ImageBackground source={require('../assets/u.png')}
              style={styles.firstImage}> 

             </ImageBackground>
            
          </View>
          <View style={styles.secondView}>
          
         
             <Text style={styles.fractionalText}> Fractional shares</Text>
             <Text style={styles.subText}>Insted of having to buy an entire share, invest  any amount you want.</Text>
<TouchableHighlight style={styles.Button}
  underlayColor = 'transparent'
  onPress={()=> this.props.navigation.navigate('Wallpaper')}>
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
    height:'100%',
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
  {height:'55%',
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