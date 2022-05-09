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
  TouchableHighlight,

 
}from 'react-native';

import Icon from "react-native-feather1s";
export default class Student extends  Component {
  render(){
    
    return (
      
      
      <View style= {styles.container}>
          <View style={styles.firstView}>
        
              <ImageBackground source={require('../assets/k.jpg')}
              style={styles.firstImage}> 

             </ImageBackground>
              <Text style={styles.studentText}> Student details</Text>
          </View>
          <View style={styles.secondView}>
          
          <ImageBackground source={require('../assets/n.jpg')}
              style={styles.secondImage}> 
              <TextInput style={styles.fullName}
placeholder= '   Full Name'
placeholderTextColor= 'grey'

textAlign='left'

> 
</TextInput>
<TextInput style={styles.email}
placeholder= '   Email'
placeholderTextColor= 'grey'

textAlign='left'> 
</TextInput>

  <Text style={styles.Sstate}>    Select State         
      <Icon   

name="chevron-right"
size={26}
color='grey'
thin={false}

style={{marginLet:10, marginTop:100}}>
</Icon>
</Text> 
<TextInput style={styles.pinCode}
placeholder= '   Pincode'
placeholderTextColor= 'grey'
keyboardType="number-pad"

textAlign='left'> 

</TextInput>
<TouchableHighlight style={styles.registerButton}
  underlayColor = 'transparent'
  onPress={()=> this.props.navigation.navigate('School')}>
        <Text style= {styles.registerText}>Register</Text>
      </TouchableHighlight>
</ImageBackground>

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
  secondView:{height:'55%',
  width:'100%', 
 backgroundColor:'white',
 borderRadius:8,
 borderWidth:1.5,
 alignItems: 'center',
 justifyContent: 'center',
 

  },
  firstImage:{
    height:'100%',
    width:'90%',
    marginTop:11
  
},
  secondImage:{
    height:'100%',
    width:'100%',
   },
  studentText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101f3d',
    marginBottom:35
    
  },
  fullName:{
    width: '90%',
height: '13%',
   backgroundColor:'#101f3d',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:20

},
email:{
    width: '90%',
height: '13%',
   backgroundColor:'#101f3d',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:10

},
state:{
    width: '90%',
height: '13%',
   backgroundColor:'#101f3d',
   color:'grey',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:10

},
Sstate:{
  width: '90%',
height: '13%',
 backgroundColor:'#101f3d',
 color:'grey',
 
 borderRadius:8,
borderWidth:0.5,
borderColor: 'grey',
marginLeft:20,
marginTop:10

},

pinCode:{
    width: '90%',
height: '13%',
   backgroundColor:'#101f3d',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:10,
 
 

},
registerButton:{
    width: '90%',
    height: '15%',
    backgroundColor: 'green',
    marginLeft:20,
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
},
chevron:{
  margintop:5,
  marginLeft:40
  
},
middleView:{
  height:'12%',
  width:'100%', 
 backgroundColor:'blue',
 width: '90%',
 
    backgroundColor:'#101f3d',
    
    borderRadius:8,
   borderWidth:0.5,
  borderColor: 'grey',
  marginLeft:18

},

}
})