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

export default class More extends  Component {
  render(){
    
    return (
      
      
      <View style= {styles.container}>
          <View style={styles.firstView}>
          {/* <Navbar.Text className="search">
                <FormControl style={{width:500}}
            placeholder='Search a Product'
            className="m-auto"/>

            </Navbar.Text> */}
              <ImageBackground source={require('../../assets/z.png')}
              style={styles.firstImage}> 

             </ImageBackground>
            
          </View>
          <View style={styles.secondView}>
          
         
             <Text style={styles.fractionalText}> Another title page.</Text>
             <Text style={styles.subText}>Another beautiful body part of the page.</Text>
<TouchableHighlight style={styles.Button}
  underlayColor = 'transparent'
  onPress={()=> this.props.navigation.navigate('Home')}>
     <Text style={styles.buttonText}>Done</Text>
      
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
  {
      height:'65%',
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
    // backgroundColor: 'green',
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
},
text:{
  marginVertical:20,
  fontSize:25
},
touchableOpacity:{
  backgroundColor:'orange',
  alignSelf:'stretch',
  paddingHorizontal:20
},
buttonText:{
   
  fontSize:18,
  color:'black',
  fontWeight:'bold'


}
})